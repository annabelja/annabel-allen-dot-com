import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from './components/HomePage';
import { AboutMe } from './components/AboutMe';
import { AnnabelsPageArchive } from './components/AnnabelsPageArchive';
import { createGlobalStyle, ThemeProvider } from 'styled-components';
import original from 'react95/dist/themes/original';

import ms_sans_serif from 'react95/dist/fonts/ms_sans_serif.woff2';
import ms_sans_serif_bold from 'react95/dist/fonts/ms_sans_serif_bold.woff2';
import { NavigationBar } from './components/NavigationBar';


const GlobalStyles = createGlobalStyle`
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif}') format('woff2');
    font-weight: 400;
    font-style: normal
  }
  @font-face {
    font-family: 'ms_sans_serif';
    src: url('${ms_sans_serif_bold}') format('woff2');
    font-weight: bold;
    font-style: normal
  }
  body, input, select, textarea {
    font-family: 'ms_sans_serif';
  }
`;

function App() {
  return (
    <>
    <GlobalStyles />
    <ThemeProvider theme={original}>
    <Router>
      <Routes>
        <Route path="/" element={<main className="page-shell"><HomePage /></main>} />
        <Route path="/about" element={<main className="page-shell"><AboutMe /></main>} />
        <Route path="/archive" element={<AnnabelsPageArchive />} />
      </Routes>
      <NavigationBar />
    </Router>
    </ThemeProvider>
    </>
  );
}

export default App;
