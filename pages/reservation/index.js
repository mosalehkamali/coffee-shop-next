import React from 'react'
import PageHeader from '@/components/modules/PageHeader/PageHeader'
import Reservation from '@/components/templates/Index/reservation'
function index() {
  return (
    <>
      <PageHeader route={"reservation"}></PageHeader>
      <Reservation></Reservation>
    </>
  )
}

export default index
