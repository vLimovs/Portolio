const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div id="footer" className="footer__inner">
                    <h1>Contact</h1>
                    <p>Frontend Developer with 1 year of hands-on experience in building responsive, dynamic, and user-friendly web applications. Skilled in crafting modern interfaces using HTML, CSS, SCSS, and JavaScript, with expertise in React.js, Next.js, and TypeScript to develop scalable and high-performance solutions.</p>
                    <a href="mailto:vlimovs@icloud.com"><img src="mail.svg" alt="" />vlimovs@icloud.com</a>
                </div>
                <form id="form" className="footer__form">
                    <label>Your name</label>
                    <input type="text" placeholder="Your name" required />
                    <label>Your email</label>
                    <input type="email" placeholder="Your email" required/>
                    <label>Type a message</label>
                    <textarea style={{resize: 'none'}} placeholder="Text..." required/>
                    <button type="submit">Submit</button>
                </form>
            </div>
        </footer>
    )
}

export default Footer