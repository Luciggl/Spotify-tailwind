import { NavBar } from '../components/NavBar'
import { Main } from '../components/Main'
import { Footer } from '../components/Footer'

export default function Home() {
  return (
    <div className="h-screen flex flex-col">
      <div className="flex flex-1">
        <NavBar />
        <Main />
      </div>
      <Footer />
    </div>
  )
}
