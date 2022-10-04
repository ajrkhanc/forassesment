import Head from 'next/head'

export default function Blog(){
    return(
        <>
        <Head>
            <title>Contact Us - Five Behaviors</title>
            <meta name="description" content="CONTACT US Contact Us 1800-102-1345 Email Us assessments.info@byldgroup.com Address Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, Sector – 48, Gurgaon – 122018, Haryana(India) We are available between 9am – 6pm from Monday to Friday. Important Links Home Contact Us Our Solutions The Five Behaviors™ Personal Development Contact Us Unit No. 629-634, 6th […]"/> 
        </Head>
        <div className="contactusbg">
        <div className='container'>
              <div className='row'>
                <div className='col-sm-12'>
                  <div className='pagetitle text-left'>
                    <h1>Contact Us</h1>
                  </div>
                </div>
              </div>
            </div>
            </div>

            <div className="rs-services style1 reverse">
                <div className="container">
                    <div className="row service-wrap mr-0 ml-0">
                        <div className="col-lg-4 padding-0">
                            <div className="service-grid">
                                <div className="service-icon mb-23">
                                    <img src="/assets/img/icon/call.png" alt=""/>
                                </div>
                                <h4 className="title mb-18 font20 contacticonh">Contact Us</h4>
                                <div className="desc mb-12">
                                    <a href="tel:1800-102-1345">1800-102-1345</a><br></br>                                    
                                </div>
                            </div>
                        </div>
                        <div className="col-lg-4 padding-0">
                            <div className="service-grid">
                                <div className="service-icon mb-23">
                                <img src="/assets/img/icon/email.png" alt=""/>
                                </div>
                                <h4 className="title mb-18 font20 contacticonh">Need support? Drop us an email</h4>
                                <div className="desc mb-12">
                                    <a href="mailto:assessments.info@byldgroup.com">assessments.info@byldgroup.com</a>
                                </div>
                                
                            </div>
                        </div>
                        <div className="col-lg-4 padding-0">
                            <div className="service-grid br-none bdru">
                                <div className="service-icon mb-23">
                                <img src="/assets/img/icon/map.png" alt=""/>
                                </div>
                                <h4 className="title mb-18 font20 contacticonh">Reach out to us!</h4>
                                <div className="desc mb-12">
                                Unit No. 629-634, 6th Floor, Vipul Trade Centre, Sohna Road, Sector -48, Gurgaon – 122018, Haryana (India).
                                </div>                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="rs-testimonial style4 bg16 ptt-30 pbb-70">
                <div className="container">                   
                    <div className="row">                    
                         <div className="col-sm-12">
                            <div className="sec-title3 mbb-35 text-center">
                                <span className="colorw font20">GET IN TOUCH</span>
                                <h4 className="countertoph2 text-center colorw font30">FILL THE FORM BELOW</h4>
                                <div className="heading-border-line center-style"></div>
                            </div>
                         </div>
                         <div className="clearfix"></div>
                         {/* <div className="col-sm-1"></div> */}
                         <div className="col-sm-7">
                         <div className="bannerform">
                            <form id="contact-form" className='clientcornner ptt-40 pbb-20'>                                         
                                    <div className="row">
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="name" placeholder="Enter Name*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="email" name="email" placeholder="Enter Email*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="phone" maxlength="10" minlength="10" pattern="[0-9]*" placeholder="Phone No.*" required />
                                        </div> 
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="Location" placeholder="Location*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="organization" placeholder="Organization*" required />
                                        </div>
                                        <div className="col-sm-6 mb-12">
                                            <input type="text" name="designation" placeholder="Designation*" required />
                                        </div>
                                       
                                        <div className="col-sm-12 mb-12">
                                            <select name="referredby" required>
                                                <option value="">Referred By</option>
                                                <option value="Email">Email</option>
                                                <option value="Social Media">Social Media</option>
                                                <option value="Google Search">Google Search</option>
                                                <option value="Website">Website</option>
                                                <option value="Reference">Reference</option>
                                                <option value="Sales Representative">Sales Representative</option>
                                            </select>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                            <textarea className="from-control" name="leadsquared-Notes" placeholder="Let us know what you are looking for."></textarea>
                                        </div>
                                        <div className="col-lg-12 mb-12">
                                        <input className="clientcornnerbtn" type="submit" value="Submit"/>
                                        </div>
                                    </div>                                                                         
                            </form>                                  
                            </div>
                         </div>
                         <div className="col-sm-5">
                         <div className="cmap">
                            <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14037.642076595946!2d77.0416708!3d28.4068673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x784abf10032f4ea1!2sBYLD%20Group%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1650816695732!5m2!1sen!2sin" width="100%" height="415" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                        </div>
                         </div>
                    </div>
                </div>
            </div>

            {/* <div className="container pbb-50 ptt-50">
                <div className="row">
                    <div className="col-sm-12">
                      <div className="cmap">
                          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14037.642076595946!2d77.0416708!3d28.4068673!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x784abf10032f4ea1!2sBYLD%20Group%20Pvt.%20Ltd.!5e0!3m2!1sen!2sin!4v1650816695732!5m2!1sen!2sin" width="100%" height="370" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
                      </div>
                    </div>
                </div>
            </div> */}
        </>
    )
}