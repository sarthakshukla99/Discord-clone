import React from "react";

const Controls = () => {
    return (
        <div className="discord_controls_section mt-3">
            <div className="dis_info">
                <div className="discord_icon position-relative">
                    <i className="fa-brands fa-discord"></i>
                    <div className="online position-absolute"></div>
                </div>
                <div className="channel_name d-flex flex-column">
                    Kubit
                    <small>#1234</small>
                </div>
            </div>

            <div className="controls">
                <i className="fa-solid fa-microphone-lines-slash"></i>
                <i className="fa-solid fa-headphones"></i>
                <i className="fa-solid fa-gear"></i>
            </div>
        </div>
    );
};

export default Controls;
