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
                                            src="https://www.flaticon.com/svg/vstatic/svg/20/20673.svg?token=exp=1620894552~hmac=e79cf0ba25e591af60c558916696bd30"
                                            alt="Facebook"/>),
                                    url: "https://www.facebook.com",
                                    openExternal: true,
                                },
                                {
                                    title: "Instagram Page",
                                    icon : (
                                        <img
                                            src="https://www.flaticon.com/svg/vstatic/svg/1419/1419647.svg?token=exp=1620894703~hmac=feefba724b8423ea3e753744912cf3a9"
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

