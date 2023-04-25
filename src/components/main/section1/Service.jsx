import React from 'react'
import style from './service.module.css'
import Anniversaries from './section1image/image 14.png'
import cup from  './section1image/image 15.png'
import weddings from './section1image/image 16.png'
import social from './section1image/image 17.png'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';



export default function Service() {
    

  return (
    <section className={style.serviceSection}>
        <div className={style.serviceContainer}>
            <div className={style.serviceContent}>
                <h2>We are a full-service catering company located in NYC</h2>
                <div className={style.flexBlocks}>
                    <div className={style.childBlocks}>
                        <img src={Anniversaries} alt="img" />
                        <h3>Anniversaries</h3>
                        <span>Enjoy one of our refreshing body treatments for skin</span>
                        <button>Learn More</button>
                    </div>
                    <div className={style.childBlocks}>
                        <img className={style.cup} src={cup} alt="img" />
                        <h3>Corporate Parties</h3>
                        <span>Enjoy one of our refreshing body treatments for skin</span>
                        <button>Learn More</button>
                    </div>
                    <div className={style.childBlocks}>
                        <img className={style.weddings} src={weddings} alt="img" />
                        <h3>Weddings</h3>
                        <span>Enjoy one of our refreshing body treatments for skin</span>
                        <button>Learn More</button>
                    </div>
                    <div className={style.childBlocks}>
                        <img src={social} alt="img" />
                        <h3>Social Events</h3>
                        <span>Enjoy one of our refreshing body treatments for skin</span>
                        <button>Learn More</button>
                    </div>
                </div>
                <button className={style.serviceBtn}>
                    Our Services
                    <ChevronRightIcon/>
                </button>
            </div>
        </div>
    </section>
  )
}
