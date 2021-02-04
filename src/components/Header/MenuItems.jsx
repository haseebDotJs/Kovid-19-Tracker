import React from 'react'
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
import Button from "@material-ui/core/Button"
import { Link } from 'react-scroll';


const MenuItems = ({ handleDrawerToggle }) => {
    console.log('handleDrawerToggle', handleDrawerToggle);

    const useStyles = makeStyles((theme) => ({
        title: {
            marginRight: '16px',
        },
        menuItem: {
            color: 'rgb(59,77,109)',
            outline: 'none'
        },
        anchor: {
            ...theme.anchor,
            textDecoration: 'none',

        }
    }))
    const classes = useStyles()
    const items = [
        {
            href: "Statistics",
            item: "Statistics",
        },
        {
            href: "Symptoms",
            item: "Symptoms",
        },
        {
            href: "Best-Doctors",
            item: "Best Doctors",
        },
        {
            href: "FAQ",
            item: "FAQ",
        }
    ]
    console.log('handleDrawerToggle ', handleDrawerToggle);
    return (
        <>
            {
                items.map(menu => (
                    <Typography variant="subtitle2" className={classes.title} key={menu.item}>
                        <Link
                            to={menu.href}
                            smooth={true}
                            duration={1000}
                            className={classes.anchor}
                            onSetActive={handleDrawerToggle && handleDrawerToggle}
                        >
                            <Button className={classes.menuItem}>
                                {menu.item}
                            </Button>
                        </Link>
                    </Typography>
                ))

            }
        </>
    )
}

export default MenuItems
