import React from "react";
import { makeStyles } from '@material-ui/core/styles';
import Typography from "@material-ui/core/Typography"
import Box from "@material-ui/core/Box"
import Grid from "@material-ui/core/Grid"
import Container from "@material-ui/core/Container"
import fontWeight from '../FontWeight/FontWeight.module.css'
import cx from "classnames"
import MoreInfo from './MoreInfo'
import SocialContact from './SocialContact'

const useStyles = makeStyles((theme) => (
  {
    container: {
      backgroundColor: 'rgb(6, 55, 147)'
    },
    text: {
      color: 'white',
      maxWidth: '85%',
      [theme.breakpoints.down('md')]: {
        maxWidth: '100%'
      }
    },
    color: {
      color: 'white'
    },
    anchor: {
      color: 'white'
    },
    listStyled: {
      listStyleType: 'none'
    },
    ending: {
      backgroundColor: 'rgb(0, 29, 84)',
      textAlign: 'center'
    }

  }));

const FooterPage = () => {
  const classes = useStyles()
  return (
    <Box className={classes.container}>
      <Container maxWidth="lg" >
        <Box py={4}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={3}>
              <Box mb={2}>
                <Typography variant="h6" className={cx(classes.color, fontWeight.bold)} gutterBottom>
                  About Kovid-19
                </Typography>
                <Typography variant="subtitle1" component="p" className={cx(classes.text, fontWeight.light)}>
                  Most people infected with the COVID-19 virus will experience mild to moderate respiratory illness and recover without requiring special treatment.
                </Typography>
              </Box>
            </Grid>

            <Grid item xs={12} md={3}>

              <Typography variant="h6" className={cx(classes.color, fontWeight.bold)} gutterBottom>More Information</Typography>
              {
                MoreInfo.map(info => (
                  <Box mb={2} key={info.info}>
                    <Typography variant="subtitle1" className={fontWeight.light} >
                      <a className={classes.anchor} component="p" href={info.href}>{info.info}</a>
                    </Typography>
                  </Box>
                ))
              }
            </Grid>
            <Grid item xs={12} md={3}>
              <Typography variant="h6" className={cx(classes.color, fontWeight.bold)} gutterBottom>Social Contact</Typography>
              {
                SocialContact.map(social => (
                  <Box mb={2} style={{ display: "flex", alignItems: "center" }} key={social.platform}>
                    <Typography variant="subtitle1" className={cx(fontWeight.light, classes.color)}>
                      {social.icon}
                    </Typography>
                    <Typography variant="subtitle1" className={cx(fontWeight.light, classes.color)} style={{ marginLeft: '8px' }}>
                      <a className={classes.anchor} component="p" href="#hero">{social.platform}</a>
                    </Typography>
                  </Box>
                ))
              }
            </Grid>
            <Grid item xs={12} md={3}>
              <Box mb={2}>
                <Typography variant="h6" className={cx(classes.color, fontWeight.bold)} gutterBottom>
                  Address:
                </Typography>
                <Typography variant="subtitle1" component="p" className={cx(classes.color, fontWeight.light)}>
                  795 Folsom Ave, Suite 600 San Francisco, CA 94107
                </Typography>
              </Box>
              <Box style={{ display: 'flex', alignItems: "baseline" }} mb={2}>
                <Typography variant="h6" className={cx(classes.color, fontWeight.bold)} gutterBottom>
                  Phone:
                </Typography>
                <Typography variant="subtitle1" component="p" className={cx(classes.color, fontWeight.light)} style={{ marginLeft: '8px' }}>
                  (91) 8547 632521
                </Typography>
              </Box>
              <Box style={{ display: 'flex', alignItems: "baseline" }} mb={2}>
                <Typography variant="h6" className={cx(classes.color, fontWeight.bold)} gutterBottom>
                  Email:
                </Typography>
                <Typography variant="subtitle1" component="p" className={cx(classes.color, fontWeight.light)} style={{ marginLeft: '8px' }}>
                  info@covid-19.com
                </Typography>
              </Box>
            </Grid>

          </Grid>
        </Box>
      </Container >

      <Box py={3} className={classes.ending}>
        <Typography variant="subtitle2" style={{ color: "white" }}>&copy; {new Date().getFullYear()} Copyright: <a href="https://github.com/haseebDotJs" style={{ fontWeight: "bold", color: "white" }}> Abdul Haseeb </a></Typography>
      </Box>
    </Box >
  );
}

export default FooterPage;