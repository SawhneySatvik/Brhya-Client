import React from 'react'
import ChangingTheWay from '../components/Company/ChangingTheWay'
import OurMission from '../components/Company/OurMission'
import OurValues from '../components/Company/OurValues'
import TrustedBy from '../components/Company/TrustedBy'
import CompanyImageSection from '../components/Company/CompanyImageSection'

export default function page() {
  return (
    <>
      <ChangingTheWay />
      <OurMission />
      <CompanyImageSection />
      <OurValues />
      <TrustedBy />
    </>
  )
}
