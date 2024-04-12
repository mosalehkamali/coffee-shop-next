import React from 'react'
import ProductsDetails from '@/components/templates/Product/ProductDetails'
import Comments from '@/components/templates/Product/Comments'

function Product({ product, comments }) {

  return (
    <>
      <ProductsDetails data={product}></ProductsDetails>
      <Comments comments={comments}></Comments>
    </>
  )
}

export default Product

export async function getStaticProps(context) {
  const routeID = context.params.id

  const menuRes = await fetch('http://localhost:4000/menu')
  const menuData = await menuRes.json();

  const product = menuData.find(item => item.id == routeID)

  const commentsRes = await fetch('http://localhost:4000/comments')
  const commentsData = await commentsRes.json();

  const comments = commentsData.filter(item => item.productID == routeID)

  return {
    props: {
      product,
      comments,
    },
    revalidate: 60 * 60 * 12 //12 hours
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