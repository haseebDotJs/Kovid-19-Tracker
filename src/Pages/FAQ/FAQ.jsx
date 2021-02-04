import { useState } from 'react'
import styles from './FAQ.module.css'
import "./FAQ.css";
import QA from './QA'
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import cx from "classnames";
import Collapse from "@kunukn/react-collapse";
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import InfoRoundedIcon from '@material-ui/icons/InfoRounded';
import { useContext } from 'react'
import ScreenContext from '../../context/ScreenContext'
// animate on scroll library
import Fade from 'react-reveal/Fade';

const FAQ = () => {

    const { medium } = useContext(ScreenContext)
    const [faqs, setfaqs] = useState(QA);
    const toggleFAQ = index => {
        setfaqs(faqs.map((faq, i) => {
            if (i === index) {
                faq.open = !faq.open
            }
            else {
                faq.open = false;
            }

            return faq;
        }))
    }
    const faq1 = faqs.filter(faq => (
        faq.id < 5
    ))
    const faq2 = faqs.filter(faq => (
        faq.id > 4
    ))
    return (
        <Box py={8} id="FAQ" className={styles.container}>
            <Container maxWidth="lg">
                <Fade bottom>
                    <Box mb={5}>
                        <Box mb={2}>
                            <Typography variant="h4" className={cx(fontWeight.bold, "heading")}>
                                Friquently Asked Questions
                            </Typography>
                        </Box>
                        <Box maxWidth="70%" mx="auto">
                            <Typography variant="subtitle1" className="title">
                                Dynamically formulate fully tested catalysts for change via focused methods of empowerment Assertively extend alternative synergy and extensive web services.
                            </Typography>
                        </Box>
                    </Box>
                </Fade>

                <Fade bottom>
                    <Box>
                        <Grid container spacing={0}>
                            <Grid item xs={12} sm={12} md={6}>
                                {faq1.map(faq => (
                                    <Box my={4} key={faq.id} maxWidth={medium ? "100%" : "80%"}>
                                        <button
                                            className={cx("faq__toggle", {
                                                "faq__toggle--active": faq.open
                                            })}
                                            onClick={() => toggleFAQ(faq.id)}
                                            style={{ backgroundColor: 'transparent', outline: 'none' }}
                                        >
                                            <Box>
                                                <InfoRoundedIcon
                                                    className="icon"
                                                    style={{ color: faq.open ? "rgb(255,83,99)" : "rgb(57,75,108)", fontSize: 42 }}
                                                />
                                            </Box>
                                            <Typography
                                                className={cx("faq__toggle-text", fontWeight.bold)}
                                                variant="body1"
                                                component="p"
                                                style={{ color: faq.open ? "rgb(255,83,99)" : "rgb(57,75,108)" }} >
                                                {faq.question}
                                            </Typography>
                                        </button>
                                        <Collapse
                                            isOpen={faq.open}
                                            className={
                                                "faq__collapse faq__collapse--gradient " +
                                                (faq.open ? "faq__collapse--active" : "")
                                            }
                                        >
                                            <Box >
                                                <Typography
                                                    className={cx("faq__content", fontWeight.regular)}
                                                    variant="body2"
                                                    component="p">
                                                    {faq.answer}
                                                </Typography>
                                            </Box>
                                        </Collapse>
                                    </Box>
                                ))}
                            </Grid>
                            <Grid item xs={12} sm={12} md={6} >
                                {faq2.map(faq => (
                                    <Box mt={medium ? 0 : 4} mb={4} key={faq.id} maxWidth={medium ? "100%" : "80%"}>
                                        <button
                                            className={cx("faq__toggle", {
                                                "faq__toggle--active": faq.open
                                            })}
                                            onClick={() => toggleFAQ(faq.id)}
                                            style={{ backgroundColor: 'transparent', outline: 'none' }}
                                        >
                                            <Box>
                                                <InfoRoundedIcon
                                                    className="icon"
                                                    style={{ color: faq.open ? "rgb(255,83,99)" : "rgb(57,75,108)", fontSize: 42 }}
                                                />
                                            </Box>
                                            <Typography
                                                className={cx("faq__toggle-text", fontWeight.bold)}
                                                variant="body1" component="p"
                                                style={{ color: faq.open ? "rgb(255,83,99)" : "rgb(57,75,108)" }} >
                                                {faq.question}
                                            </Typography>
                                        </button>
                                        <Collapse
                                            isOpen={faq.open}
                                            className={
                                                "faq__collapse faq__collapse--gradient " +
                                                (faq.open ? "faq__collapse--active" : "")
                                            }
                                        >
                                            <Box >
                                                <Typography
                                                    className={cx("faq__content", fontWeight.regular)}
                                                    variant="body2"
                                                    component="p">
                                                    {faq.answer}
                                                </Typography>
                                            </Box>
                                        </Collapse>
                                    </Box>
                                    // </Grid>
                                ))}
                            </Grid>
                        </Grid>
                    </Box>
                </Fade>
            </Container>
        </Box>
    );
}

export default FAQ;
