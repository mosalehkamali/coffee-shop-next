import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Testimonial from '@/components/templates/Index/Testimonial'
import React from 'react'

function index({data}) {
  return (
    <>
     <PageHeader route={"testimonial"}></PageHeader> 
     <Testimonial comments={data}></Testimonial>
    </>
  )
}

export default index

export async function getStaticProps(){
  const res = await fetch ("http://localhost:4000/comments")
  const data = await  res.json();
  
  return{
    props : {data}, // will be passed to the page component as props
    revalidate: 60*60*12,//every 12h re-generate this at most
  }
}
