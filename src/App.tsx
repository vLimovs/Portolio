import Experience from "components/Experience"
import Footer from "components/Footer"
import Header from "components/Header"
import Main from "components/Main"
import ModalGetInTouch from "components/ModalGetInTouch"
import Projects from "components/Projects"
import { useState } from "react"

const App = () => {
  const [modal, setModal] = useState(false)
  return (
    <>
      <Header setModal={setModal}/>
      <ModalGetInTouch modal={modal} setModal={setModal} />
      <Main setModal={setModal} />
      <Projects />
      <Experience />
      <Footer />
    </>
  )
}

export default App
