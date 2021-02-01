import styles from './GlobalData.module.css'
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import activeImg from '../../images/active.png'
import recoveredImg from '../../images/recovered.png'
import deathsImg from '../../images/deaths.png'
import CountUp from 'react-countup'

// animate on scroll library
import Reveal from 'react-reveal/Reveal';


// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'
import ScreenContext from '../../context/ScreenContext'

const GlobalData = () => {
    const { globalData: { confirmed, recovered, deaths } } = useContext(DataContext)
    const { medium } = useContext(ScreenContext)
    // console.log('screen is medium ', medium);


    const typesOfCases = confirmed && [
        {
            title: 'Active',
            img: activeImg,
            cases: confirmed.value - recovered.value - deaths.value
        },
        {
            title: 'Recovered',
            img: recoveredImg,
            cases: recovered.value
        },
        {
            title: 'Deaths',
            img: deathsImg,
            cases: deaths.value
        },
    ]
    return (
        <Box mb={3} >
            <Grid container alignItems="center" spacing={2} >
                <Grid item xs={12} md={3}>
                    <Reveal effect="fadeInUp" big>
                        <Box>
                            <Typography
                                className={fontWeight.medium}
                                variant="h5"
                                align={medium ? "center" : "left"}
                            >
                                World Wide Statistics:
                        </Typography>
                        </Box>
                    </Reveal>
                </Grid>
                {!typesOfCases ? <Typography variant='h6'>Loading...</Typography> : typesOfCases.map(Data => (
                    <Grid item xs={12} md={3} key={Data.title}>
                        <Reveal effect="fadeInUp" big>
                            <Box
                                className={styles.globalCases}
                            >
                                <img className={styles.image} src={Data.img} alt={Data.title} />
                                <Box className={styles.cases} pl={medium ? 2 : 1}>
                                    <Typography className={fontWeight.medium} variant='h5' >
                                        {
                                            <CountUp
                                                start={0}
                                                end={Data.cases}
                                                duration={2}
                                                separator=','
                                            />
                                        }
                                    </Typography>
                                    <Typography className={fontWeight.regular} variant='h6' style={{ color: 'rgb(106,106,106)' }}>
                                        {Data.title}
                                    </Typography>
                                </Box>
                            </Box>
                        </Reveal>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}

export default GlobalData
