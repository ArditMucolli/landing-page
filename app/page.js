"use client";

import { ThemeProvider } from "next-themes";
import Header from "./components/header/Header";
import Homepage from "./components/home/Homepage";
import About from "./components/about/About";
import Appointment from "./components/appointment/appointment";
import Gallery from "./components/gallery/Gallery";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
import { useEffect, useState } from "react";

export default function MyApp({ Component, pageProps }) {
  const [mounted, setMounted] = useState(false);

  // Set mounted to true after the component mounts to avoid hydration issues
  useEffect(() => {
    setMounted(true);
  }, []);

  // Only render the ThemeProvider after the component has mounted
  if (!mounted) {
    return null; // Or you can return a loading spinner
  }

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
