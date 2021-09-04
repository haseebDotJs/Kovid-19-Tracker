import { useState, useEffect } from 'react'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Container from '@material-ui/core/Container';
import CountUp from 'react-countup'
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import { Card, CardContent } from '@material-ui/core'
import cx from "classnames"

// country list api
import { fetchCountries } from '../../components/Api/Api'

// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

// chart
import CountryDataChart from './CountryDataChart'

// animation library
import Fade from 'react-reveal/Fade';
import Slide from 'react-reveal/Slide';
import useWebAnimations, { rubberBand } from "@wellyshen/use-web-animations";


const useStyles = makeStyles((theme) => ({
    formControl: {
        marginBottom: theme.spacing(3),
        minWidth: "100%",
    },
    card: {
        backgroundColor: 'rgb(250, 250, 250)'
    },
    total: {
        borderBottom: '10px solid rgba(75, 102, 145, 0.5)'
    },

    active: {
        borderBottom: '10px solid rgba(115, 24, 180, 0.5)'
    },

    recovered: {
        borderBottom: '10px solid rgba(249, 135, 31, 0.5)'
    },

    deaths: {
        borderBottom: '10px solid rgba(225, 53, 136, 0.5)'
    },
    select: {
        width: '100%',
        border: 'none',
        padding: '.5em .25em',
        outline: 'none'
    },
    statistics: {
        marginBottom: "1em",
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'
        }

    }
}));
const CountryData = () => {
    const { countryData: { confirmed, recovered, deaths, lastUpdate }, handleCountryChange, country } = useContext(DataContext)
    const [countries, setCountries] = useState([])
    const [firstRender, setFirstRender] = useState(true)
    const handleFirstRender = () => {
        handleCountryChange(country)
        setFirstRender(false)
    }
    firstRender && handleFirstRender()

    useEffect(() => {
        const getCountries = async () => {
            setCountries(await fetchCountries())
        }
        getCountries()
    }, [])

    const classes = useStyles()


    const totalCountryData = confirmed ? [
        {
            class: classes.total,
            title: 'Total Cases',
            cases: confirmed.value,
            // title2: `Number of total cases of COVID-19 in ${country}`
        },
        {
            class: classes.active,
            title: 'Active',
            cases: confirmed.value - recovered.value - deaths.value,
            // title2: `Number of active cases of COVID-19 in ${country}`
        },
        {
            class: classes.recovered,
            title: 'Recovered',
            cases: recovered.value,
            // title2: 
        },
        {
            class: classes.deaths,
            title: 'Deaths',
            cases: deaths.value,
            // title2: 
        },
    ] : []
    const { keyframes, timing } = rubberBand;
    const { ref, getAnimation } = useWebAnimations({
        keyframes,
        timing: {
            ...timing,
            delay: 150,
            duration: timing.duration * 0.75, // Speed up the animation
        },
    });
    return (
        <Box mb={3} pt={3}>
            <Grid container alignItems="center">
                <Grid item xs={12} sm={12} md={3}>
                    <Fade bottom>
                        <Typography
                            variant="h5"
                            align="left"
                            className={cx(classes.statistics, fontWeight.medium)}
                        >
                            Country Statistics:
                        </Typography>
                    </Fade>
                </Grid>
                <Grid item xs={12} sm={12} md={9}>
                    <Fade bottom>

                        <Box>
                            <form className={classes.formControl}>
                                <label htmlFor="demo-controlled-open-select-label">Select Country</label>
                                <select
                                    id="demo-controlled-open-select-label"
                                    value={country}
                                    onChange={(e) => {
                                        handleCountryChange(e.target.value)
                                        getAnimation() && getAnimation().play()
                                    }}
                                    className={classes.select}
                                >
                                    {
                                        countries.map(country => {
                                            return <option value={country} key={country}>{country}</option>
                                        })
                                    }
                                </select>
                            </form>
                        </Box>
                    </Fade>

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
                                    <Slide left>

                                        <Box ref={ref}>

                                            {
                                                totalCountryData.map(Data => (
                                                    <Box
                                                        mt={3}
                                                        key={Data.title}
                                                    >
                                                        <Card className={Data.class}>
                                                            <CardContent className={classes.card} >
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
                                    </Slide>

                                </Grid>
                                <Grid item xs={12} sm={12} md={8}>
                                    <Slide right>
                                        <Box>
                                            <CountryDataChart />
                                        </Box>
                                    </Slide>
                                </Grid>
                            </Grid>
                    }
                </Container>
            </Box>
        </Box >
    )
}
export default CountryData
