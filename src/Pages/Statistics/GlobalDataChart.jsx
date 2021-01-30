import { useEffect, useState } from 'react'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import { Line } from 'react-chartjs-2';

// animate on scroll library
import AOS from 'aos'

// api
import { fetchDailyData } from '../../components/Api/Api'

const GlobalDataChart = () => {

    const [dailyData, setDailyData] = useState([])
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        const fetchAPI = async () => {
            setDailyData(await fetchDailyData())
        }
        fetchAPI()
    }, [])

    const lineChart = dailyData.length ?
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
        null
    return (
        <Container maxWidth='md' width='100%'>
            <Box
                mb={3}
                data-aos="fade-left"
                data-aos-anchor-placement="bottom-bottom"
                data-aos-offset="400"
                data-aos-duration="1500"
            >
                {lineChart}
            </Box>
        </Container>

    )
}

export default GlobalDataChart
