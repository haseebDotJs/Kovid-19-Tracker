import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider';
import GlobalData from './GlobalData'
import GlobalDataChart from './GlobalDataChart'
import CountryData from './CountryData'
import { useContext } from 'react'
import ScreenContext from '../../context/ScreenContext'

const useStyles = makeStyles((theme) => (
    {
        stats: {
            backgroundColor: 'rgb(249,252,255)'
        },
        wrapper: {
            paddingTop: theme.padding(8),
            paddingBottom: theme.padding(8),
            paddingLeft: theme.padding(5),
            paddingRight: theme.padding(5),
            [theme.breakpoints.down('md')]: {
                paddingLeft: theme.padding(2),
                paddingRight: theme.padding(2)
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
