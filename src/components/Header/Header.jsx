import React from "react"
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Logo from '../../images/logo-dark.png'
import Container from '@material-ui/core/Container'
import Box from '@material-ui/core/Box'
import MenuItem from './MenuItems'
import {Link} from 'react-scroll';


// context
import { useContext } from 'react'
import ScreenContext from '../../context/ScreenContext'

// mobile version navbar
import ResponsiveDrawer from './ResponsiveDrawer'

const useStyles = makeStyles((theme) => ({
    logo: {
        marginRight: theme.spacing(4),
    }
}))

export default function Header() {
    const classes = useStyles();
    const { mobile } = useContext(ScreenContext)


    return (
        <Box id="hero" style={{ height: '3em', backgroundColor: 'white' }} >
            { mobile ? <ResponsiveDrawer /> :
                <AppBar style={{ backgroundColor: "white" }}>
                    <Container maxWidth='lg'>
                        <Toolbar style={{ justifyContent: "space-between" }}>

                            <Link
                                to="hero"
                                smooth={true}
                                duration={1000}
                                className={classes.anchor}
                            >
                                <img src={Logo} alt=" logo" className={classes.logo} />
                            </Link>
                            <Box style={{ display: "flex", justifyContent: "space-between" }}>
                                <MenuItem />
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            }
        </Box >
    );
}