import React, { useEffect, useState } from 'react'
import style from './header.module.css'
import {Link} from 'react-scroll'
import flag from './images/en-flag 1.png'
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import SearchIcon from '@mui/icons-material/Search';




export default function Header() {
    const [image, setImage]= useState([])

    useEffect(()=>{
        fetch('https://retoolapi.dev/BPQcZl/dataimg')
        .then(respons => respons.json())
        .then(data => setImage(data))
    },[])
  return (
    <section className={style.HeaderSection}>
        <div className={style.HeaderContainer}>
            <div className={style.HeaderContent}>
                {Boolean.length && image.map((itam) =>(
                    <div className={style.Bg_Image_Block} key={itam.id}>
                        <img src={itam.img} alt="img" />
                        <div className={style.navBlock}>
                            
                            <nav className={style.navBar}>
                            
                                <div className={style.listBlock}>
                                    <div className={style.logoBlock}>
                                        <h3 className={style.logo}>Let's Make a Toast!</h3>
                                    </div>
                                    <div className={style.linkBlock}>
                                        <Link className={style.navLinks}>
                                            Catering Services
                                        </Link>
                                        <Link className={style.navLinks}>
                                            Catering Packages   
                                        </Link>
                                        <Link className={style.navLinks}>
                                            Planning Guides   
                                        </Link>
                                        <Link className={style.navLinks}>
                                            Shop   
                                        </Link>
                                        <Link className={style.navLinks}>
                                            Contact Us   
                                        </Link>
                                        <Link className={style.navLinks}>
                                            About Us   
                                        </Link>
                                        <img className={style.flagImg} src={flag} alt="img" />
                                        <LocalGroceryStoreIcon className={style.store}/>
                                        <SearchIcon className={style.search}/>
                                    </div>
                                    <div className={style.order_Btn_Block}>
                                        <button className={style.orderBtn}>Order Now</button>
                                    </div>
                                </div>

                            </nav>
                        </div>
                        <div className={style.textBlock}>
                            <div className={style.texts}>
                                <h3>Catering should be an experience</h3>
                                <h2>We use only the finest and<br></br>freshest ingredients</h2>
                                <p>
                                   At Sway catering we know that food is an important part of life.<br></br>
                                   If the meal is not perfect, your event cannot be perfect.
                                </p>
                                <button className={style.requestBtn}>Request a Quote</button>
                            </div>
                        </div>
                    </div>
                ))}
               
            </div>
        </div>
    </section>
  )
}
