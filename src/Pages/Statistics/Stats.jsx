import React from 'react';
import Paper from '@material-ui/core/Paper'
import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import Divider from '@material-ui/core/Divider';
import GlobalData from './GlobalData'
import GlobalDataChart from './GlobalDataChart'
import CountryData from './CountryData'
import { useContext } from 'react'
import ScreenContext from '../../context/ScreenContext'

const Stats = () => {
    const { medium } = useContext(ScreenContext)


    return (
        <Box
            id="Statistics"
            style={{ backgroundColor: 'rgb(249,252,255)' }}
        >
            <Container maxWidth='lg'>
                <Paper square >
                    <Box py={8} px={medium ? 2 : 5}>
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
