import React from 'react'
import FreelancerProjects from './Freelance/Projects'
import BusinessProjects from './Freelance/Projects'

function Profile() {
  return (
    localStorage.getItem("role") === "freelance" ? <FreelancerProjects />: <BusinessProjects />
  )
}

export default Profile