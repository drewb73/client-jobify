import React, {useState} from 'react'
import Chart from './BarChart'
import AreaChart from './AreaChart'
import {useAppContext} from '../context/appContext'
import Wrapper from '../assets/wrappers/ChartsContainer'
import BarChartComponent from './BarChart'

export default function ChartsContainer() {
  const [barChart, setBarChart] = useState(true)
  const {monthlyApplications: data} = useAppContext()

  return (
    <Wrapper>
      <h4>Monthly Applications</h4>
      <button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'Area Chart' : 'Bar Chart'}
      </button>
      {barChart ? <BarChartComponent data={data} /> : <AreaChart data={data} />}
    </Wrapper>
  )
}

