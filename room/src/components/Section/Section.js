import  { useState} from 'react'
import { sliderData } from '../Data/Data'
import './Section.css'
import arrow from '../../images/icon-arrow.svg'
import arrowLeft from '../../images/icon-angle-left.svg'
import arrowRight from '../../images/icon-angle-right.svg'

const Section = () => {
    const [current, setCurrent] = useState(0);
    const length = sliderData.length;
  
    const nextSlide = () => {
      setCurrent(current === length - 1 ? 0 : current + 1);
    };
  
    const prevSlide = () => {
      setCurrent(current === 0 ? length - 1 : current - 1);
    };
  
    return (
        <div>
            { sliderData.map((data, index) => {
                return (
                    <div className = "section" key = {index}>
                        { index === current && (
                        <>
                        <img src = {data.img} alt = "furniture" className= "image"/>
                        <div className="bottom-arrow">
                            <div className="left-arrow">
                                <button className = "button1" onClick  = {prevSlide} > 
                                <img src = {arrowLeft} alt = "left arrow" className = "left-arrow-svg"/>
                                 </button>

                            </div>
                            <div className="right-arrow">
                                <button className="button2" onClick = {nextSlide}> 
                                <img src = {arrowRight} alt = "left arrow" className = "right-arrow-svg"/>
                                </button>

                        </div>       
                         </div>
                        <div className = "section-text"> 
                        <h2 className="title"> { data.title } </h2>
                        <div className="subtitle-text"> { data.subtitle } </div>
                        <div className = "shop-text">
                            <h4> SHOP NOW </h4>     
                            <div className="arrow">
                                <img src= {arrow} alt = "arrow" />
                            </div>
                        </div>
                    </div>
                    </>
                    )}
                </div>
                )
            })}
        </div>
    )
}

export default Section