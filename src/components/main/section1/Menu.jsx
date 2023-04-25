import React, { useEffect, useState } from 'react'
import style from './service.module.css'
import menu1 from './section1image/menu.png'
import menu2 from './section1image/menu2.png'
import menu3 from './section1image/menu3.png'
import menu4 from './section1image/menu4.png'
import menu5 from './section1image/menu5.png'
import menu6 from './section1image/menu6.png'
import menu7 from './section1image/farhad-ibrahimzade-JocD18QpAkY-unsplash.jpg'
import menu8 from './section1image/farhad-ibrahimzade-ZipYER3NLhY-unsplash.jpg'
import menu9 from './section1image/ysaias-martinez-JeJRRBZqZxo-unsplash (1).jpg'
import menu10 from './section1image/daria-nepriakhina--0gya0UbwPs-unsplash.jpg'
import menu11 from './section1image/nabil-kassir-x9ZkA7Yg1f0-unsplash.jpg'
import menu12 from './section1image/super-snapper-efJu9SKIjLA-unsplash.jpg'
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";


// import required modules
import { Pagination, Navigation } from "swiper";





export default function Menu() {
    const [image, setImage] = useState([])
    
    
    

    useEffect(()=>{
        fetch('https://retoolapi.dev/tOZVAX/dataimg')
        .then(respons => respons.json())
        .then(data => setImage(data))
    },[])

  return (
    <section className={style.menuSection}>
        <div className={style.menuContainer}>
            <div className={style.menuContent}>
                {Boolean.length && image.map((itam)=>(
                    <div className={style.bg_image_block} key={itam.id}>
                        <h3>
                            Check out our list of cuisines by our great chefs.<br></br>Choose among our a-la-carte services.
                        </h3>
                        <img src={itam.img} alt="img" />
                        
                        <div className={style.bg_child_block}>
                            <div className={style.listBlock}>
                               
                            </div> 
                                <>  
                                <Swiper
                                    slidesPerView={1}
                                    spaceBetween={30}
                                    loop={true}
                                    pagination={{
                                    clickable: true,
                                    }}
                                    navigation={true}
                                    modules={[Pagination, Navigation]}
                                    className="mySwiper"
                                >

                        <div className={style.parent_flex_block}>
                            <SwiperSlide className={style.swiper_flex_block}>
                            <h3 className={style.menu_title}>Lunch Catering</h3>
                                <div className={style.menu_image_parent}>
                                    <div className={style.menu_image_block}>
                                        <img src={menu6} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Classic Goulash</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                                
                                    <div className={style.menu_image_block}>
                                        <img src={menu5} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Classic Italian Spaghetti</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                               
                                    <div className={style.menu_image_block}>
                                        <img src={menu4} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Grilled Chicken	</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                                {/* parentTwo */}

                                <SwiperSlide className={style.swiper_flex_block}>
                            <h3 className={style.menu_title}>Lunch Catering</h3>
                                <div className={style.menu_image_parentTwo}>
                                    <div className={style.menu_image_block}>
                                        <img src={menu1} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Fried Pork Steak</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                                    <div className={style.menu_image_block}>
                                        <img src={menu2} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Healthy Salad</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                                    <div className={style.menu_image_block}>
                                        <img src={menu3} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Grilled Chicken	</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>  
                                </div>
                                </SwiperSlide>

                                {/* dinner-catering */}

                                <SwiperSlide className={style.swiper_flex_block}>
                                <h3 className={style.menu_title}>Dinner Catering</h3>
                                <div className={style.menu_image_parent}>
                                    <div className={style.menu_image_block}>
                                        <img src={menu7} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Classic Goulash</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                                
                                    <div className={style.menu_image_block}>
                                        <img src={menu8} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Classic Italian Spaghetti</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                               
                                    <div className={style.menu_image_block}>
                                        <img src={menu9} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Grilled Chicken	</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>

                                {/* Breakfast Catering */}

                                <SwiperSlide className={style.swiper_flex_block}>
                                <h3 className={style.menu_title}>Breakfast Catering</h3>
                                <div className={style.menu_image_parent}>
                                    <div className={style.menu_image_block}>
                                        <img src={menu10} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Classic Goulash</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                                
                                    <div className={style.menu_image_block}>
                                        <img src={menu11} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Classic Italian Spaghetti</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                               
                                    <div className={style.menu_image_block}>
                                        <img src={menu12} alt="img" />
                                        <div className={style.menu_image_child}>
                                            <div className={style.menu_price_block}>
                                                <span className={style.menu_price}>$80</span>
                                                <h3>Grilled Chicken	</h3>
                                            </div>
                                            <span>12 Person Minimum on All Packages.</span>
                                        </div>
                                    </div>
                                </div>
                                </SwiperSlide>
                            </div>
                            </Swiper>
                            </>  
                        </div>      
                    </div>
                ))}
                <div className={style.videoBlock}>
                    <div className={style.content}>
                        <div className={style.video}>
                            <iframe width="478" height="424" src="https://www.youtube.com/embed/7j7S2nJ_FyI" title="I cook it almost every day! One Pan Chicken Thigh Dinner!" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
                        </div>
                        <div className={style.text}>
                            <h2>At Sway, we know that food is<br></br>an important part of life</h2>
                            <p>
                                If the meal isn't perfect, your event cannot be perfect. We know that it is critical for your food to arrive on time, to be presented beautifully, and to be delicious.
                            </p>
                            <button>
                                Order Now
                                <ChevronRightIcon/>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}
