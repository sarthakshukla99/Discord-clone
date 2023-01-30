import React from "react";

const Icons = ({ icon, count, filter, name, ...restprops }) => {
    return (
        <div
            className="icon_bg mt-3 ms-3 d-flex justify-content-center align-items-center position-relative"
            {...restprops}
        >
            {icon && <i className={icon}></i>}
            {name && <h3>{name}</h3>}
            <p className="position-absolute">{count}</p>
        </div>
    );
};

export default Icons;
