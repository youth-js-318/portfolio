import { Link, Outlet } from 'react-router'
import './styles.scss'

const Layout = () => {
    return (
        <>
            <header>
                <div className="content">
                    <span>LP</span>
                    <nav>
                        <Link to="/">Home</Link>
                        <Link to="/about">About</Link>
                        <Link to="/projects">Projects</Link>
                        <Link to="/contact">Contact</Link>
                    </nav>
                    <div className="socials">
                        <a target='_blank' href="https://github.com/pamplona007">Github</a>
                        <a target='_blank' href="https://linkedin.com/s/lucaspamplona">LinkedIn</a>
                    </div>
                </div>
            </header>

            <main>
                <Outlet />
            </main>

            <footer>
                <p>©2026 Lucas Pamplona</p>
                <div className="socials">
                    <a href="https://github.com/pamplona007">Github</a>
                    <a href="https://linkedin.com/s/lucaspamplona">LinkedIn</a>
                </div>
            </footer>
        </>
    )
}

export default Layout