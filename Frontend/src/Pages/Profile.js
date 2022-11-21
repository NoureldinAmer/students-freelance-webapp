import React from 'react'
import BusinessProfile from './Business/Profile'
import FreelanceProfile from './Freelance/Profile'

function Profile() {
  return (
    localStorage.getItem("role") === "freelance" ? <FreelanceProfile />: <BusinessProfile />
  )
}

export default Profile