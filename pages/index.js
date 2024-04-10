import About from "@/components/templates/Index/About";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Slider from "@/components/templates/Index/Slider";
import React from "react";

export default function Home({data}) {
  return (
    <>
      <Slider></Slider>
      <About></About>
      <Services services={data.services}></Services>
      <Offer></Offer>
    </>
  );
}

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/services")
  const services = await res.json()
  return ({
    props: {
      data: {
        services
      }
    },
    revalidate: 60*60 *12
  });
}