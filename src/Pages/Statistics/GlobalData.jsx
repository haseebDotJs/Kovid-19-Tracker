import { makeStyles } from '@material-ui/core/styles';
import fontWeight from '../../components/FontWeight/FontWeight.module.css'
import Box from '@material-ui/core/Box'
import Typography from '@material-ui/core/Typography'
import Grid from '@material-ui/core/Grid'
import TypesOfCases from './TypesOfCases'
import cx from "classnames"

// animate on scroll library
import Fade from 'react-reveal/Fade';

const useStyles = makeStyles((theme) => ({
    worldWide: {
        [theme.breakpoints.down('md')]: {
            textAlign: 'center'
        }
    }
}));

const GlobalData = () => {
    const classes = useStyles()
    return (
        <Box mb={3} >
            <Grid container alignItems="center" spacing={2} >
                <Grid item xs={12} md={3}>
                    <Fade bottom big>
                        <Box>
                            <Typography
                                className={cx(fontWeight.medium, classes.worldWide)}
                                variant="h5"
                                align="left"
                            >
                                World Wide Statistics:
                        </Typography>
                        </Box>
                    </Fade>
                </Grid>
                <TypesOfCases />


            </Grid>
        </Box>
    )
}

export default GlobalData
