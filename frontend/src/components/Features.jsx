import React from 'react'
import FeatureCard from './FeatureCard'
import "../styles/features.css";

const Features = () => {
  return (
    <section className="features">
        <h2>Why Choose Our Portal?</h2>
        <div className="features-container">
        <FeatureCard 
        icon="📚"
        title="Study Materials"
        description="Access complete AP ECET notes organized branch-wise."
        />
        <FeatureCard
        icon="📝"
        title="Mock Tests"
        description="Practice timed tests based on the latest ECET exam pattern."
        />
        <FeatureCard
        icon="📅" 
        title="Study Planner"
        description="Generate personalized daily study schedules."
        />
        <FeatureCard 
        icon="🤖"
        title="AI Doubt Solver"
        description="Ask questions and get instant concept explanations."
        />
        <FeatureCard
        icon="📊" 
        title="Performance Analytics"
        description="Track your scores, accuracy, and improvement after every mock test."
        />
        </div>
    </section>
  )
}

export default Features