import React from 'react'
import "../styles/branchCard.css"
const BranchCard = ({ icon, BranchName }) => {
  return (
  <div className="branch-card">
    <h3>{icon}</h3>
    <h4>{BranchName}</h4>
  </div>
  )
}

export default BranchCard;