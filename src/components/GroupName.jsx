import React, { useState } from "react";
import Controls from "./Controls";
import "./group.scss";
import GroupInfo from "./GroupInfo";
import GroupTabs from "./GroupTabs";

const GroupName = () => {
    const [isGrey, setIsGrey] = useState(1);

    const [isSelected, setIsSelected] = useState(null);
    

    return (
        <div className="group_name_container">
            <div className="main_wrapper">
                <div className="search ">
                    <input
                        type="text"
                        className="mt-4"
                        placeholder="Find or start a conversation"
                    />
                </div>

                <GroupTabs
                    tabName={"Friends"}
                    isGrey={isGrey}
                    setIsGrey={setIsGrey}
                    tabVal={1}
                    icon={"fa-solid fa-user-group"}
                />
                <GroupTabs
                    tabName={"Nitro"}
                    isGrey={isGrey}
                    setIsGrey={setIsGrey}
                    tabVal={2}
                    icon={"fa-solid fa-fire"}
                />
                <GroupTabs
                    tabName={"Message Requests"}
                    isGrey={isGrey}
                    setIsGrey={setIsGrey}
                    tabVal={3}
                    icon={"fa-solid fa-message"}
                />

                {/* ========= messages section ================ */}

                <div className="direct_msg_section ">
                    <div className="msg_head">
                        <div>DIRECT MESSAGES</div>
                        <i className="fa-solid fa-plus"></i>
                    </div>

                    <GroupInfo
                        name="Crypserve, Bearded Bro"
                        members={40}
                        style={{ backgroundColor: "green" }}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                    <GroupInfo
                        name="Bearded Bro"
                        // members={40}
                        style={{ backgroundColor: "orange" }}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                    <GroupInfo
                        name="NFT"
                        members={6}
                        style={{ backgroundColor: "blueviolet" }}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                    <GroupInfo
                        name="DEVELOPERS"
                        members={5}
                        style={{ backgroundColor: "brown" }}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                    <GroupInfo
                        name="Sad clown collective"
                        members={8}
                        style={{ backgroundColor: "tomato" }}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                    <GroupInfo
                        name="Heroes"
                        members={2}
                        style={{ backgroundColor: "navy" }}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                    <GroupInfo
                        name="Stock market"
                        members={16}
                        style={{ backgroundColor: "darkcyan" }}
                        isSelected={isSelected}
                        setIsSelected={setIsSelected}
                    />
                </div>



                <Controls/>


            </div>
        </div>
    );
};

export default GroupName;
