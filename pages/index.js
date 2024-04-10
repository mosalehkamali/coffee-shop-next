import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
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
      <Menu  menu={data.menu}></Menu>
    </>
  );
}

export async function getStaticProps() {
  const servicesRes = await fetch("http://localhost:4000/services")
  const services = await servicesRes.json()
  const menuRes = await fetch("http://localhost:4000/menu")
  const menu = await menuRes.json()
  return ({
    props: {
      data: {
        services,
        menu
      }
    },
    revalidate: 60*60 *12
  });
}