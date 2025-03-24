const Footer = () => {
    return (
        <footer className="footer">
            <div id="footer" className="footer__inner container">
                <h1>Contact</h1>
                <p>Frontend Developer with 1 year of hands-on experience in building responsive, dynamic, and user-friendly web applications. Skilled in crafting modern interfaces using HTML, CSS, SCSS, and JavaScript, with expertise in React.js, Next.js, and TypeScript to develop scalable and high-performance solutions.</p>
                <a href="mailto:vlimovs@icloud.com"><img src="mail.svg" alt="" />vlimovs@icloud.com</a>
                <ul className="footer__inner-links">
                    <li><a href="https://instagram.com/vLimovs"><img src="inst.svg" alt="" /></a></li>
                    <li><a href="https://x.com"><img src="x.svg" alt="" /></a></li>
                    <li><a href="https://youtube.com"><img src="yt.svg" alt="" /></a></li>
                </ul>
            </div>
        </footer>
    )
}

export default Footer