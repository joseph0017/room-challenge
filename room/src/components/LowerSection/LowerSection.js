import React from 'react'
import firstLowerImage from '../../images/image-about-dark.jpg'
import secondLowerImage from '../../images/image-about-light.jpg'
import './LowerSection.css'

const LowerSection = () => {
    return (
        <div className = "lower-section" >
            <img src = {firstLowerImage}  alt = "chair"  className = "first-image" />
            <div className="lower-section-text">
                <h2> About our furniture </h2>
                <div className="text"> 
                Our multifunctional collection blends design and function to suit your individual taste.
                Make each room unique, or pick a cohesive theme that best express your interests and what
                inspires you. Find the furniture pieces you need, from traditional to contemporary styles
                or anything in between. Product specialists are available to help you create your dream space.
                </div>
            </div>
            <img src = {secondLowerImage}  alt = "chair"  className = "second-image" />
        </div>
    )
}

export default LowerSection
