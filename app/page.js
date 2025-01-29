import { ThemeProvider } from "next-themes";
import Header from "./components/header/Header";
import Homepage from "./components/home/Homepage";
import About from "./components/about/About";
import Appointment from "./components/appointment/appointment";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";

export default function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider attribute="class" defaultTheme="light">
      <div>
        <Header />
        <Homepage />
        <About />
        <Appointment />
        <Gallery />
        <Contact />
        <Footer />
      </div>
    </ThemeProvider>
  );
}
