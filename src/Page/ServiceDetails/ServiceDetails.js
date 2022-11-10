import React, { useEffect, useState } from 'react';
import { Link, useParams } from 'react-router-dom';
import './ServiceDetails.css';
import { ArrowRightIcon } from '@heroicons/react/24/solid'

const ServiceDetails = () => {
    const { serviceId } = useParams();
    const [detail, setDetail] = useState([]);
    useEffect(() => {
        fetch('/serviceData.json')
            .then(res => res.json())
            .then(data => setDetail(data))
    }, [])

    const find = detail.find(item => item?.id == serviceId)
    console.log(find?.name)

    return (
        <div>
            <div className='d-banner d-flex justify-content-center align-items-center'>
                <div>
                    <p className=' fs-5 fw-bold text-primary'> <Link to='/home' className='text-decoration-none  fs-5 fw-bold'>Home</Link> <ArrowRightIcon style={{ color: 'white', height: '20px' }} /> Details </p>
                </div>
            </div>

            <div className='my-5 gellay row g-0'>

                <div className='col-lg-4 col-md-6'>
                    <img src={find?.Image1} className='img-fluid' alt="" />
                    <img src={find?.Image2} className='img-fluid' alt="" />
                </div>

                <div className='col-lg-4 col-md-6'>
                    <img src={find?.Image3} className='img-fluid' alt="" />
                    <img src={find?.Image4} className='img-fluid' alt="" />
                </div>

                <div className='col-lg-4 col-md-6'>
                    <img src={find?.Image5} className='img-fluid' alt="" />
                    <img src={find?.Image6} className='img-fluid' alt="" />
                </div>

            </div>

        </div>
    );
};

export default ServiceDetails;