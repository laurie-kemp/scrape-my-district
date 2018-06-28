import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUpdates } from '../../actions/updates';
import { Redirect } from 'react-router-dom'

class TopCompanies extends Component {
  state = {
    yearBack: null,
    filteredUpdates: null,
    percentages: null,
  }
  calcYearBack = () => {
    const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    const deconstructedDate = currentDate.split('-')
    const yearCount = Number(deconstructedDate[0]) - 1
    deconstructedDate[0] = yearCount.toString()
    const yearBack = deconstructedDate.join('-')
    this.setState({yearBack: Date.parse(yearBack)})
  }

  componentDidMount() {
    this.calcYearBack()
    this.props.fetchUpdates()
  }
  filterByYear = () => {
    const { updates } = this.props;
    let filteredUpdates = []
    updates.forEach(update => {
      if (Date.parse(update.timestamp) > this.state.yearBack) {
        filteredUpdates.push(update)
      }
    })
    this.divideCompanies(filteredUpdates)
  }
  divideCompanies = (filteredUpdates) => {
    let companies = []
    filteredUpdates.forEach(update => {
        companies.push(update.company)
    })
    const companiesWithoutDuplicates = Array.from(new Set(companies))
    const fte = filteredUpdates.filter(update => update.columnName === 'fte')
    let companyData = []
    companiesWithoutDuplicates.forEach(company => {
      let data = []
      fte.forEach(update => {
        if (update.company === company) {
          data.push(update)
        }
      })
      if (data.length > 1)
      companyData = [...companyData, {[company]: [...data]}]
    })
    this.calcPercentages(companyData)
  }
  calcPercentages = (companyData) => {
    let percentages = []
    let completeValues = []
    companyData.forEach(company => {
      const value = Object.values(company)
      percentages.push({[value[0][0].company]: (Number(value[0][value[0].length-1].change) / Number(value[0][0].change)) * 100})
      value[0].forEach(companyObject => {
        completeValues = [...completeValues, {[companyObject.company]: Number(companyObject.change)}]
      })
    })

    percentages.sort((a, b) => Object.values(b)[0] - Object.values(a)[0])

    if (percentages.length > 10) {
      percentages.slice(percentages.length - 10, percentages.length)
    }

    this.setState({percentages})

  }
  render() {
    if (!this.props.currentUser) return <Redirect to="/login" />

    if (this.props.updates.length > 0 && !this.state.percentages) {
      this.filterByYear()
    }
    return (
      <div>
        <div>
          {this.state.percentages && this.state.percentages.map(value => (
            <div key={`${Object.keys(value)}`}>
              <h3>{`Company: ${Object.keys(value)}`}</h3>
              <h3>{`${Object.values(value)}%`}</h3>
            </div>
          ))}
        </div>
      </div>
    )
  }
}
const mapStateToProps = state => {
  return {
    updates: state.updates,
    currentUser: state.currentUser
  }
}
export default connect(mapStateToProps, {fetchUpdates})(TopCompanies)