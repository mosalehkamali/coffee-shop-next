import About from "@/components/templates/Index/About";
import Menu from "@/components/templates/Index/Menu";
import Offer from "@/components/templates/Index/Offer";
import Services from "@/components/templates/Index/Services";
import Reservation from "@/components/templates/Index/reservation";
import Slider from "@/components/templates/Index/Slider";
import React from "react";
import Testimonial from "@/components/templates/Index/Testimonial";

export default function Home({data}) {
  return (
    <>
      <Slider></Slider>
      <About></About>
      <Services services={data.services}></Services>
      <Offer></Offer>
      <Menu sliceNumber={3}  menu={data.menu}></Menu>
      <Reservation></Reservation>
      <Testimonial comments={data.comments}></Testimonial>
    </>
  );
}

export async function getStaticProps() {
  const servicesRes = await fetch("http://localhost:4000/services")
  const services = await servicesRes.json()

  const menuRes = await fetch("http://localhost:4000/menu")
  const menu = await menuRes.json()
 
  const commentsRes = await fetch("http://localhost:4000/comments")
  const comments = await commentsRes.json()

  return ({
    props: {
      data: {
        services,
        menu,
        comments,
      }
    },
    revalidate: 60*60 *12
  });
}