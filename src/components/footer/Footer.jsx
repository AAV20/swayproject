import React from 'react'
import style from './footer.module.css'
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import TwitterIcon from '@mui/icons-material/Twitter';

export default function Footer() {
  return (
    <section className={style.footerSection}>
        <div className={style.footerContent}>
            <div className={style.footer_nav_list}>
                <div className={style.navlist_child_block}>
                    <ul>
                        <li>About</li>
                        <li>Service</li>
                        <li>Pricing plans</li>
                        <li>Privacy</li>
                        <li>Contact us</li>
                    </ul>
                    <div className={style.footer_social_icons}>
                        <FacebookIcon className={style.icons}/>
                        <InstagramIcon className={style.icons}/>
                        <TwitterIcon className={style.icons}/>
                    </div>
                </div>
            </div>
            <div className={style.list_flex_block}>
                <div className={style.lists}>
                    <div className={style.list1}>
                        <ul>
                            <h5>About</h5>
                            <li>About Sway</li>
                            <li>Plans Pricing</li>
                            <li>Services</li>
                            <li>Blog</li>
                        </ul>
                    </div>
                    <div className={style.list2}>
                        <ul>
                            <h5>Products</h5>
                            <li>Primari Blocks</li>
                            <li>Content Blocks</li>
                            <li>Infograpick Blocks</li>
                            <li>Buisnes Blocks</li>
                        </ul>
                    </div>
                    <div className={style.list3}>
                        <ul>
                            <h5>Resurces</h5>
                            <li>Suport Center</li>
                            <li>Documentation</li>
                            <li>Newsletter</li>
                            <li>Chanelog</li>
                        </ul>
                    </div>
                    <div className={style.list4}>
                        <ul>
                            <h5>Follow us</h5>
                            <li>Twitter</li>
                            <li>Dribble</li>
                            <li>Facebook</li>
                            <li>Linkedin</li>
                        </ul>
                    </div>
                </div>
                <div className={style.list_contact_us}>
                    <h3>Contact us</h3>
                    <p>New York. 112 W<br></br>34th St, Manhattan<br></br>(1) 212-445-4320</p>
                </div>
            </div>
        </div>
    </section>
  )
}
