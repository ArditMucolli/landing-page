import Header from "./components/header/Header";
import Homepage from "./components/home/Homepage";
import About from "./components/about/About";
import Appointment from "./components/appointment/appointment";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";

export default function Home() {
  return (
    <div>
      <Header />
      <Homepage />
      <About />
      <Appointment />
      <Gallery />
      <Contact />
    </div>
  );
}
