import React from "react";


const EnquireNow=()=>{
    return(
        
<div id="contact" className=" mb-5 mt-5 pt-3 bg-light px-auto" data-aos="zoom-in">
	<div className="container p-2 my-5  d-flex flex-wrap align-items-center justify-content-center ">										
		<div className="section-title text-center  text-primary col-lg-7 mx-auto">
			<h1>Enquire Now</h1>
			<p>Drop your enquiry here we will get you back soon</p>
		</div>					
		<div className="row g-2">
			<div className="col-lg-7 mx-auto">	
				<div className="contact">
					<form className="form" name="enq" method="post" action="contact.php" onsubmit="return validation();">
						<div className="row g-2">
							<div className="form-group col-md-6">
								<input type="text" name="name" className=" border-bottom border-end form-control" placeholder="Name" required="required"/>
							</div>
							<div className="form-group col-md-6">
								<input type="email" name="email" className=" border-bottom border-end form-control" placeholder="Email" required="required"/>
							</div>
							<div className="form-group col-md-6">
								<input type="text" name="subject" className=" border-bottom border-end form-control" placeholder="Subject" required="required"/>
							</div>
              <div className="form-group col-md-6">
								<input type="number" name="number" className=" border-bottom border-end form-control" placeholder="Contact Number" required="required"/>
							</div>
							<div className="form-group col-md-12">
								<textarea rows="6" name="message" className=" border-bottom border-end form-control" placeholder="Your Message" required="required"></textarea>
							</div>
							<div className="col-md-10 mx-auto text-center">
								<button type="submit" value="Send message" name="submit" id="submitButton" className="btn btn-contact-bg" title="Submit Your Message!">Send Message</button>
							</div>
						</div>
					</form>
				</div>
			</div>
			
		</div>
	</div>
</div>
    )
};



export default EnquireNow;