import Link from 'next/link'
import React from 'react'
import Image from 'next/image'

export default function Header() {
  return (
    <>
           
<div className="full-width-header">            
            <header id="rs-header" className="rs-header style2 header-transparent">                
                <div className="topbar-area style1">
                    <div className="container custom">
                        <div className="row y-middle">
                            <div className="col-lg-7">
                                <div className="topbar-contact">
                                   <ul>
                                       <li>
                                           <i className="flaticon-email"></i>
                                           <a href="mailto:cruciallearning.info@byldgroup.com">cruciallearning.info@byldgroup.com</a>
                                       </li>
                                       <li>
                                           <i className="flaticon-call"></i>
                                           <a href="tel:1800-102-1345"> 1800-102-1345</a>
                                       </li>
                                       <li>
                                           <i className="flaticon-location"></i>
                                           Unit No. 629-634, 6th Floor
                                       </li>
                                   </ul>
                                </div>
                            </div>
                            <div className="col-lg-5 text-right">
                                <div className="toolbar-sl-share">
                                    <ul>
                                         <li className="opening"> <em><i className="flaticon-clock"></i>Monday - Friday / 9AM - 6PM</em> </li>
                                         <li><a target="_blank" href="#"><i className="fa fa-facebook"></i></a></li>
                                         <li><a target="_blank" href="#"><i className="fa fa-linkedin"></i></a></li>
                                         <li><a target="_blank" href="#"><i className="fa fa-twitter"></i></a></li>
                                         <li><a target="_blank" href="#"><i className="fa fa-youtube"></i></a></li>                                         
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
               
                <div className="menu-area menu-sticky">
                    <div className="container custom">
                        <div className="row-table">
                            <div className="col-cell header-logo">                                  
                                <div className="logo-area">
                                    <a href="/">
                                        <img src="/assets/img/cruciallifechangingskills-logo-svg.png" alt="logo"/>  
                                    </a>
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="rs-menu-area">
                                    <div className="main-menu">
                                        <nav className="rs-menu hidden-md">
                                            <ul className="nav-menu">
                                                <li>
                                                    <a href="#">HOME</a>                                                    
                                                </li>

                                                <li>
                                                    <a href="#">ABOUT US</a>                                                    
                                                </li>
                                                
                                                <li className="menu-item-has-children">
                                                    <a href="/solutions">BROWSE COURSES</a>                                                    
                                                </li>
                                                <li>
                                                    <a href="#">EVENTS</a>
                                                </li>
                                                <li>
                                                    <a href="#">BLOG</a>
                                                </li>
                                                <li>
                                                    <a href="#">CONTACT US</a>
                                                </li>
                                            </ul> 
                                        </nav>
                                    </div> 
                                </div>
                            </div>
                          
                        </div>
                    </div>
                </div>
               
                <nav className="right_menu_togle hidden-md">
                    <div className="close-btn">
                        <a id="nav-close" className="nav-close">
                            <div className="line">
                                <span className="line1"></span>
                                <span className="line2"></span>
                            </div>
                        </a>
                    </div>
                                     
                    
                    <div className="canvas-contact">
                        <div className="address-area">
                            <div className="address-list">
                                <div className="info-icon">
                                    <i className="flaticon-location"></i>
                                </div>
                                <div className="info-content">
                                    <h4 className="title">Address</h4>
                                    <em>Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, Gurgaon – 122018, Haryana (India) </em>
                                </div>
                            </div>
                            <div className="address-list">
                                <div className="info-icon">
                                    <i className="flaticon-email"></i>
                                </div>
                                <div className="info-content">
                                    <h4 className="title">Email</h4>
                                    <em><a href="mailto:assessments.info@byldgroup.com">assessments.info@byldgroup.com</a></em>
                                </div>
                             </div>
                            <div className="address-list">
                                <div className="info-icon">
                                  <i className="flaticon-call"></i>
                                </div>
                                <div className="info-content">
                                  <h4 className="title">Phone</h4>
                                  <em>1800-102-1345</em>
                                </div>
                            </div>
                        </div>
                      
                    </div>
                </nav>
               
                <nav className="right_menu_togle mobile-navbar-menu" id="mobile-navbar-menu">
                    <div className="close-btn">
                        <a id="nav-close2" className="nav-close">
                            <div className="line">
                                <span className="line1"></span>
                                <span className="line2"></span>
                            </div>
                        </a>
                    </div>
                    <ul className="nav-menu">
                                                <li>
                                                    <a href="#">HOME</a>                                                    
                                                </li>

                                                <li>
                                                    <a href="#">ABOUT US</a>                                                    
                                                </li>
                                                
                                                <li className="menu-item-has-children">
                                                    <a href="/solutions">BROWSE COURSES</a>                                                    
                                                </li>
                                                <li>
                                                    <a href="#">EVENTS</a>
                                                </li>
                                                <li>
                                                    <a href="#">BLOG</a>
                                                </li>
                                                <li>
                                                    <a href="#">CONTACT US</a>
                                                </li>
                                            </ul>                    
                </nav>
            
            </header>
          
        </div>
    </>
  )
}
