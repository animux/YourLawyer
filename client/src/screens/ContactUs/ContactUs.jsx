function ContactUs() {
    return (
        <div className="contact-us">
            <div className="container">
                <div className="title">
                    <h1 className="title mt-3">Contact Us</h1>
                </div>

                <h2>Contact:</h2>
                <p>Bangladesh: (+880) 1550076875</p>

                <h2>Email:</h2>
                <p>help.yourlawyer@gmail.com</p>

                <h2>Address</h2>
                <p>Registered Address: Singapore, Singapore 068895 (HQ)</p>
                <p>Bangladesh Address: 326 West Palashbagh Rampura</p>
                <div className="mapouter"><div className="gmap_canvas"><iframe width={600} height={500} id="gmap_canvas" src="https://maps.google.com/maps?q=326%20West%20Palashbagh%20Rampura&t=&z=13&ie=UTF8&iwloc=&output=embed" frameBorder={0} scrolling="no" marginHeight={0} marginWidth={0} /><a href="https://www.whatismyip-address.com" /><br /><style dangerouslySetInnerHTML={{__html: ".mapouter{position:relative;text-align:right;height:500px;width:600px;}" }} /><a href="https://www.embedgooglemap.net">embedgooglemap.net</a><style dangerouslySetInnerHTML={{__html: ".gmap_canvas {overflow:hidden;background:none!important;height:500px;width:600px;}" }} /></div></div>
               
            </div>
        </div>
    )
}

export default ContactUs;