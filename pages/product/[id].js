import React from 'react'
import ProductsDetails from '@/components/templates/Product/ProductDetails'
import Comments from '@/components/templates/Product/Comments'

function Product({ product }) {

  return (
    <>
      <ProductsDetails data={product}></ProductsDetails>
      <Comments></Comments>
    </>
  )
}

export default Product

export async function getStaticProps(context) {
  const routeID = context.params.id
  const res = await fetch('http://localhost:4000/menu')
  const menuData = await res.json();

  const product = menuData.find(item => item.id == routeID)

  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24 //24 hours
  }
}

export async function getStaticPaths() {
  const res = await fetch('http://localhost:4000/menu')
  const data = await res.json();
  const paths = data.map(item => ({ params: { id: item.id.toString() } }))

  return {
    paths,
    fallback: false,
  }
}