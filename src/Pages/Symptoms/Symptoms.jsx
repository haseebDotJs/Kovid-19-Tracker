import { useEffect } from "react"
import styles from './Symptoms.module.css'
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import SymptomData from './SymptomData'
import cx from "classnames"
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
// animate on scroll library
import AOS from 'aos'


const Symptoms = () => {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);

    return (
        <Box py={8} id="Symptoms" className={styles.container}>
            <Container maxWidth="lg">
                <Box mb={5}
                    data-aos="fade-up"
                    data-aos-anchor-placement="bottom-bottom"
                    data-aos-offset="400"
                    data-aos-duration="1500"
                >
                    <Box mb={2}>
                        <Typography variant="h4" className={cx(fontWeight.bold, styles.heading)} align="center">
                            Corona Virus Symptoms
                        </Typography>
                    </Box>
                    <Box maxWidth="70%" mx="auto">
                        <Typography variant="subtitle1" className={styles.title} align="center">
                            Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.
                        </Typography>
                    </Box>
                </Box>
                <Grid container spacing={5}>
                    {
                        SymptomData.map(symptom => {
                            return (
                                <Grid item xs={12} sm={6} md={4} key={symptom.heading}>
                                    <Box py={3} mb={1} className={styles.symptomBox}
                                        data-aos="fade-up"
                                        data-aos-anchor-placement="bottom-bottom"
                                        data-aos-offset="400"
                                        data-aos-duration="1500"
                                    >
                                        <Box mb={2} className={styles.image_cropper}>
                                             <img className={styles.image} src={symptom.img} alt="covid symptom" />
                                        </Box>
                                        <Box mb={2}>
                                            <Typography variant="h5" className={cx(fontWeight.bold, styles.heading)}>{symptom.heading}</Typography>
                                        </Box>
                                        <Box maxWidth="70%" mx="auto">
                                            <Typography variant="subtitle1" className={cx(fontWeight.regular, styles.title)}>{symptom.title}</Typography>
                                        </Box>
                                    </Box>
                                </Grid>
                            )
                        })
                    }

                </Grid>
            </Container>
        </Box>
    )
}

export default Symptoms
