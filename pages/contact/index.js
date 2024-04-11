import PageHeader from '@/components/modules/PageHeader/PageHeader'
import React from 'react'
import ContactDetils from '@/components/templates/Contact/ContactDetails'

function Contact() {
  return (
    <>
      <PageHeader route={"contact"}></PageHeader>
      <ContactDetils></ContactDetils>
    </>
  )
}

export default Contact
