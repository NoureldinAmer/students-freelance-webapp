import React from 'react'
import ErrorPage from './ErrorPage'
import BusinessJobApplicants from './Business/JobApplicants'

function JobPost() {
  return (
    localStorage.getItem("role") === "freelance" ? <ErrorPage /> :  <BusinessJobApplicants />
  )
}

export default JobPost