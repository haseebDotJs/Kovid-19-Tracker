import { useEffect } from "react"
import styles from './Doctors.module.css'
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import cx from "classnames"
// Component Card Doctor
import DoctorCard from './DoctorCard'
// animation library
import Fade from 'react-reveal/Fade';

const Doctors = () => {
   
    return (
        <Box py={8} id="Best-Doctors" className={styles.container}>
            <Container maxWidth="lg">
                <Fade bottom big>
                    <Box mb={5}>
                        <Box mb={2}>
                            <Typography variant="h4" className={cx(fontWeight.bold, styles.heading)}>
                                Meet Our Best Doctors
                        </Typography>
                        </Box>
                        <Box maxWidth="70%" mx="auto">
                            <Typography variant="subtitle1" className={styles.title}>
                                Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.                        </Typography>
                        </Box>
                    </Box>
                    <DoctorCard />
                </Fade>
            </Container>
        </Box>
    )
}

export default Doctors
