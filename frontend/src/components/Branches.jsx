import React from 'react'
import BranchCard from './BranchCard'
import "../styles/branches.css"
const Branches = () => {
  return (
    <section className="branches">
        <h2>
            Available Branches
        </h2>
        <div className="branches-container">
        <BranchCard 
        icon="💻"
        BranchName="Computer Science Engineering"
        />
        <BranchCard 
        icon="📡"
        BranchName="Electronics & Communication Engineering"
        />
        <BranchCard 
        icon="⚡"
        BranchName="Electrical & Electronics Engineering"
        />
        <BranchCard 
        icon="⚙️"
        BranchName="Mechanical Engineering"
        />
        <BranchCard 
        icon="🏗️"
        BranchName="Civil Engineering"
        />
      </div>
    </section>
  )
}

export default Branches