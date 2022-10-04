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
                                           <a href="mailto:assessments.info@byldgroup.com">assessments.info@byldgroup.com</a>
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
                                         <li><a target="_blank" href="https://www.facebook.com/AssessmentsandSignaturePrograms"><i className="fa fa-facebook"></i></a></li>
                                         <li><a target="_blank" href="https://www.linkedin.com/company/byld-assessments-signature-programs/"><i className="fa fa-linkedin"></i></a></li>
                                         <li><a target="_blank" href="https://twitter.com/ByldAssessments"><i className="fa fa-twitter"></i></a></li>
                                         <li><a target="_blank" href="https://www.youtube.com/channel/UCKn4hSzswvSO6-IqAZC1JtA"><i className="fa fa-youtube"></i></a></li>                                         
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
                                        <img src="/assets/img/ed-lg.png" alt="logo"/>  
                                    </a>
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="rs-menu-area">
                                    <div className="main-menu">
                                        <nav className="rs-menu hidden-md">
                                            <ul className="nav-menu">
                                                <li>
                                                    <a href="/">Home</a>                                                    
                                                </li>
                                                
                                                <li className="menu-item-has-children">
                                                    <a href="/solutions">Our Solutions</a>
                                                    <ul className="sub-menu">
                                                        <li><a href="/solutions/everything-disc-agile-eq">Everything DiSC Agile EQ</a></li>
                                                        <li><a href="/solutions/everything-disc-sales">Everything DiSC Sales</a></li>
                                                        <li><a href="/solutions/everything-disc-363-for-leaders">Everything DiSC 363 for Leaders</a></li>
                                                        <li><a href="/solutions/everything-disc-productive-conflict">Everything DiSC Productive Conflict</a></li>
                                                        <li><a href="/solutions/workplace">Everything DiSC Workplace</a></li>
                                                        <li><a href="/solutions/everything-disc-work-of-leaders">Everything DiSC Work Of Leaders</a></li>
                                                        <li><a href="/solutions/everything-disc-management">Everything DiSC Management</a></li>
                                                        <li><a href="/solutions/everything-disc-workplace-on-catalyst">Everything DiSC Workplace on Catalyst</a></li>
                                                    </ul>
                                                </li>
                                                <li>
                                                    <a href="/blog">Blog</a>
                                                </li>
                                                <li>
                                                    <a href="/contact-us">Contact Us</a>
                                                </li>
                                            </ul> 
                                        </nav>
                                    </div> 
                                </div>
                            </div>
                            <div className="col-cell">
                                <div className="expand-btn-inner">
                                    <ul>
                                        <li className="humburger">
                                            <a id="nav-expander" className="nav-expander bar" href="#">
                                                <div className="bar">
                                                    <span className="dot1"></span>
                                                    <span className="dot2"></span>
                                                    <span className="dot3"></span>
                                                    <span className="dot4"></span>
                                                    <span className="dot5"></span>
                                                    <span className="dot6"></span>
                                                    <span className="dot7"></span>
                                                    <span className="dot8"></span>
                                                    <span className="dot9"></span>
                                                </div>
                                            </a>
                                        </li>
                                    </ul>
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
                    <div className="canvas-logo">
                        <a href="index.html"><img src="/assets/img/ed-lg.png" alt="logo"/></a>
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
                        <ul className="social">
                            <li><a target="_blank" href="https://www.facebook.com/BYLDGroup"><i className="fa fa-facebook"></i></a></li>
                            <li><a target="_blank" href="https://www.linkedin.com/company/byld-group/"><i className="fa fa-linkedin"></i></a></li>
                            <li><a target="_blank" href="https://twitter.com/BYLDGroup"><i className="fa fa-twitter"></i></a></li>
                            <li><a target="_blank" href="https://www.youtube.com/channel/UC7kOBtc5uLtODiuTYvqgS4g"><i className="fa fa-youtube"></i></a></li>
                            <li><a target="_blank" href="https://www.instagram.com/byld_group/"><i className="fa fa-instagram"></i></a></li>
                        </ul>
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
                            <a href="/">Home</a>
                        </li>                       
                        <li className="menu-item-has-children">
                            <a href="#">Our Solutions</a>
                            <ul className="sub-menu">
                               <li><a href="#">Personal Development</a></li>
                               <li><a href="#">Team Development</a></li>
                               <li><a href="#">The Five Behaviors for Virtual Teams</a></li>
                            </ul>
                        </li>
                        <li>
                            <a href="#">Blog</a>
                        </li>
                        <li>
                            <a href="#">Contact Us</a>
                        </li>
                        
                    </ul>                    
                </nav>
            
            </header>
          
        </div>
    </>
  )
}
