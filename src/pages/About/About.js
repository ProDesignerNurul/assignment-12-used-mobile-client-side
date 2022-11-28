import React from 'react';

const About = () => {
    return (
        <div>
            <div className="hero min-h-screen bg-base-200">
                <div className="hero-content flex-col lg:flex-row">
                    <div className='lg:w-1/2 p-5'>
                        <p>E-commerce sites such as eBay and Craigslist have greatly facilitated online secondhand shopping. The secondhand sales market value reached $7 billion in 2019 and is estimated to reach $36 billion by 2024 (approximately 39% annual growth rate; Thredup, 2020). Sellers are therefore interested in how to better present secondhand products online to facilitate consumer purchases, with narrative information describing product history being especially important (Kim et al., 2021). Kamleitner et al. (2019) showed that repurposed products’ narrative information describing their biographical stories increases demand because such information allows customers to feel special. Thus, understanding whether narrative information also plays an important role in the context of online secondhand shopping is relevant.</p>
                    </div>
                    <div className='lg:w-1/2 p-5'>
                        <h1 className="text-5xl font-bold">About US</h1>
                        <p className="py-6">Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda excepturi exercitationem quasi. In deleniti eaque aut repudiandae et a id nisi.</p>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Your Email</span>
                            </label>
                            <label className="input-group">
                                <span>Email</span>
                                <input type="text" placeholder="info@site.com" className="input input-bordered" />
                            </label>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;