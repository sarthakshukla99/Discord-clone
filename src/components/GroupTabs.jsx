import React from "react";

const GroupTabs = ({tabName, setIsGrey, isGrey, tabVal, icon}) => {
    return (
        <>
            <div className="group_tabs">
                <div
                    className={`friends d-flex align-items-center ${
                        isGrey === tabVal && "bg-grey"
                    }`}
                    onClick={() => setIsGrey(tabVal)}
                >
                    <i className={icon}></i>
                    <div>{tabName}</div>
                </div>
            </div>
        </>
    );
};

export default GroupTabs;
