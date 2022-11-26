import React, { useEffect, useState } from 'react';
// import BookingModal from '../BookingModal/BookingModal';
// import UsedMobilesDetails from './UsedMobilesDetails';
import UsedMobilesDetails from '../UsedMobiles/UsedMobilesDetails';
import BookingModal from '../../BookingModal/BookingModal';

const UsedMobiles = () => {
    const [usedMobiles, setUsedMobiles] = useState([]);
    const [treatment, setTreatment] = useState(null);

    useEffect(() => {
        fetch(`usedMobiles.json`)
            .then(res => res.json())
            .then(data => setUsedMobiles(data))
    }, [])

    return (
        <section>
            <div className='grid lg:grid-cols-3 gap-7 mt-20'>
                {
                    usedMobiles?.map(mobile => <UsedMobilesDetails
                        key={mobile._id}
                        mobile={mobile}
                        setTreatment={setTreatment}
                    ></UsedMobilesDetails>)
                }
            </div>
            <div>
                {
                    treatment &&
                    <BookingModal
                        treatment={treatment}
                        setTreatment={setTreatment}
                    ></BookingModal>}
            </div>
        </section>
    );
};

export default UsedMobiles;