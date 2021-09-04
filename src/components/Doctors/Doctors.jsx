import { makeStyles } from '@material-ui/core/styles';
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import cx from "classnames"
// Component Card Doctor
import DoctorCard from './DoctorCard'
// animation library
import Fade from 'react-reveal/Fade';
const useStyles = makeStyles(() => (
    {
        container: {
            backgroundColor: 'rgb(249, 252, 255)'
        },
        heading: {
            textAlign: 'center'
        },
        title: {
            color: 'rgb(118, 119, 119)',
            textAlign: 'center'
        }
    }));
const Doctors = () => {
    const classes = useStyles()
    return (
        <Box py={8} id="Best-Doctors" className={classes.container}>
            <Container maxWidth="lg">
                <Fade bottom >
                    <Box mb={5}>
                        <Box mb={2}>
                            <Typography variant="h4" className={cx(fontWeight.bold, classes.heading)}>
                                Meet Our Best Doctors
                        </Typography>
                        </Box>
                        <Box maxWidth="70%" mx="auto">
                            <Typography variant="subtitle1" className={classes.title}>
                                Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.                        </Typography>
                        </Box>
                    </Box>
                </Fade>
                <Fade right>
                    <DoctorCard />
                </Fade>
            </Container>
        </Box>
    )
}

export default Doctors
