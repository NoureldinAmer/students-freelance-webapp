import React from 'react'
import BusinessJobPost from './Business/JobPost'
import FreelanceJobPosts from './Freelance/JobPosts'

function JobPosts() {
  return (
    localStorage.getItem("role") === "freelance" ? <BusinessJobPost />: <FreelanceJobPosts />
  )
}

export default JobPosts