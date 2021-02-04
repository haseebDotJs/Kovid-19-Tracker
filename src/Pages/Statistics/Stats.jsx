import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider';
import GlobalData from './GlobalData'
import GlobalDataChart from './GlobalDataChart'
import CountryData from './CountryData'

const useStyles = makeStyles((theme) => (
    {
        stats: {
            backgroundColor: 'rgb(249,252,255)'
        },
        wrapper: {
            paddingTop: theme.spacing(8),
            paddingBottom: theme.spacing(8),
            paddingLeft: theme.spacing(5),
            paddingRight: theme.spacing(5),
            [theme.breakpoints.down('md')]: {
                paddingLeft: theme.spacing(2),
                paddingRight: theme.spacing(2)
            }

        }
    })); 
const Stats = () => {
    const classes = useStyles()

    return (
        <Box
            id="Statistics"
            className={classes.stats}
        >
            <Container maxWidth='lg'>
                <Paper square >
                    <Box className={classes.wrapper}>
                        <GlobalData />
                        <GlobalDataChart />
                        <Divider />
                        <CountryData />
                    </Box>
                </Paper>
            </Container>
        </Box>
    )
}

export default Stats
