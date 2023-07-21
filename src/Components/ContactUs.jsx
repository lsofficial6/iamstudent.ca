import React from "react";


const ContactUs=()=>{
    return(
        
<div id="contact" className=" mb-5 mt-5 pt-3 bg-light" data-aos="zoom-in">
	<div className="container">										
		<div className="section-title text-center">
			<h1>Get in Touch</h1>
			<p>Drop your query and Feedback Here.</p>
		</div>					
		<div className="row g-2">
			<div className="col-lg-7">	
				<div className="contact">
					<form className="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
						<div className="row g-2">
							<div className="form-group col-md-6">
								<input type="text" name="name" className=" border-bottom border-end form-control" placeholder="Name" required="required"/>
							</div>
							<div className="form-group col-md-6">
								<input type="email" name="email" className=" border-bottom border-end form-control" placeholder="Email" required="required"/>
							</div>
							<div className="form-group col-md-12">
								<input type="text" name="subject" className=" border-bottom border-end form-control" placeholder="Subject" required="required"/>
							</div>
							<div className="form-group col-md-12">
								<textarea rows="6" name="message" className=" border-bottom border-end form-control" placeholder="Your Message" required="required"></textarea>
							</div>
							<div className="col-md-12 text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			<div className="col-lg-5">
				<div className="single_address">
					<i className="fa fa-map-marker"></i>
					<h4>Our Address</h4>
					<p>3481 Jacob Street , Beverly Hills</p>
				</div>
				<div className="single_address">
					<i className="fa fa-envelope"></i>
					<h4  className="pb-1">Send your message</h4>
					<a href="mailto:primexx00@gmail.com">Info@iamstudent.CA</a><br></br>
					<a href="mailto:primexx00@gmail.com">help.care@iamstudent.CA</a>
				</div>
				<div className="single_address">
					<i className="fa fa-phone"></i>
					<h4 className="pb-1">Call us on</h4>
					<a href="tel:+918196001530">(+1) 517 397 7100</a>
				</div>
				<div className="single_address">
				<i className="fa fa-clock-o" aria-hidden="true"></i>
					<h4>Work Time</h4>
					<p>Mon - Fri: 08.00 - 16.00. <br/>Sat: 10.00 - 14.00</p>
				</div>					
			</div>
		</div>
	</div>
</div>
    )
};



export default ContactUs;