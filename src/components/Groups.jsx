import React from "react";
import "./icons.scss";
import GroupName from "./GroupName";
import Icons from "./Icons";

const Groups = () => {
    return (
        <div className="group_sidebar d-flex">
            <aside className="icons">
                <div className="icons_wrapper">
                    <Icons
                        icon="fa-brands fa-discord"
                        style={{backgroundColor:"#595aef", fontSize: '27px'}}
                    />
                    <Icons
                        icon={"fa-solid fa-user-group"}
                        count={200}
                        filter={{filter: "invert(1)"}}
                        style={{backgroundColor:"lightGreen"}}
                    />
                    <Icons
                        // url="https://img.icons8.com/ios-filled/50/null/contacts.png"
                        name='KL'
                        count={40}
                        filter={{filter: "invert(1)"}}
                        style={{backgroundColor:"lightBlue"}}
                    />
                    <Icons
                        icon={"fa-solid fa-user-group"}
                        count={24}
                        filter={{filter: "invert(1)"}}
                        style={{backgroundColor:"lightCoral"}}
                    />
                    <Icons
                        icon={"fa-solid fa-user-group"}
                        count={32}
                        filter={{filter: "invert(1)"}}
                        style={{backgroundColor:"lightGrey"}}
                    />
                    <Icons
                        name='AJ'
                        count={65}
                        filter={{filter: "invert(1)"}}
                        style={{backgroundColor:"gray"}}
                    />
                    <Icons
                        name="SA"
                        count={98}
                        filter={{filter: "invert(1)"}}
                        style={{backgroundColor:"gray"}}
                    />
                    <Icons
                        icon={"fa-solid fa-user-group"}
                        count={49}
                        filter={{filter: "invert(1)"}}
                        style={{backgroundColor:"lightPink"}}
                    />
                </div>

                <div className="add mt-3 me-2 text-center">
                    <button className="add_btn">
                        <h2 className="mb-1">+</h2>
                    </button>
                    <button className="add_btn mt-3">
                        <i className="fa-solid fa-compass"></i>
                    </button>
                </div>
            </aside>

            <aside>
                <GroupName/>
            </aside>
        </div>
    );
};

export default Groups;
