import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { ScrollTrigger, SplitText } from "gsap/all"
import Cocktails from "./components/Cocktails"
import About from "./components/About"
import Art from "./components/Art"


gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
      <Art />
    </div>
  )
}

export default App
