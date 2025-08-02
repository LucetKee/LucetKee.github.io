import React, { useState } from "react";
import "./ServiceItem.css";

const ServiceItem = ({ icon, title, description }) => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div
            className={`service-item ${isOpen ? "open" : ""}`}
            onClick={() => setIsOpen(!isOpen)}
        >
            <div className="service-header">
                <div className="left">
                    <span className="icon">{icon}</span>
                    <span className="title">{title}</span>
                </div>
                <span className={`arrow ${isOpen ? "rotated" : ""}`}>&#9654;</span>
            </div>
            <div className={`service-description ${isOpen ? "visible" : ""}`}>
                {description}
            </div>
        </div>
    );
};

export default ServiceItem;
