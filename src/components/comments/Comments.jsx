import './comments.css'
import user1 from './commentImgs/Ellipse 12.png'
import user2 from './commentImgs/Ellipse 13.png'
import user3 from './commentImgs/Ellipse 14.png'
import icon1 from './commentImgs/1f3c6 1.png'
import icon2 from './commentImgs/in-love 1.png'
import user4 from './commentImgs/christopher-campbell-rDEOVtE7vOs-unsplash.jpg'
import user5 from './commentImgs/irene-strong-TMt3JGoVlng-unsplash.jpg'
import user6 from './commentImgs/philipp-wuthrich-5n3JP9WAJTs-unsplash.jpg'
import StarIcon from '@mui/icons-material/Star';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper";

export default function Comments() {
          
  return (
    <section className='commentSection'>
        <div className='commentContent'>
            <div className='comment_slide_block'>
                <div className='slider_line_block'>      
                <>
                <Swiper navigation={true} modules={[Navigation]} className='mySwiper'>
                <SwiperSlide>
                    <div  className='slide_child_blocks'>
                        <div className='user_info_block'>
                            <div className='user_descr'>
                                <img src={user1} alt="img" />
                            <div className='user_name_block'>
                                <h4>Vincent Smith</h4>
                                <span>CEO at Ritmo</span>
                            </div>
                            </div>
                            <div className='user_text_block'>
                                <div className='icons_block'>
                                    <h3>I love Sway</h3>
                                    <img src={icon2} alt="icon" />
                                </div>
                                    
                                <p>The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.</p>
                                <div className='star_block'>
                                    <span>5.0</span>
                                    <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/>
                                    </div>
                            </div>
                        </div>
                    </div>
                   
                    <div  className='slide_child_blocks'>
                        <div className='user_info_block'>
                            <div className='user_descr'>
                                <img src={user2} alt="img" />
                            <div className='user_name_block'>
                                <h4>Thomas Smith</h4>
                                <span>CEO at Ritmo</span>
                            </div>
                            </div>
                            <div className='user_text_block'>
                                    <div className='icons_block'>
                                        <h3>I love Sway</h3>
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    
                                    <p>The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.</p>
                                    <div className='star_block'>
                                        <span>5.0</span>
                                        <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/>
                                    </div>
                            </div>
                        </div>
                    </div>
                   
                    <div  className='slide_child_blocks'>
                        <div className='user_info_block'>
                            <div className='user_descr'>
                                <img src={user3} alt="img" />
                            <div className='user_name_block'>
                                <h4>Stella Smith</h4>
                                <span>CEO at Ritmo</span>
                            </div>
                            </div>
                            <div className='user_text_block'>
                                    <div className='icons_block'>
                                        <h3>I love Sway</h3>
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    
                                    <p>The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.</p>
                                    <div className='star_block'>
                                        <span>5.0</span>
                                        <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div  className='slide_child_blocks'>
                        <div className='user_info_block'>
                            <div className='user_descr'>
                                <img src={user4} alt="img" />
                            <div className='user_name_block'>
                                <h4>Vincent Smith</h4>
                                <span>CEO at Ritmo</span>
                            </div>
                            </div>
                            <div className='user_text_block'>
                                <div className='icons_block'>
                                    <h3>I love Sway</h3>
                                    <img src={icon2} alt="icon" />
                                </div>
                                    
                                <p>The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.</p>
                                <div className='star_block'>
                                    <span>5.0</span>
                                    <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/>
                                    </div>
                            </div>
                        </div>
                    </div>
                   
                    <div  className='slide_child_blocks'>
                        <div className='user_info_block'>
                            <div className='user_descr'>
                                <img src={user5} alt="img" />
                            <div className='user_name_block'>
                                <h4>Thomas Smith</h4>
                                <span>CEO at Ritmo</span>
                            </div>
                            </div>
                            <div className='user_text_block'>
                                    <div className='icons_block'>
                                        <h3>I love Sway</h3>
                                        <img src={icon1} alt="icon" />
                                    </div>
                                    
                                    <p>The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.</p>
                                    <div className='star_block'>
                                        <span>5.0</span>
                                        <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/>
                                    </div>
                            </div>
                        </div>
                    </div>
                   
                    <div  className='slide_child_blocks'>
                        <div className='user_info_block'>
                            <div className='user_descr'>
                                <img src={user6} alt="img" />
                            <div className='user_name_block'>
                                <h4>Stella Smith</h4>
                                <span>CEO at Ritmo</span>
                            </div>
                            </div>
                            <div className='user_text_block'>
                                    <div className='icons_block'>
                                        <h3>I love Sway</h3>
                                        <img src={icon2} alt="icon" />
                                    </div>
                                    
                                    <p>The experts easily identified the look and feel we wanted and guided us through the creation of the content of the site.</p>
                                    <div className='star_block'>
                                        <span>5.0</span>
                                        <StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/><StarIcon className='star'/>
                                    </div>
                            </div>
                        </div>
                    </div>
                    </SwiperSlide>

                    </Swiper>
                </>
                </div>
                
            </div>
                
        </div>
    </section>
  )
}
