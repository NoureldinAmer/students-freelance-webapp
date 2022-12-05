import React from 'react'
import FreelanceApplications from './Freelance/Applications'
import ErrorPage from './ErrorPage'

function Applications() {
  return (
    localStorage.getItem("role") === "freelance" ? <FreelanceApplications />: <ErrorPage />
  )
}

export default Applications