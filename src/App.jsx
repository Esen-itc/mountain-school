import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import About from './components/About/About'
import Brief from './components/Brief/Brief'
import Prizes from './components/Prizes/Prizes'
import Timeline from './components/Timeline/Timeline'
import Criteria from './components/Criteria/Criteria'
import Jury from './components/Jury/Jury'
import Format from './components/Format/Format'
import FAQ from './components/FAQ/FAQ'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <About />
        <Brief />
        <Prizes />
        <Timeline />
        <Criteria />
        <Jury />
        <Format />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  )
}
