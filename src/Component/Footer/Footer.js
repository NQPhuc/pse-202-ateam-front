import "./Footer.css";
import React from 'react';

export default function FooterComponent() {
    return (
            <footer className="rc-footer rc-footer-light">
                <section className="rc-footer-container">
                    <section className="rc-footer-columns">
                        <iframe className="rc-footer-column-iframe"
                                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.4946681007837!2d106.65843061488522!3d10.773374292323636!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752ec3c161a3fb%3A0xef77cd47a1cc691e!2sHo%20Chi%20Minh%20City%20University%20of%20Technology!5e0!3m2!1sen!2s!4v1622024536551!5m2!1sen!2s"
                                width="300" height="300"  allowFullScreen="" loading="lazy"/>
                        <div className="rc-footer-column">
                            <h2>Learn More</h2>
                            <div className="rc-footer-item"><a href="#">About Us</a></div>
                            <div className="rc-footer-item"><a href="#">Privacy Policy</a></div>
                            <div className="rc-footer-item"><a href="#">Jobs</a></div>
                        </div>
                        <div className="rc-footer-column">
                            <h2>Product Brands</h2>
                            <div className="rc-footer-item"><a href="https://www.gucci.com" target="_blank"
                                                               rel="noopener noreferrer">Gucci</a></div>
                            <div className="rc-footer-item"><a href="https://www.nike.com" target="_blank"
                                                               rel="noopener noreferrer">Nike</a></div>
                            <div className="rc-footer-item"><a href="https://us.puma.com" target="_blank"
                                                               rel="noopener noreferrer">Puma</a></div>
                        </div>
                        <div className="rc-footer-column">
                            <h2>Contact Us</h2>
                            <div className="rc-footer-item"><a>Phone Number : +84 123456789</a></div>
                            <div className="rc-footer-item"><a>Email : MeoMeo@gmail.com</a></div>
                        </div>
                        <div className="rc-footer-column">
                            <h2>Social</h2>
                            <div className="rc-footer-item">
                                <a href="https://www.facebook.com"
                                   target="_blank"
                                   rel="noopener noreferrer"><span className="rc-footer-item-icon"><img
                                    src="https://d1wl5wkwpkr66u.cloudfront.net/facebook-circular-logo.png"
                                    alt="Facebook"/></span>Facebook Page</a></div>
                            <div className="rc-footer-item"><a href="https://www.instagram.com/" target="_blank"
                                                               rel="noopener noreferrer">
                                <span className="rc-footer-item-icon">
                                <img
                                    src="https://d1wl5wkwpkr66u.cloudfront.net/instagram.png" alt="Instagram"/>
                                </span>Instagram
                                Page</a></div>
                        </div>
                    </section>
                </section>
                <section className="rc-footer-bottom">
                    <div className="rc-footer-bottom-container">copyright © A_TEAM | All Right Reserved</div>
                </section>
            </footer>
);
}

