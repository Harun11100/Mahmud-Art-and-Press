import Contact from "./component/shared/Contact/page";
import EnterpriseSolutions from "./component/shared/EnterpriseSolution/page";
import Footer from "./component/shared/Footer/page";
import Hero from "./component/shared/Hero/page";
import Navbar from "./component/shared/Navbar/page";
import Portfolio from "./component/shared/Portfolio/page";
import Reviews from "./component/shared/Reviews/page";
import Services from "./component/shared/Service/page";
import Team from "./component/shared/Team/page";

export default function Home() {
  return (
    <>
      <Navbar />
      <Hero />
      <EnterpriseSolutions />
      <Services />
      <Portfolio />
      <Reviews />
      <Team/>
      <Contact />
      <Footer />
    </>
  );
}