import React from 'react'
import BusinessCreateJobPost from './Business/CreateJobPost'
import ErrorPage from './ErrorPage'

function CreateJobPost() {
  return (
    localStorage.getItem("role") === "freelance" ? <ErrorPage />: <BusinessCreateJobPost />
  )
}

export default CreateJobPost