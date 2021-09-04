import { makeStyles } from '@material-ui/core/styles';
import activeImg from '../../images/active.png'
import recoveredImg from '../../images/recovered.png'
import deathsImg from '../../images/deaths.png'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import CountUp from 'react-countup'
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'
// animation library
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => (
    {
    image: {
        maxWidth: '100%',
        margin: '.5em'
    },
    globalCases: {
        display: 'flex'
    },
    cases: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        paddingLeft: theme.spacing(1),
        [theme.breakpoints.down('md')]: {
            paddingLeft: theme.spacing(2)
        }
    }
}));
const TypesOfCases = () => {
    const { globalData: { confirmed, recovered, deaths } } = useContext(DataContext)
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
    const classes = useStyles()

    return (
        !typesOfCases ? <Typography variant='h6'>Loading...</Typography> : typesOfCases.map(Data => (
            <Grid item xs={12} md={3} key={Data.title}>
                <Fade bottom >
                    <Box
                        className={classes.globalCases}
                    >
                        <img className={classes.image} src={Data.img} alt={Data.title} />
                        <Box className={classes.cases}>
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
                </Fade>
            </Grid>
        ))
    )
}
export default TypesOfCases