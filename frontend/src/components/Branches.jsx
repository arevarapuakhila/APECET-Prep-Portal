import React from 'react'
import BranchCard from './BranchCard'
const Branches = () => {
  return (
    <section>
        <h2>
            Available Branches
        </h2>
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

    </section>
  )
}

export default Branches