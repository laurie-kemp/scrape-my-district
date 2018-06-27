import React, {Component} from 'react';
import { connect } from 'react-redux';
import { fetchUpdates } from '../../actions/updates';

class TopCompanies extends Component {

  state = {
    yearBack: null,
    filteredUpdates: null,
  }

  calcYearBack = () => {
    const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    const deconstructedDate = currentDate.split('-')
    const yearCount = Number(deconstructedDate[0]) - 1
    deconstructedDate[0] = yearCount.toString()
    const yearBack = deconstructedDate.join('-')
    this.setState({yearBack: Date.parse(yearBack)})
  }

  calcQuarterBack = () => {
    const currentDate = new Date().toJSON().slice(0,10).replace(/-/g,'-');
    const deconstructedDate = currentDate.split('-')
    let quarterCount = Number(deconstructedDate[1]) - 3
    if (quarterCount === 0) {
      quarterCount = 12
      deconstructedDate[1] = quarterCount.toString()
    } else if (quarterCount === -1) {
      quarterCount = 11
      deconstructedDate[1] = quarterCount.toString()
    } else if (quarterCount === -2) {
      quarterCount = 10
      deconstructedDate[1] = quarterCount.toString()
    } else {
      deconstructedDate[1] = quarterCount.toString()
    }
    const quarterBack = deconstructedDate.join('-')
    this.setState({quarterBack: Date.parse(quarterBack)})
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
    filteredUpdates.map(update => {
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
    this.setState({companyData})
  }

  calcPercentages = () => {
    const { companyData } = this.state;
    console.log(companyData[0].change)
    const percentage = (Number(companyData[companyData.length-1].change) / Number(companyData[0].change)) * 100
    console.log(percentage)
  }

  render() {
    // if (this.state.filteredUpdates) {
    //   this.calcPercentage()
    // }
    console.log(this.state)
    return (
      <div>
        <button onClick={() => this.filterByYear()}>Filter</button>
        <button onClick={() => this.calcPercentages()}>Percentage</button>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    updates: state.updates
  }
}

export default connect(mapStateToProps, {fetchUpdates})(TopCompanies)
