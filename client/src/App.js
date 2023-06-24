import React, { useMemo } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './components/HomePage';
import AboutUs from './components/AboutUs';
import HealthTips from './components/HealthTips';
import Events from './components/Events';
import Resources from './components/Resources';
import GetInvolved from './components/GetInvolved';
import Testimonials from './components/Testimonials';
import News from './components/News';
import Register from './Auth/Register';
import Login from './Auth/Login';
import Activity from './components/Activity';
import {  createTheme } from '@mui/material/styles';
import { CssBaseline, ThemeProvider } from "@mui/material";
import { themeSettings } from './theme';
import { useSelector } from "react-redux";
import AdminActivities from './components/AdminActivities';

const App = () => {
  const mode = useSelector((state)=> state.global.mode);
  const theme = useMemo(()=> createTheme(themeSettings('dark')), [mode]);

  return (
    <>
    <ThemeProvider theme={theme}>
          <CssBaseline />
            <Routes>
                <Route path="/" element={<HomePage/>} />
                <Route path="/register" element={<Register/>}></Route>
                <Route path="/login" element={<Login/>}></Route>
                <Route path="/about" element={<AboutUs/>} />
                <Route path="/health-tips" element={<HealthTips/>} />
                <Route path="/events" element={<Events/>} />
                <Route path="/resources" element={<Resources/>} />
                <Route path="/get-involved" element={<GetInvolved/>} />
                <Route path="/testimonials" element={<Testimonials/>} />
                <Route path="/activity" element={<Activity/>} />
                <Route path="/admin-activities" element={<AdminActivities/>} />
                <Route path="/news" element={<News/>} />
            </Routes>
      </ThemeProvider>
    </>
  );
};

export default App;
