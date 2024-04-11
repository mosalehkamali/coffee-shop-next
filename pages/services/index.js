import PageHeader from '@/components/modules/PageHeader/PageHeader'
import React from 'react'
import Services from '@/components/templates/Index/Services'

function index({data}) {
  return (
    <>
    <PageHeader  route={"Services"}></PageHeader>
    <Services services={data.services}></Services>
    </>
  )
}

export default index

export async function getStaticProps() {
  const servicesRes = await fetch("http://localhost:4000/services")
  const services = await servicesRes.json()


  return ({
    props: {
      data: {
        services,
      }
    },
    revalidate: 60*60 *12
  });
}