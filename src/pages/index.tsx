import ProfilePage from "@/pages/profilePage/page"
import AboutMe from "@/pages/aboutMe/page"
import CardsPage from "@/pages/cardsPage/page"
import ContactPage from "@/pages/formPage/page"
import FooterPage from "@/pages/footerPage/page"

export default function Home() {
  return (
    <main>
      <div className="w-full h-screen">
        <ProfilePage />
        <AboutMe />
        <CardsPage />
        <ContactPage />
        <FooterPage />
      </div>
    </main>
  )
}