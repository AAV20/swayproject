import React, { useEffect, useState } from 'react'
import style from './main.module.css'
import BakeryDiningTwoToneIcon from '@mui/icons-material/BakeryDiningTwoTone';
import LunchDiningTwoToneIcon from '@mui/icons-material/LunchDiningTwoTone';
import LiquorTwoToneIcon from '@mui/icons-material/LiquorTwoTone';




export default function Catering() {

    const [image,setImage] = useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/TYUZmJ/dataimg')
        .then(respons => respons.json())
        .then(data => setImage(data))
    })
    
    
  return (
    <section className={style.mainSection}>
        <div className={style.mainContainer}>
            <div className={style.mainContent}>
                <div className={style.texts}>
                    <h3>Catering services in New York</h3>
                    <h2>We specialize in corporate and private events</h2>
                    <p>With 20 years of experience, we promise you the freshest, local ingredients, hand-crafted<br></br>
                       cooking sprinkled with our unique whimsical elegance and exceptional service.
                  </p>
                  </div>
                    <div className={style.foodBlock}>
                        {Boolean.length && image.map((itam)=>(
                            <div className={style.main_Image_Block} key={itam.id}>
                                <img src={itam.img} alt="img" />
                                <div className={style.layer}>
                                    <h3 className={style.more}>Explore More</h3>
                                </div>
                            </div>
                        ))}
                        <div className={style.foodDescr}>
                            <h3>Stirring Our Passion with Colors,<br></br> Flavors and Exotic Textures</h3>
                            <div className={style.flexBlock}>
                                <div className={style.flexChild}>
                                    <h4>Elevating Flavors with the Best Ingredients</h4>
                                    <p>To ensure that every dish is made to perfection,<br></br> our chef chops and prepares the food fresh each <br></br> morning, never the day before.</p>
                                </div>
                                <BakeryDiningTwoToneIcon className={style.icn}/>
                            </div>
                            <div className={style.flexBlock}>
                                <div className={style.flexChild}>
                                    <h4>Food is at the Heart of Everything We Do</h4>
                                    <p>Our chefs chop and prepare food fresh each<br></br>morning, never the day before.</p>
                                </div>
                                <LunchDiningTwoToneIcon className={style.icn}/>
                            </div>
                            <div className={style.flexBlock}>
                                <div className={style.flexChild}>
                                    <h4>Putting Quality First</h4>
                                    <p>Whether it's a hearty breakfast or a satisfying lunch,<br></br>you can always count on us to deliver <br></br>the freshest and most delicious meals possible.</p>
                                </div>
                                <LiquorTwoToneIcon className={style.icn}/>
                            </div>
                        </div>
                    </div>
                
            </div>
        </div>
    </section>
  )
}
