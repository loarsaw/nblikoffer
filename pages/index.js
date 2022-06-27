import React from "react";
import Layout from "../components/Layout/Layout";
import About from "../components/Misc/About";
import Catalog from "../components/Misc/Catalog";
import Faq from "../components/Misc/Faq";
import Hero from "../components/Misc/Hero";
import Services from "../components/Misc/Services";
import Testimonials from "../components/Misc/Testimonials";

function index() {
  return (
    <Layout>
      <Hero />
      <Services />
      <Catalog />
      {/* <About /> */}
      <Faq />
      <Testimonials />
    </Layout>
  );
}

export default index;
