import style from './store.module.css'
import food1 from './storeimage/Rectangle 40.png'
import food2 from './storeimage/Rectangle 41.png'
import food3 from './storeimage/eiliv-aceron-ZuIDLSz3XLg-unsplash.jpg'
import food4 from './storeimage/elena-leya-RHLtemkEAaM-unsplash.jpg'
import food5 from './storeimage/emy-XoByiBymX20-unsplash.jpg'
import food6 from './storeimage/lampos-aritonang-24gR_9lCdes-unsplash.jpg'
import food7 from './storeimage/louis-hansel-mVZ_gjm_TOk-unsplash.jpg'
import food8 from './storeimage/marcin-skalij-w_2vlvTgk7E-unsplash.jpg'
import StarIcon from '@mui/icons-material/Star';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';


export default function Store() {
  return (
    <section className={style.storeSection}>
        <div className={style.storeContainer}>
            <div className={style.storeContent}>
                <h2>Visit our online store right now to see our<br></br>exclusive menu and products</h2>
                <div className={style.store_image_block}>
                    <div className={style.store_child_blocks}>
                        <img src={food1} alt="img" />
                        <h4>Classic Goulash</h4>
                        <div className={style.store_price_block}>
                            <span>$25</span>
                            <div className={style.star_line}>
                                <StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.store_child_blocks}>
                    <div className={style.image_sale_block}>
                            <div className={style.sale}>Sale 50%</div>
                            <img src={food2} alt="img" />
                        </div>
                        <h4>Classic Goulash</h4>
                        <div className={style.store_price_block}>
                            <span>$55</span>
                            <div className={style.star_line}>
                                <StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.store_child_blocks}>
                        <img src={food3} alt="img" />
                        <h4>Classic Goulash</h4>
                        <div className={style.store_price_block}>
                            <span>$55</span>
                            <div className={style.star_line}>
                                <StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.store_child_blocks}>
                        <div className={style.image_sale_block}>
                            <div className={style.sale}>Sale 50%</div>
                            <img src={food4} alt="img" />
                        </div>
                        <h4>Classic Goulash</h4>
                        <div className={style.store_price_block}>
                            <span>$55</span>
                            <div className={style.star_line}>
                                <StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.store_child_blocks}>
                        <img src={food5} alt="img" />
                        <h4>Classic Goulash</h4>
                        <div className={style.store_price_block}>
                            <span>$55</span>
                            <div className={style.star_line}>
                                <StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.store_child_blocks}>
                        <img src={food6} alt="img" />
                        <h4>Classic Goulash</h4>
                        <div className={style.store_price_block}>
                            <span>$55</span>
                            <div className={style.star_line}>
                                <StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.store_child_blocks}>
                        <img src={food7} alt="img" />
                        <h4>Classic Goulash</h4>
                        <div className={style.store_price_block}>
                            <span>$35</span>
                            <div className={style.star_line}>
                                <StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/>
                            </div>
                        </div>
                    </div>
                    <div className={style.store_child_blocks}>
                        <img src={food8} alt="img" />
                        <h4>Classic Goulash</h4>
                        <div className={style.store_price_block}>
                            <span>$55</span>
                            <div className={style.star_line}>
                                <StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/><StarIcon className={style.star}/>
                            </div>
                        </div>
                    </div>
                    
                </div>
                <div className={style.storeBtn_block}>
                    <button className={style.storeBtn}>
                        Visit Store
                        <ChevronRightIcon/>
                    </button>
                </div>
            </div>
        </div>
    </section>
  )
}
