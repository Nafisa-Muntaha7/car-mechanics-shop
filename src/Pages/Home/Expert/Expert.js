import React from 'react';

const Expert = ({ expert }) => {
    const { name, img, expertize } = expert;
    return (
        <div className="col-lg-4 col-md-6 col-sm-6 col-12 my-3">
            <img className="w-75 rounded-3 m-2" src={img} alt="" />
            <h3>{name}</h3>
            <h4 className="text-success">{expertize}</h4>
        </div>
    );
};

export default Expert;