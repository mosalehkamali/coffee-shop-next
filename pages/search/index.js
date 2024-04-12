import PageHeader from '@/components/modules/PageHeader/PageHeader'
import React from 'react'
import Card from '@/components/modules/Card/Card'

function Search({query , menu}) {

  const  searchItems = (type) =>{
    return(
    menu.filter(
    item => item.type == type&& 
    (item.type.toLowerCase().includes(query.toLowerCase())||
    item.title.toLocaleLowerCase().includes(query.toLocaleLowerCase())))
    .map(item => <Card key={item.id} {...item}></Card>)
  )
}

  return (
    <>
      <PageHeader route={"search"}></PageHeader>
      <div className="container-fluid pt-5">
      <div className="container">
        <div className="section-title">
          <h4 className="text-primary text-uppercase" style={{ letterSpacing: "5px" }}>Menu & Pricing</h4>
          <h1 className="display-4">Competitive Pricing</h1>
        </div>
        <div className="row">
          <div className="col-lg-6">
            <h1 className="mb-5">Hot Coffee</h1>
            {
              searchItems("hot")
            }
          </div>
          <div className="col-lg-6">
            <h1 className="mb-5">Cold Coffee</h1>
            {
              searchItems("cold")
            }

          </div>
        </div>
      </div>
    </div>
    </>
  )
}

export default Search

export async function getServerSideProps(context){
const query = context.query.q
const res = await fetch("http://localhost:4000/menu")
const menu = await res.json();

return{
  props:{
    query,
    menu,
  }
}
}