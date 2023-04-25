import React from 'react'
import style from './subscribe.module.css'


export default function Subscribe() {
  return (
    <section className={style.subscribeSection}>
        <div className={style.subscribeContent}>
            <div className={style.subscribe_text}>
                <h3>Subscribe to our newsletter and<br></br>receive 10% off your first order</h3>
            </div>
            <div className={style.subscribeform}>
                <form action="">
                    <input className={style.email} type="email"  placeholder='Enter your email' />
                    <button className={style.subscribe_btn}>Subscribe</button>
                    <div className={style.checkbox_block}>
                        <input type="checkbox" />
                        <p>I agree to my email being stored and used to receive the newsletter.</p>
                    </div>
                </form>
            </div>
        </div>
        <div className={style.map_block}>
            <iframe className={style.map} data-aos="zoom-in-up" title='map' src="https://maps.google.com/maps?q=medical%20center%20of%20san%20francisco&amp;t=&amp;z=13&amp;ie=UTF8&amp;iwloc=&amp;output=embed" id="gmap_canvas" frameborder="0" scrolling="no"></iframe>
        </div>
    </section>
  )
}
