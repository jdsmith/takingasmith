import { Link } from "react-router-dom";

export const HeroUnit = () => (
    <section>
        <h2>
            Kelsey Raymond &amp; Joshua Smith
        </h2>
        <p>
            12.11.21
        </p>
        <p>
            high mountain hall, camden, maine
        </p>
        <Link to="/rsvp">
            RSVP
        </Link>
    </section>
);

HeroUnit.displayName = 'HeroUnit';

export default HeroUnit;
