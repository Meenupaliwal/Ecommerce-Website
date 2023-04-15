import React from 'react'

function contact() {
  return (
<>
<section className="banner_area">
      <div className="banner_inner d-flex align-items-center">
        <div className="container">
          <div
            className="banner_content d-md-flex justify-content-between align-items-center"
          >
            <div className="mb-3 mb-md-0">
              <h2>Contact Us</h2>
              <p>Very us move be blessed multiply night</p>
            </div>
            <div className="page_link">
              <a href="index.html">Home</a>
              <a href="contact.html">Contact Us</a>
            </div>
          </div>
        </div>
      </div>
    </section>
    <section className="section_gap">
    <div className="container">
      <div className="d-none d-sm-block mb-5 pb-4">
        
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d52887.34433076725!2d-118.12336703585123!3d34.05774562740733!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x80c2d071ead0ae9f%3A0xec7b5ef82544d465!2sRosemead%2C%20CA%2091770%2C%20USA!5e0!3m2!1sen!2sin!4v1681574166832!5m2!1sen!2sin" width="100%" height="450" style={{border:"0"}} allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>

      </div>


      <div className="row">
        <div className="col-12">
          <h2 className="contact-title">Get in Touch</h2>
        </div>
        <div className="col-lg-8 mb-4 mb-lg-0">
          <form className="form-contact contact_form" action="https://themewagon.github.io/eiser/contact_process.php" method="post" id="contactForm" novalidate="novalidate">
            <div className="row">
              <div className="col-12">
                <div className="form-group">
                    <textarea className="form-control w-100" name="message" id="message" cols="30" rows="9" placeholder="Enter Message"></textarea>
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="name" id="name" type="text" placeholder="Enter your name" />
                </div>
              </div>
              <div className="col-sm-6">
                <div className="form-group">
                  <input className="form-control" name="email" id="email" type="email" placeholder="Enter email address" /> 
                </div>
              </div>
              <div className="col-12">
                <div className="form-group">
                  <input className="form-control" name="subject" id="subject" type="text" placeholder="Enter Subject" />
                </div>
              </div>
            </div>
            <div className="form-group mt-lg-3">
              <button type="submit" className="main_btn">Send Message</button>
            </div>
          </form>


        </div>

        <div className="col-lg-4">
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-home"></i></span>
            <div className="media-body">
              <h3>Buttonwood, California.</h3>
              <p>Rosemead, CA 91770</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-tablet"></i></span>
            <div className="media-body">
              <h3><a href="tel:454545654">00 (440) 9865 562</a></h3>
              <p>Mon to Fri 9am to 6pm</p>
            </div>
          </div>
          <div className="media contact-info">
            <span className="contact-info__icon"><i className="ti-email"></i></span>
            <div className="media-body">
              <h3><a href="mailto:support@colorlib.com">support@colorlib.com</a></h3>
              <p>Send us your query anytime!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</>
  )
}

export default contact
