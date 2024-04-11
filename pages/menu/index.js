import React from 'react'
import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Menu from '@/components/templates/Index/Menu'

function Menus({ data }) {
  return (
    <>
      <PageHeader route={"Menu"}></PageHeader>
      <Menu sliceNumber={data.length} menu={data}></Menu>
    </>
  )
}

export default Menus

export async function getStaticProps() {
  const res = await fetch("http://localhost:4000/menu")
  const data = await res.json()

  return (
    {
      props: { data },
      revalidate: 60*60 *12, // 12 hours
    }
  )
}