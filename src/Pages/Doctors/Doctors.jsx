import { useEffect } from "react"
import styles from './Doctors.module.css'
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import cx from "classnames"
// Component Card Doctor
import DoctorCard from './DoctorCard'
// animate on scroll library
import AOS from 'aos'

const Doctors = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <Box py={8} id="Best-Doctors" className={styles.container}>
            <Container maxWidth="lg">
                <Box mb={5}
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-offset="400"
                    data-aos-duration="1500"
                >
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
                <Box
                    data-aos="fade-up"
                    data-aos-anchor-placement="center-bottom"
                    data-aos-offset="400"
                    data-aos-duration="1500"
                >
                    <DoctorCard />
                </Box>
            </Container>
        </Box>
    )
}

export default Doctors
