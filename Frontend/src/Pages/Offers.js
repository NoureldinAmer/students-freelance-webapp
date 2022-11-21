import React from 'react'
import FreelanceOffers from './Freelance/Offers'
import BusinessOffers from './Business/Offers'

function Offers() {
  return (
    localStorage.getItem("role") === "freelance" ? <FreelanceOffers />: <BusinessOffers />
  )
}

export default Offers