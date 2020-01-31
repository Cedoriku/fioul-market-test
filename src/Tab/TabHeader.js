import React from "react";
import styled from 'styled-components';

const HeaderTab = styled.button`
    padding: 1em;
    border: 0;
    cursor: pointer;
    background-color: #f2f2f2;
    color: #9b9b9b;
    flex-grow: 1;
    &.active {
        background-color: #FFF;
        color: #60b4bc;
    }
`;

const TabHeader = ({ filter, currentTab, setTab, children }) => {
    const setFilter = () => {
        setTab(filter)
    };

    return <HeaderTab onClick={setFilter} className={`${filter === currentTab ? 'active' : ''}`}>{ children }</HeaderTab>
};

export default TabHeader;