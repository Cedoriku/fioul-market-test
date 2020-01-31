import React, { useState } from "react";
import { Login, RegistrationForm } from "../Form";
import {
    TabContainer,
    TabContent,
    TabHeader,
} from "./";
import './Tab.css';

import {
    LOGIN,
    REGISTER
} from "../Common/constants"

const TabComponent = () => {
    const [ tab, setTab ] = useState(LOGIN);

    return (
        <TabContainer>
            <div className="tab-header">
                <TabHeader filter={LOGIN} currentTab={tab} setTab={setTab}>J'ai un compte</TabHeader>
                <TabHeader filter={REGISTER} currentTab={tab} setTab={setTab}>Je n'ai pas de compte</TabHeader>
            </div>

            <div className="content">
                <TabContent filter={LOGIN} currentTab={tab}>
                    <Login />
                </TabContent>
                <TabContent filter={REGISTER} currentTab={tab}>
                    <RegistrationForm />
                </TabContent>
            </div>
        </TabContainer>
    )
};

export default TabComponent;