import { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
// import Box from '@material-ui/core/Box'
import { Line } from 'react-chartjs-2';

// animate on scroll library
import Slide from 'react-reveal/Slide';

// api
import { fetchDailyData } from '../../components/Api/Api'

const GlobalDataChart = () => {

    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    }, [])

    const lineChart = dailyData && dailyData.length ?
        (
            <Line
                data={{
                    labels: dailyData.map(({ date }) => date),
                    datasets: [{
                        data: dailyData.map(({ confirmed }) => confirmed),
                        label: 'Total Cases',
                        borderColor: 'rgb(75,102,145)',
                        fill: true

                    },
                    {
                        data: dailyData.map(({ deaths }) => deaths),
                        label: 'Deaths',
                        borderColor: 'rgb(225,53,136)',
                        backgroundColor: 'rgb(236, 142, 184)',
                        fill: true
                    }]
                }}
            />
        ) :
        'Loading...'
    return (
        <Container maxWidth='md' width='100%'>
            <Slide right>
                {lineChart}
            </Slide>
        </Container>

    )
}

export default GlobalDataChart 
