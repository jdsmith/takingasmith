import HeroUnit from './HeroUnit';
import Gallery from './Gallery';

export const Home = () => (
    <article>
        <HeroUnit />
        <Gallery />
        <footer>

        </footer>
    </article>
);

Home.displayName = 'Home';

export default Home;
