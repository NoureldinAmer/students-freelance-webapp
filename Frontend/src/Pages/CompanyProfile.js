import React from 'react'
import Company from './Business/Company'
import ErrorPage from './ErrorPage'

function CompanyProfile() {
  return (
    localStorage.getItem("role") === "freelance" ? <ErrorPage />: <Company />
  )
}

export default CompanyProfile