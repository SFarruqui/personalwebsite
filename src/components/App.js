import React from 'react';
import { GlobalStyle, ThemeProvider } from '@react95/core';
import { createGlobalStyle } from 'styled-components';
import DataService from '../services/dataService.js';
import DataContext from '../contexts/dataContext.js';
import Taskbar from './Taskbar.js';
import Desktop from './Desktop.js';
import background from '/Users/simonfarruqui/Desktop/Computer Science/simonfarruqui.com-master/src/components/NotepadContent/background.jpg';  // Import the background image

const dataService = new DataService();

const BodyFontSizeOverride = createGlobalStyle`
  body{
    font-size: 15px;
    background-color: #fef7eb;
    background-image: url(${background});
    background-size: cover; /* Ensure the background covers the entire area */
    background-repeat: no-repeat; /* Prevent the background from repeating */
  }
`;

const App = () => (
  <DataContext.Provider value={dataService}>
    <ThemeProvider>
      <GlobalStyle />
      <BodyFontSizeOverride />

      <Desktop />
      <Taskbar />
    </ThemeProvider>
  </DataContext.Provider>
);

export default App;
