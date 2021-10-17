import React from 'react';

const Service = (props) => {
    const { name, price, time, description, img } = props.service;
    return (
        <div className="m-5 p-2 bg-info bg-opacity-25 rounded-3">
            <img className="w-75 img-fluid m-3 rounded-3" src={img} alt="" />
            <h2 className="fw-bold">{name}</h2>
            <h4>Price:{price}, Time duration needed:{time} hours</h4>
            <h5>{description}</h5>
        </div>
    );
};

export default Service;