import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import CompetitionTabs from './components/CompetitionTabs/CompetitionTabs'
import FAQ from './components/FAQ/FAQ'
import RegistrationForm from './components/RegistrationForm/RegistrationForm'
import Footer from './components/Footer/Footer'

export default function App() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <CompetitionTabs />
        <FAQ />
        <RegistrationForm />
      </main>
      <Footer />
    </>
  )
}
