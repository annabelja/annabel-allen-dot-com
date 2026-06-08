import { Link } from "react-router"

export const HomePage = () => {
    return (
        <div className="home-page">
            <h1>Annabel Allen</h1>
            <p>
                Hi! I&apos;m a Senior Software Engineer at Target, based in Seattle, WA.
                <Link className="page-link" to="/about">
                    Click here to learn more about me!
                </Link>
            </p>
        </div>
    )
}
