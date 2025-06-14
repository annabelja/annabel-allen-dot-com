import './App.css'
import { ContactLinks } from './components/ContactLinks'
import annabelInSeattleImage from './assets/Annabel_in_Seattle.jpg'

function App() {
  return (
    <div>
      <h1 style={{color: '#002400'}}>Annabel Allen</h1>
      {/*TODO: Move styles to css file */}
      <div style={{display: 'flex', flexDirection: 'row', flexWrap: 'wrap', justifyContent: 'space-between'}}>
      <img src={annabelInSeattleImage} style={{borderRadius: '25px', maxWidth: '200px', padding: '25px', marginLeft: 'auto', marginRight: 'auto'}}/>
      <p style={{alignContent: 'center', minWidth: '200px', marginLeft: 'auto', marginRight: 'auto', padding: '25px'}}>Hi! I&apos;m a Senior Software Engineer at Target, based in Seattle, WA.
        {/*TODO: implement About section to link to here */}
        {/* <a>
        Click here to learn more about me!
        </a> */}
        </p>
      </div>
      <footer>
        <ContactLinks/>
      </footer>
      
    </div>
  )
}

export default App
