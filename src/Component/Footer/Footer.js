import "./Footer.css";
import React from 'react';
import Footer from 'rc-footer';
import FacebookIcon from '@material-ui/icons/Facebook';
import InstagramIcon from '@material-ui/icons/Instagram';


export default function FooterComponent() {
    return (
        <div>
            <Footer
                backgroundColor={"#fff"}
                theme={"light"}
                columns={[
                    {
                        title: 'Learn More',
                        items: [
                            {
                                title: 'About Us',
                                url: '#',
                            },
                            {
                                title: 'Privacy Policy',
                                url: '#',
                            },
                            {
                                title: 'Jobs',
                                url: '#',
                            },
                        ]
                    },
                    {
                        title: 'Product Brands',
                        items: [
                            {
                                title: 'Gucci',
                                url: 'https://www.gucci.com',
                                openExternal: true,
                            },
                            {
                                title: 'Nike',
                                url: 'https://www.nike.com',
                                openExternal: true,
                            },
                            {
                                title: 'Puma',
                                url: 'https://us.puma.com',
                                openExternal: true,
                            }
                        ]
                    },
                    {
                        title: 'Contact Us',
                        items: [
                            {
                                title: 'Phone Number : +84 123456789',
                            },
                            {
                                title: 'Email : MeoMeo@gmail.com',
                            }
                        ]
                    },
                    {
                        title: 'Social',
                        items:
                            [
                                {
                                    title: "Facebook Page",
                                    icon : (
                                        <img
                                            src="https://d1wl5wkwpkr66u.cloudfront.net/facebook-circular-logo.png"
                                            alt="Facebook"/>),
                                    url: "https://www.facebook.com",
                                    openExternal: true,
                                },
                                {
                                    title: "Instagram Page",
                                    icon : (
                                        <img
                                            src="https://d1wl5wkwpkr66u.cloudfront.net/instagram.png"
                                            alt="Instagram"
                                        />
                                    ),
                                    url: "https://www.instagram.com/",
                                    openExternal: true,
                                }
                            ]
                    }
                ]}
                bottom="copyright © A_TEAM | All Right Reserved"
            />
        </div>
    );
}

