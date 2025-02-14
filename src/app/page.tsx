"use client";

import Head from "next/head";
import Hero from "./components/HeroSection";
import CountdownTimer from "./components/CountdownTimer"; // New Countdown Timer
import EventDetails from "./components/EventDetails";
import Expectations from "./components/Expectations";
import Topics from "./components/Topics";
import WhyAttend from "./components/WhyAttend";
import EventSchedule from "./components/EventSchedule";
import Footer from "./components/Footer";
// import FAQ from "./components/FAQ"; // Added FAQ Section

export default function Home() {
  return (
    <>
      <Head>
        <title>Music & Tech Conference 2025 | The Future of Sound & Innovation</title>
        <meta name="description" content="Join the Music & Tech Conference 2025! Explore AI, blockchain, and digital tools transforming the music industry. Live performances, expert panels, and networking opportunities." />
      </Head>

      {/* Page Content */}
      <main className="bg-event-white text-event-white">
        <Hero />
        <CountdownTimer /> 
        <EventDetails />
        <Expectations />
        <Topics />
        <WhyAttend />
        <EventSchedule />
        <Footer />
        {/* <FAQ /> */}
      </main>
    </>
  );
}
