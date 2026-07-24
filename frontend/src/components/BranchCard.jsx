import React from 'react'

const BranchCard = ({ icon, BranchName }) => {
  return (
  <div>
    <h3>{icon}</h3>
    <h4>{BranchName}</h4>
  </div>
  )
}

export default BranchCard;