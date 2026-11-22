import { Link } from "react-router"
import { ContactLinks } from "./ContactLinks"
import { Window, WindowContent, WindowHeader } from "react95"

const AnnabelInSeattleImage = new URL("../../assets/Annabel_in_Seattle.JPG", import.meta.url).href


export const HomePage = () => {
    return (
        <div className="home-page" style={{marginTop: '1rem'}}>
            <h1>Annabel Allen</h1>
            <p style={{fontWeight: 'bold'}}>
                Hi! I&apos;m a Software Engineer based in Seattle, WA.<br/>
                <Link className="page-link" to="/about">
                    Click here to learn more about me!
                </Link>
            </p>
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', marginTop: '1rem', flexWrap: 'wrap'}}>
            <ContactLinks />
            <Window style={{width: '400px'}}>
                <WindowHeader>Me!</WindowHeader>
                <WindowContent>
                    <img
                        src={AnnabelInSeattleImage}
                        alt="Annabel Allen on a boat in the Puget Sound"
                        width="100%"
                    />
                </WindowContent>
            </Window>
            </div>
        </div>
    )
}
