import React, { useState } from 'react';
import WaMSN from "../../../assets/images/icon/whatappoo.png"
import './logo.css'; 
const ButtonWa = () => {
    const [isHovering, setIsHovering] = useState(false);

    const handleClick = () => {
        const number = '919373847083';
        const text = 'Sharada Productions & Media Management';
        const url = `https://wa.me/${number}?text=${encodeURIComponent(text)}`;
        window.open(url, '_blank');
    };

    return (
        <button
            onClick={handleClick}
            className="fixed z-10 bottom-2 right-2"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => setIsHovering(false)}
        >
            <div className="relative">
                {isHovering && (
                    <div className="absolute px-2 py-1 text-black bg-white rounded-md shadow-lg -top-2 right-100">
                        Somesh Panchal
                    </div>
                )}
                <img 
                    src={WaMSN}
                    alt="WhatsApp Sharada Productions & Media Management"
                    className="sm:w-50 w-36"
                />
            </div>
        </button>
    );
};

export default ButtonWa;
