import React from 'react'
import FeelanceApply from './Freelance/Apply'
import ErrorPage from './ErrorPage'

function Apply() {
  return (
    localStorage.getItem("role") === "freelance" ? <FeelanceApply /> : <ErrorPage />
  )
}

export default Apply