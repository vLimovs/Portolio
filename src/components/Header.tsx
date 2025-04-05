import { useEffect, useState } from "react"
interface Modal {
    modal?: any,
    setModal: any,
}
const Header:React.FC<Modal> = ( {setModal} ) => {
    const [isNav, setIsNav] = useState(false)
    useEffect(() => {
        const body = document.body
        if (body) {
            body.classList.add(localStorage.theme ? JSON.parse(localStorage.theme) : 'light')
        }
    }, [])

    const changeTheme = () => {
        const body = document.body
        if (!body) return

        const currentTheme = body.className
        const newTheme = currentTheme === 'light' ? 'dark' : 'light'

        body.classList.remove(currentTheme)
        body.classList.add(newTheme)
        localStorage.setItem('theme', JSON.stringify(newTheme))
    }
    return (
        <header className={`header ${isNav ? 'active' : ''}`}>
            <nav className="header__nav container">
                <img src="logo.svg" alt="" />
                <ul className={`header__nav-list ${isNav ? 'active' : ''}`}>
                    <li><a href="#">Home</a></li>
                    <li><a href="#projects">Projects</a></li>
                    <li><a href="#experience">Experience</a></li>
                    <li><a onClick={() => setModal(true)}>Contact</a></li>
                    <li><a className="last" onClick={changeTheme}><i className="fa-solid fa-moon"> </i>Theme</a></li>
                </ul>
                <i
                    onClick={() => setIsNav(prev => !prev)}
                    className="fa-solid fa-bars fa-xl"
                ></i>
            </nav>
        </header>
    )
}

export default Header