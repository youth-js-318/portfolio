import './styles.scss'

const Layout = () => {
    return (
        <>
            <header>
                <div className="content">
                    <span>LP</span>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/projects">Projects</a>
                        <a href="/contact">Contact</a>
                    </nav>
                    <div className="socials">
                        <a href="https://github.com/pamplona007">Github</a>
                        <a href="https://linkedin.com/s/lucaspamplona">LinkedIn</a>
                    </div>
                </div>
            </header>

            <main>
                <h1>Lucas Pamplona</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Molestias eaque debitis obcaecati fugiat itaque quis enim perferendis, odit explicabo maiores, doloribus non vitae excepturi rem at et laudantium nobis sint?</p>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum deserunt enim natus harum quidem. Repellat eveniet nemo ab ullam saepe perferendis voluptas aspernatur! Ipsum expedita unde sapiente id fuga eligendi!</p>
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