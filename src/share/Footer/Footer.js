import React from 'react';

const Footer = () => {
    return (
        <div>
            <footer className="footer p-10 bg-neutral text-neutral-content mt-20">
                <div>
                    <span className="footer-title">Services</span>
                    <a href="/" className="link link-hover">Mobile Adds</a>
                    <a href="/" className="link link-hover">Tablet Adds</a>
                    <a href="/" className="link link-hover">Company Adds</a>
                    <a href="/" className="link link-hover">Business Adds</a>
                </div>
                <div>
                    <span className="footer-title">Company</span>
                    <a href="/" className="link link-hover">About US</a>
                    <a href="/" className="link link-hover">Contact US</a>
                    <a href="/" className="link link-hover">Facebook Page</a>
                    <a href="/" className="link link-hover">Instagram Page</a>
                </div>
                <div>
                    <span className="footer-title">Legal</span>
                    <a href="/" className="link link-hover">Terms of use</a>
                    <a href="/" className="link link-hover">Privacy policy</a>
                    <a href="/" className="link link-hover">Cookie policy</a>
                </div>
            </footer>
            <div className='lg:mt-20 mt-10 mb-5'>
                <p className='text-center text-gray-400'>Copyright By <span className='text-purple-500 font-semibold'>MD Nurul Amin</span> || <span className='text-purple-500 font-semibold'>11-2022</span></p>
            </div>
        </div>
    );
};

export default Footer;