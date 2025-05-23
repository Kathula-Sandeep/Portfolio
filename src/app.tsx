import { useState } from "react";
import { BrowserRouter } from "react-router-dom";
import {
  About,
  Contact,
  Experience,
  
  Hero,
  Navbar,
  Tech,
  Works,
  StarsCanvas,
} from "./components";
import Banner from "./components/banner";
import Footer from "./components/footer";
import Certificates from "./components/Certificates";
import ResumeDownload from "./components/ResumeDownload";

// App
const App = () => {
  const [hide, setHide] = useState(true);

  return (
    <BrowserRouter>
      <Banner hide={hide} setHide={setHide} />
      <div className="relative z-0 bg-primary">
        <div className="bg-hero-pattern bg-cover bg-no-repeat bg-center">
          <Navbar hide={hide} />
          <Hero />
        </div>
        <About />
        {/* <Experience /> */}
        <Tech />
        <Works />
        <Certificates />
        {/* Contact */}
        <div className="relative z-0">
          <Contact />
          <StarsCanvas />
        <ResumeDownload />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
