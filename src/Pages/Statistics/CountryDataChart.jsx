// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

import { Bar } from '@reactchartjs/react-chart.js'

// animate on scroll library

const CountryDataChart = () => {
    const { countryData, country } = useContext(DataContext)
    const { confirmed, recovered, deaths } = countryData

    const barChart = confirmed ? (
        <Bar
            data={{
                labels: ['Total Cases', 'Active', 'Recovered', 'Deaths'],
                datasets: [{
                    label: 'People',
                    backgroundColor: [
                        'rgba(75, 102, 145,0.5)',
                        'rgba(115, 24, 180, 0.5)',
                        'rgba(249, 135, 31, 0.5)',
                        'rgba(225, 53, 136, 0.5)'
                    ],
                    borderColor: [
                        'rgba(75, 102, 145, 1)',
                        'rgba(115, 24, 180, 1)',
                        'rgba(249, 135, 31, 1)',
                        'rgba(225, 53, 136, 1)'
                    ],
                    borderWidth: 1,
                    data: [confirmed.value, confirmed.value - recovered.value - deaths.value, recovered.value, deaths.value]
                }
                ]
            }}
            options={{
                legend: { display: false },
                title: { display: true, text: `Current situtaion of Kovid-19 in ${country}` }
            }}
        />
    ) : "Loading"

    return (
        <div>
            {barChart}
        </div>
    )
}


export default CountryDataChart
