import { Link } from "react-router"
import { ContactLinks } from "./ContactLinks"


export const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Annabel Allen</h1>
            <p style={{fontWeight: 'bold'}}>
                Hi! I&apos;m a Software Engineer based in Seattle, WA.<br/>
                <Link className="page-link" to="/about">
                    Click here to learn more about me!
                </Link>
            </p>
            <ContactLinks />
        </div>
    )
}
