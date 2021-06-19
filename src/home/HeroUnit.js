import { Link } from "react-router-dom";
import './HeroUnit.css';

export const HeroUnit = () => (
    <section className="hero-unit">
        <h2>
            Kelsey Raymond &amp; Joshua Smith
        </h2>
        <p>
            12.11.21
        </p>
        <p>
            high mountain hall, camden, maine
        </p>
        <Link to="/rsvp" className='rsvp-button'>
            RSVP
        </Link>
    </section>
);

HeroUnit.displayName = 'HeroUnit';

export default HeroUnit;
