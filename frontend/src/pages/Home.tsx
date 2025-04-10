import React from "react";
import { Main } from "../layouts/Main";
import { useRef } from "react";
import Hero from "./home/Hero";
import Features from "./home/Features";
import JoinUs from "./home/JoinUs";
import Promo from "./home/Promo";
import Footer from "./home/Footer";

export const Home: React.FC = () => {
  const homeRef = useRef<HTMLDivElement>(null);
  const servicesRef = useRef<HTMLDivElement>(null);
  const aboutRef = useRef<HTMLDivElement>(null);
  const contactRef = useRef<HTMLDivElement>(null);
  return (
    <Main>
      <div className="home-container">
        <div>
          <Hero />
        </div>
        <div>
          <Features />
        </div>
        <div>
          <JoinUs />
        </div>
        <div>
          <Promo />
        </div>

        <div>
          <Footer />
        </div>
      </div>
    </Main>
  );
};
