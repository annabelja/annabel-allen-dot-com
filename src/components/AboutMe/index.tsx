import { Link } from "react-router";

export const AboutMe = () => {
    return (
        <section className="about-me">
            <h1>About Me</h1>
            <p>
                Welcome to my website! I&apos;m Annabel Allen, a Senior Frontend Software Engineer based in Seattle, WA.
            </p>
            <p>
                If you&apos;re missing the old annabelallen.com, visit <Link className="page-link" to="/archive">The Archive</Link>
            </p>
        </section>
    );
};

export default AboutMe;
