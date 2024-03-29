import React, { useEffect, useState } from 'react';
import Expert from '../Expert/Expert';

const Experts = () => {
    const [experts, setExperts] = useState([]);
    useEffect(() => {
        fetch('../../../../experts.json')
            .then(res => res.json())
            .then(data => setExperts(data))
    }, [])
    return (
        <div>
            <div className="container">
                <h2 className="text-primary">Our Experts</h2>
            </div>
            <div className="row">
                {
                    experts.map(expert => <Expert
                        key={expert.id} expert={expert}>
                    </Expert>)
                }
            </div>
        </div>
    );
};

export default Experts;