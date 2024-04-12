import React from "react";
import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaPhoneAlt } from "react-icons/fa";
import { FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <div className="container-fluid footer text-white mt-5 pt-5 px-0 position-relative overlay-top">
    <div className="row mx-0 pt-5 px-sm-3 px-lg-5 mt-4">
        <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Get In Touch</h4>
            <p><FaMapMarkerAlt/>123 Street, New York, USA</p>
            <p><FaPhoneAlt/>+012 345 67890</p>
            <p className="m-0"><FaEnvelope/>info@example.com</p>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Follow Us</h4>
            <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
            <div className="d-flex justify-content-start">
                <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><FaTwitter /></a>
                <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><FaFacebookF /></a>
                <a className="btn btn-lg btn-outline-light btn-lg-square mr-2" href="#"><FaLinkedinIn /></a>
                <a className="btn btn-lg btn-outline-light btn-lg-square" href="#"><FaInstagram /></a>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Open Hours</h4>
            <div>
                <h6 className="text-white text-uppercase">Monday - Friday</h6>
                <p>8.00 AM - 8.00 PM</p>
                <h6 className="text-white text-uppercase">Saturday - Sunday</h6>
                <p>2.00 PM - 8.00 PM</p>
            </div>
        </div>
        <div className="col-lg-3 col-md-6 mb-5">
            <h4 className="text-white text-uppercase mb-4" style={{letterSpacing: "3px"}}>Newsletter</h4>
            <p>Amet elitr vero magna sed ipsum sit kasd sea elitr lorem rebum</p>
            <div className="w-100">
                <div className="input-group">
                    <input type="text" className="form-control border-light" style={{padding: "25px"}} placeholder="Your Email"/>
                    <div className="input-group-append">
                        <button className="btn btn-primary font-weight-bold px-3">Sign Up</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div className="container-fluid text-center text-white border-top mt-4 py-4 px-sm-3 px-md-5" style={{borderColor: "rgba(256, 256, 256, .1) !important"}}>
        <p className="mb-2 text-white">Copyright &copy; <a className="font-weight-bold" href="#">Domain</a>. All Rights Reserved.</p>
        <p className="m-0 text-white">Designed by <a className="font-weight-bold" href="https://htmlcodex.com">HTML Codex</a></p>
    </div>
</div>
  )
}

export default Footer;
