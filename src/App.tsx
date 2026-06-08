import { BrowserRouter as Router, Routes, Route } from 'react-router';
import './App.css';
import { HomePage } from './components/HomePage';
import { AboutMe } from './components/AboutMe';
import { AnnabelsPageArchive } from './components/AnnabelsPageArchive';

function App() {
  return (
    <Router>
    {/* <div>
      <Link to="/">Annabel Allen</Link>
      <Link to="/about">About Me</Link>
    </div> */}
      <Routes>
        <Route path="/" element={<main className="page-shell"><HomePage /></main>} />
        <Route path="/about" element={<main className="page-shell"><AboutMe /></main>} />
        <Route path="/archive" element={<AnnabelsPageArchive />} />
      </Routes>
    </Router>
  );
}

export default App;
