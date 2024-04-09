import React from "react"
import ServiceItem from "@/components/modules/ServiceItem/ServiceItem"

function Services() {

  const services = [
    {
      id: '1',
      img:'images/service-1.jpg',
      title: 'Fastest Door Delivery',
      icon:'fa fa-truck service-icon',
      description: 'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'
    },
    {
      id: '2',
      img:'images/service-2.jpg',
      title: 'Fresh Coffee Beans',
      icon:'fa fa-coffee service-icon',
      description: 'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'
    },
    {
      id: '3',
      img:'images/service-3.jpg',
      title: 'Best Quality Coffee',
      icon:'fa fa-award service-icon',
      description: 'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'
    },
    {
      id: '4',
      img:'images/service-4.jpg',
      title: 'Online Table Booking',
      icon:'fa fa-table service-icon',
      description: 'Sit lorem ipsum et diam elitr est dolor sed duo. Guberg sea et et lorem dolor sed est sit invidunt, dolore tempor diam ipsum takima erat tempor'
    },
    
  ]

  return (
    <div class="container-fluid pt-5">
      <div class="container">
        <div class="section-title">
          <h4 class="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Our Services</h4>
          <h1 class="display-4">Fresh & Organic Beans</h1>
        </div>
        <div class="row">

          {
            services.map((service)=>(
              <ServiceItem {...service}></ServiceItem>
            ))
          }
         
        </div>
      </div>
    </div>
  )
}

export default Services;
