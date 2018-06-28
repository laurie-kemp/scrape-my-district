import React, {Component} from 'react'
import { VictoryLine, VictoryChart, VictoryAxis, VictoryTheme } from 'victory'
import Paper from "@material-ui/core/Paper"

const data1 = [
  {quarter: 1, earnings: 13000},
  {quarter: 2, earnings: 16500},
  {quarter: 3, earnings: 14250},
  {quarter: 4, earnings: 19000}
]

const data2 = [
  {
    id: 1,
    company: 'Microsoft',
    timestamp: '2018-06-25T10:50:00.634Z',
    columnName: 'fte',
    change: '10'
  },
  {
    id: 2,
    company: 'Microsoft',
    timestamp: '2018-06-25T10:50:00.634Z',
    columnName: 'fte',
    change: '15'
  },
  {
    id: 3,
    company: 'Microsoft',
    timestamp: '2018-06-25T10:50:00.634Z',
    columnName: 'fte',
    change: '40'
  },
  {
    id: 6,
    company: 'Apple',
    timestamp: '2018-06-25T10:50:00.634Z',
    columnName: 'fte',
    change: '10'
  },
  {
    id: 7,
    company: 'Apple',
    timestamp: '2018-06-25T10:50:00.634Z',
    columnName: 'fte',
    change: '20'
  },
  {
    id: 8,
    company: 'Apple',
    timestamp: '2018-06-25T10:50:00.634Z',
    columnName: 'fte',
    change: '40'
  }
]

class Graph extends Component {

  render() {
    const { data } = this.props
    return (
      <div>
        
        <Paper style={{width:'95%', margin:'0 auto', height:'25em'}}>
          <VictoryChart
            domainPadding={20}
            theme={VictoryTheme.material}
            width={600}
            height={300}
          >
            {/* <VictoryAxis
              tickValues={[1, 2, 3, 4]}
              tickFormat={["Quarter 1", "Quarter 2", "Quarter 3", "Quarter 4"]}
            />
            <VictoryAxis
              dependentAxis
              tickFormat={(x) => (`$${x / 1000}k`)}
            /> */}
            <VictoryLine
              interpolation="natural"
              data={data}
              x="timestamp"
              y="change"
            />
          </VictoryChart>
        </Paper>
      </div>
    )
  }
}
export default Graph