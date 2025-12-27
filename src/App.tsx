import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import { useState, useEffect } from "react"
import Header from "./components/Header"
import Footer from "./components/Footer"
import Home from "./pages/Home"
import About from "./pages/About"
import HowItWorks from "./pages/HowItWorks"
import Legal from "./pages/Legal"
import { ru } from "./content/ru"
import { en } from "./content/en"

export default function App() {
  const [lang, setLang] = useState("ru")
  const content = lang === "ru" ? ru : en

  useEffect(() => {
    const browserLang = navigator.language.split("-")[0]
    if (browserLang === "en") {
      setLang("en")
    }
  }, [])

  return (
    <Router>
      <Header content={content} lang={lang} onLangChange={setLang} />
      <Routes>
        <Route path="/" element={<Home content={content} />} />
        <Route path="/about" element={<About content={content} />} />
        <Route path="/how-it-works" element={<HowItWorks content={content} />} />
        <Route path="/legal" element={<Legal content={content} />} />
      </Routes>
      <Footer content={content} />
    </Router>
  )
}
