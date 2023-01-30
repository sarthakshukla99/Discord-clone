import React, { useState } from "react";

const GroupInfo = ({ count, name, members, isSelected, setIsSelected ,  ...restprops }) => {
    


    return (
        <div className={`group_info_container mb-2  ${isSelected === name && "bg-grey" } `}
        onClick={() => setIsSelected(name)} >

            <div className="gi_icon d-flex justify-content-center align-items-center" {...restprops} >
                <i className="fa-solid fa-user-group"></i>
            </div>

            <div className="gi_name d-flex flex-column">
                {name}
                <small>{members && members + " members"} </small>
            </div>

        </div>
    );
};

export default GroupInfo;
