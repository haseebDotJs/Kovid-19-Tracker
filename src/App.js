import './App.css';
import "aos/dist/aos.css";
import 'animate.css/animate.css'

import { useEffect, useState } from 'react'
import { createMuiTheme, responsiveFontSizes, MuiThemeProvider } from '@material-ui/core/styles';
// import Container from '@material-ui/core/Container'
import useMediaQuery from '@material-ui/core/useMediaQuery';


// components
import Header from './components/Header/Header'
import FooterPage from './components/Footer/FooterPage'

// fetch Data api
import { fetchGlobalData } from './components/Api/Api'
import { fetchCountryData } from './components/Api/Api'

// context api
import DataContext from './context/DataContext'
import ScreenContext from './context/ScreenContext';

// pages
import HeroPage from './Pages/Hero/HeroPage'
import Stats from './Pages/Statistics/Stats'
import Symptoms from './Pages/Symptoms/Symptoms'
import Doctors from './Pages/Doctors/Doctors'
import FAQ from './Pages/FAQ/FAQ'

let theme = createMuiTheme()
theme = responsiveFontSizes(theme)

function App() {
  const [globalData, setGlobalData] = useState({})
  const [countryData, setCountryData] = useState({})
  const [country, setCountry] = useState('Pakistan')

  useEffect(() => {
    const callingApiFunc = async () => {
      const fetchedData = await fetchGlobalData()
      setGlobalData(fetchedData)
    }
    callingApiFunc()
  }, [])

  const handleCountryChange = async (selectedCountry) => {
    const fetchedData = await fetchCountryData(selectedCountry)
    setCountryData(fetchedData)
    setCountry(selectedCountry)
  }

  const mobile = useMediaQuery('(max-width: 600px)');
  const medium = useMediaQuery('(max-width: 900px)');

  return (
    <DataContext.Provider value={{ countryData, handleCountryChange, country, globalData }}>
      <ScreenContext.Provider value={{ mobile, medium }}>
        <MuiThemeProvider theme={theme}>
          <Header />
          <HeroPage />
          <Stats />
          <Symptoms />
          <Doctors />
          <FAQ />
          <FooterPage />
        </MuiThemeProvider>
      </ScreenContext.Provider>
    </DataContext.Provider >
  );
}

export default App;
