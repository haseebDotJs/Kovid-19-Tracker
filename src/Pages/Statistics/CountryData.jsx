import { useState, useEffect } from 'react'
import styles from './CountryData.module.css'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CountUp from 'react-countup'
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import { Card, CardContent } from '@material-ui/core'

// country list api
import { fetchCountries } from '../../components/Api/Api'

// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'
import ScreenContext from '../../context/ScreenContext'

// chart
import CountryDataChart from './CountryDataChart'

// animate on scroll library
import AOS from 'aos'
import "aos/dist/aos.css";


const CountryData = () => {
    const { countryData: { confirmed, recovered, deaths, lastUpdate }, handleCountryChange, country } = useContext(DataContext)
    const [countries, setCountries] = useState([])
    const [firstRender, setFirstRender] = useState(true)
    const handleFirstRender = () => {
        handleCountryChange(country)
        setFirstRender(false)
    }
    firstRender && handleFirstRender()
    const { medium } = useContext(ScreenContext)

    useEffect(() => {
        AOS.init({
            duration: 2000
        });
        const getCountries = async () => {
            setCountries(await fetchCountries())
        }
        getCountries()
    }, [])


    const totalCountryData = confirmed ? [
        {
            class: styles.total,
            title: 'Total Cases',
            cases: confirmed.value,
            // title2: `Number of total cases of COVID-19 in ${country}`
        },
        {
            class: styles.active,
            title: 'Active',
            cases: confirmed.value - recovered.value - deaths.value,
            // title2: `Number of active cases of COVID-19 in ${country}`
        },
        {
            class: styles.recovered,
            title: 'Recovered',
            cases: recovered.value,
            // title2: 
        },
        {
            class: styles.deaths,
            title: 'Deaths',
            cases: deaths.value,
            // title2: 
        },
    ] : []
    const useStyles = makeStyles((theme) => ({
        formControl: {
            marginBottom: theme.spacing(3),
            minWidth: "100%",
        }
    }));
    const classes = useStyles()
    // const fadeUp = `data-aos="fade-up" data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"data-aos-once="false"`
    return (
        <Box mb={3} pt={3}>
            <Grid container alignItems="center">
                <Grid item xs={12} sm={12} md={3}>
                    <Typography
                        className={fontWeight.medium}
                        variant="h5"
                        align={medium ? "center" : "left"}
                        style={{ marginBottom: "1em" }}
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-offset="400"
                        data-aos-duration="1500"
                    >
                        Country Statistics:
                        </Typography>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Box
                        data-aos="fade-up"
                        data-aos-anchor-placement="bottom-bottom"
                        data-aos-offset="400"
                        data-aos-duration="1500"
                    >
                        <form className={classes.formControl}>
                            <label htmlFor="demo-controlled-open-select-label">Select Country</label>
                            <select
                                id="demo-controlled-open-select-label"
                                value={country}
                                onChange={(e) => handleCountryChange(e.target.value)}
                                className={styles.select}
                            >
                                {
                                    countries.map(country => {
                                        return <option value={country} key={country}>{country}</option>
                                    })
                                }
                            </select>
                        </form>
                    </Box>
                </Grid>
            </Grid>
            <Box mt={2}>
                <Container maxWidth='md'>
                    {
                        confirmed === 'notfound' ? <Box>
                            <Typography variant="h6">The Country has not found.</Typography>
                        </Box > :
                            <Grid container justify="center" spacing={3}>
                                <Grid item xs={12} sm={12} md={4} >
                                    <Box
                                        data-aos="fade-right"
                                        data-aos-offset="400"
                                        data-aos-duration="1500"
                                        data-aos-anchor-placement="center-bottom"

                                    >

                                        {
                                            totalCountryData.map(Data => (
                                                <Box
                                                    mt={3}
                                                    key={Data.title}

                                                >
                                                    <Card className={Data.class}>
                                                        <CardContent className={styles.card}>
                                                            <Typography color="textPrimary" gutterBottom>{Data.title}</Typography>
                                                            <Typography variant="h5" className={fontWeight.medium}>
                                                                <CountUp
                                                                    start={0}
                                                                    end={Data.cases}
                                                                    duration={2}
                                                                    separator=","
                                                                />
                                                            </Typography>
                                                            {/* this is converting date update to human readable date  */}
                                                            <Typography color="textPrimary">{new Date(lastUpdate).toDateString()}</Typography>
                                                            {/* <Typography variant="subtitle2">Number of total cases of COVID-19 in {country}</Typography> */}
                                                        </CardContent>
                                                    </Card>
                                                </Box>
                                            ))
                                        }
                                    </Box>

                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <Box
                                        data-aos="fade-left"
                                        data-aos-offset="400"
                                        data-aos-duration="1500"
                                        data-aos-anchor-placement="bottom-bottom"
                                    >
                                        <CountryDataChart />
                                    </Box>
                                </Grid>
                            </Grid>
                    }
                </Container>
            </Box>
        </Box>
    )
}
export default CountryData
