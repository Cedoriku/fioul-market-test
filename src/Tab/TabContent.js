import React from "react";

const TabContent = ({ filter, currentTab, children }) => {
    return (
        <>
            {filter === currentTab && children}
        </>
    )
};

export default TabContent;