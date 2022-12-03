import Head from "next/head";
import Navbar from "../components/Navbar";
import Hero from "../components/Hero";
import Secpage from "../components/Secpage";
import Populars from "../components/Populars";
import Creators from "../components/Creators";
import Footer from "../components/Footer";

export default function Weebapp() {
  return (
    <div>
      <Head>
        <title>Weebapp</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/weeblogo40.png" />
      </Head>
      <Navbar />
      <Hero />
      <Secpage />
      <Populars />
      <Creators />
      <Footer />
    </div>
  );
}
