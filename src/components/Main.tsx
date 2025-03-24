const Main = () => {
    return (
        <main className="main container">
            <div className="main__bio">
                <img src="avatar.png" alt="" />
                <h1>I do code and make content <span>about it!</span></h1>
                <p>I can develop a fully functional and responsive website based on your design and requirements. I can also build the site from scratch, ensuring clean and efficient code, smooth performance, and modern UI/UX. Throughout the process, I’ll keep you updated and provide consultations to achieve the best result. 🚀</p>
                <div className="main__bio-btns">
                    <a href="">Get In Touch</a>
                    <a href="https://github.com/vLimovs">Download CV</a>
                </div>
            </div>
            <div className="main__stack">
                <h2 id="projects">EXPERIENCE WITH</h2>
                <ul className="main__stack-logos">
                    <li><img src="html.png" alt="" /></li>
                    <li><img src="css.png" alt="" /></li>
                    <li><img src="javascript.png" alt="" /></li>
                    <li><img src="reactjs.png" alt="" /></li>
                    <li><img src="nodejs.png" alt="" /></li>
                </ul>
            </div>
        </main>
    )
}

export default Main