import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchUpdates } from '../../actions/updates';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Reports extends Component {

    state = {
        renderAll: false,
        renderSpecific: false,
        renderSpecificColumn: false,
        renderOptions: false
    }

    componentDidMount() {
        this.props.fetchUpdates()
    }

    renderAllUpdates = () => {
        const {updates} = this.props
        return (
            <div>
                {updates.map((update, i) => (
                    <div key={`${i} ${update.company}`}>
                        <h1>{update.company}</h1>
                        <h2>{update.timestamp}</h2>
                        <h2>{update.columnName}</h2>
                        <h2>{update.change}</h2>
                    </div>
                ))}
            </div>
        )
    }

    renderSpecificUpdates = (company) => {
        let filteredByCompany = []
        this.props.updates.forEach(update => {
            if (update.company === company) filteredByCompany.push(update)
        })
        this.setState({filtered: filteredByCompany, renderSpecific: true})
        if (this.state.column && filteredByCompany.length > 1) {
            const filteredByColumn = filteredByCompany
                .filter(update => {
                    return update.columnName === this.state.column
            })
            this.setState({filtered: filteredByColumn, renderSpecific: true})
        } else if (this.state.column) {
            const filteredByColumn = this.props.updates
                .filter(update => {
                    return update.columnName === this.state.column
            })
            this.setState({filtered: filteredByColumn, renderSpecific: true})
        }
    }

    getSpecificUpdates = () => {
        const updates = this.props.updates
        let companies = []
        let columns = []
        updates.map(update => {
            companies.push(update.company)
            columns.push(update.columnName)
        })
        const companiesWithoutDuplicates = Array.from(new Set(companies))
        const columnsWithoutDuplicates = Array.from(new Set(columns))

        this.setState({companies: companiesWithoutDuplicates, renderOptions: true, columns: columnsWithoutDuplicates, value: companiesWithoutDuplicates[0]})
    }

    setRenderAll = () => {
        this.setState({renderAll: true})
    }

    handleCompanyChange = (e) => {
        if (e) {
            const value = e.value
            this.setState({company: value});
        } else {
            this.setState({company: ''})
        }
    }

    handleColumnChange = (e) => {
        if (e) {
            const value = e.value
            this.setState({column: value});
        } else {
            this.setState({column: ''})
        }
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.renderSpecificUpdates(this.state.company)
    }

    companyOptionsList = () => {
        let options = []
        this.state.companies.forEach(company => {
            options.push({value: company, label: company})
        })
        return options
    }

    columnsOptionsList = () => {
        let options = []
        this.state.columns.forEach(column => {
            options.push({value: column, label: column})
        })
        return options
    }

    render() {
        return (
            <div>
                <button onClick={() => this.setRenderAll()}>Fetch all updates</button>
                <button onClick={() => this.getSpecificUpdates()}>Get specific updates</button>
                <button onClick={() => this.setState({renderAll: false, renderSpecific: false, filtered: null})}>Clear search</button>
                {this.state.renderOptions && 
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            <label>Fetch updates for company
                            </label>
                            <Select
                                name="form-field-name"
                                value={this.state.company}
                                onChange={this.handleCompanyChange}
                                options={this.companyOptionsList()}
                            />
                            <Select
                                name="form-field-name"
                                value={this.state.column}
                                onChange={this.handleColumnChange}
                                options={this.columnsOptionsList()}
                            />
                            <input type='submit' value='Submit'/>
                        </form>
                        <div>
                            {this.state.renderSpecific && 
                                <div>
                                    {this.state.filtered &&this.state.filtered.map((update, i) => {
                                    return (
                                        <div key={`${i} ${update.company}`}>
                                            <h1>{update.company}</h1>
                                            <h2>{update.timestamp}</h2>
                                            <h2>{update.columnName}</h2>
                                            <h2>{update.change}</h2>
                                        </div>
                                    )})}
                                </div>
                            }
                        </div>
                    </div>
                }
                {this.state.renderAll && this.renderAllUpdates()}
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        updates: state.updates
    }   
}

export default connect(mapStateToProps, {fetchUpdates})(Reports)