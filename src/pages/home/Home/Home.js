import React from 'react';
import AdvertizeSection from '../AdvertizeSection/AdvertizeSection';

import Category from '../Category/Category';
import HeroArea from '../HeroArea/HeroArea';
import UsedMobiles from '../UsedMobiles/UsedMobiles';
// import UsedMobiles from '../UsedMobiles/UsedMobiles';

const Home = () => {
    return (
        <div>
            <div>

            </div>
            <div>
                <HeroArea></HeroArea>
                <hr className='my-36' />
                <Category></Category>
                <hr className='my-36' />
                <AdvertizeSection></AdvertizeSection>
            </div>
        </div>
    );
};

export default Home;