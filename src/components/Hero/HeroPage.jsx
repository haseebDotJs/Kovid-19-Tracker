import "./HeroPage.css"
import { makeStyles } from '@material-ui/core/styles';
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import HeroImage from '../../images/heroImage.png'
import Container from '@material-ui/core/Container'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/core/Box'
import CountUp from 'react-countup'

// animate on scroll library
// import Fade from 'react-reveal/Fade';
// import useWebAnimations, { bounce } from "@wellyshen/use-web-animations";



// context
import { useContext } from 'react'
import DataContext from '../../context/DataContext'

const useStyles = makeStyles((theme) => ({
    heroBox: {
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        minHeight: "90vh",
        [theme.breakpoints.down('md')]: {
            minHeight: "60vh"
        }

    },
    container: {
        padding: '2em 0 0 0',
        marginTop: '0px',
        textAlign: 'center',
        background: 'rgb(223, 222, 245)'
    },

    image: {
        maxWidth: '100%',
        display: 'flex',
        margin: 'auto'
    }
}));
const HeroPage = () => {
    const { globalData: { confirmed } } = useContext(DataContext)
    // const { keyframes, timing } = bounce;
    // const { ref } = useWebAnimations({
    //     keyframes,
    //     timing: {
    //         ...timing,
    //         duration: timing.duration * 0.75, // Speed up the animation
    //     },
    // });
    const classes = useStyles()

    return (
        <Box className={classes.container} >
            <Container maxWidth="lg" >
                <Box className={classes.heroBox} >
                    <Box className="animated-titles" >
                        <Typography className={fontWeight.bold}
                            variant='h2'
                            gutterBottom >
                            KOVID - 19 TRACKER
                        </Typography>
                        <Typography className={fontWeight.medium}
                            variant='h4' >
                            TOTAL CONFIRMED KORONA CASES
                        </Typography>
                        <Typography className={fontWeight.bold}
                            variant='h2'
                            style={
                                { color: 'rgb(75,102,145)' }
                            }
                            gutterBottom
                        >
                            {
                                confirmed ?
                                < CountUp
                                    start={0}
                                    end={confirmed.value}
                                    duration={2}
                                    separator=','
                                /> : "..."
                            }
                        </Typography>
                    </Box>
                    <Box className="animated-image">
                        <img
                            className={classes.image}
                            src={HeroImage}
                            alt="COVID-19"
                        />
                    </Box>
                </Box >
            </Container>
        </Box >
    )
}

export default HeroPage