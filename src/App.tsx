import './App.css'
import { ContactLinks } from './components/ContactLinks'
import annabelInSeattleImage from './images/Annabel_in_Seattle.jpg'

function App() {
  return (
    <>
      <h1 style={{color: '#002400'}}>Annabel Allen</h1>
      <img src={annabelInSeattleImage} height={'200px'} style={{borderRadius: '25px'}}/>
      <footer>
        <ContactLinks/>
      </footer>
      
    </>
  )
}

export default App
