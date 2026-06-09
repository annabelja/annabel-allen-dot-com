import { Link } from "react-router";

export const AboutMe = () => {
    return (
        <section className="about-me">
            <h1>About Me</h1>
            <p>
                Welcome to my website! I&apos;m Annabel Allen, a Frontend Web Engineer based in Seattle, WA.
            </p>
            <p>
                Since 2019, I have been working at Target, supporting web applications across the Target ecosystem.
                I currently work on Target.com, specifically on the Product Detail Pages and the Add to cart and Price experiences across the website.
            </p>
            <p>
                I graduated from the University of Michigan in 2020 with a B.S. in Computer Science, and a minor in Gender and Health.
            </p>
            <p>
                In my free time, I enjoy reading, concerts, junk journaling, walking my senior chihuahua Theodore, and spending time outside in the PNW, Michigan, or wherever else my friends and family are around the world (recent destinations include California, Morocco, Ireland, and upstate NY).
            </p>
            <p>
                If you&apos;re looking for the original <em>annabelallen.com</em>, or feeling nostalgic for the late 90s/early 00s, visit <Link className="page-link" to="/archive">The Annabel&apos;s Page Archive</Link>
            </p>
        </section>
    );
};

export default AboutMe;
