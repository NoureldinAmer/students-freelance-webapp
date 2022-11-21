import React from 'react'
import BusinessDashboard from './Business/Dashboard'
import FreelanceDashboard from "./Freelance/Dashboard";

function Dashboard() {
  return (
    localStorage.getItem("role") === "freelance" ? <FreelanceDashboard />: <BusinessDashboard />
  )
}

export default Dashboard