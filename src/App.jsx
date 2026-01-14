import gsap from "gsap"
import Hero from "./components/Hero"
import Navbar from "./components/Navbar"
import { ScrollTrigger, SplitText } from "gsap/all"
import Cocktails from "./components/Cocktails"
import About from "./components/About"


gsap.registerPlugin(ScrollTrigger, SplitText)

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Cocktails />
      <About />
    </div>
  )
}

export default App
