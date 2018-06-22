import React, {Component} from 'react'
import { connect } from 'react-redux';
import { fetchUpdates } from '../../actions/updates';
import Select from 'react-select';
import 'react-select/dist/react-select.css';

class Reports extends Component {

    state = {
        renderAll: false,
        renderSpecific: false,
        renderOptions: false,
        renderSpecificUpdates: null,
        value: ''
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

    renderSpecificUpdates = () => {
        let filteredUpdates = []
        this.props.updates.forEach(update => {
            if (update.company === this.state.value) filteredUpdates.push(update)
        })
        return (
            <div>
                {filteredUpdates.map((update, i) => (
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

    getSpecificUpdates = () => {
        const updates = this.props.updates
        let companies = []
        updates.map(update => companies.push(update.company))
        const companiesWithoutDuplicates = Array.from(new Set(companies))
        this.setState({companies: companiesWithoutDuplicates, renderOptions: true, value: companiesWithoutDuplicates[0]})
    }

    setRenderAll = () => {
        this.setState({renderAll: true})
    }

    handleChange = (e) => {
        console.log(e)
        const value = e.value
        this.setState({value, renderSpecific: true});
    }

    optionsList = () => {
        let options = []
        this.state.companies.forEach(company => {
            options.push({value: company, label: company})
        })
        return options
    }
    
    handleSubmit = (event) => {
        this.setState({renderSpecific: true});
        event.preventDefault();
    }

    render() {
        console.log(this.state)
        return (
            <div>
                <button onClick={() => this.setRenderAll()}>Fetch all updates</button>
                <button onClick={() => this.getSpecificUpdates()}>Get specific updates</button>
                {this.state.renderOptions && 
                    <div>
                        <form onSubmit={this.handleSubmit}>
                            {/* <label>
                                Which company would you like to filter by
                                <select onChange={this.handleChange}>

                                </select>
                            </label> */}
                            <label>Fetch updates for company
                            </label>
                            <Select
                                name="form-field-name"
                                // multi={true}
                                // value={this.state.value}
                                onChange={this.handleChange}
                                options={this.optionsList()}
                            />
                            <input type='submit'/>
                        </form>
                        <div>
                            {this.state.renderSpecific && this.renderSpecificUpdates()}
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