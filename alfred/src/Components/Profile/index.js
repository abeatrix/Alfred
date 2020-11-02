import React from "react";
import {PageContainer, PageWrapper, PortSideBarContainer, PortNotSideBarContainer} from '../Portfolio/PortfolioElements'
import {Chatroom} from '../chatbox/index'
import SearchContainer from '../SearchContainer/SearchContainer'


class Profile extends React.Component {
    state = {

    }
    render() {
        return (
        <div>

            <PageContainer>
                <PageWrapper>
                    <PortSideBarContainer>
                        <SearchContainer/>
                        <Chatroom />
                    </PortSideBarContainer>


                    <PortNotSideBarContainer>

                    </PortNotSideBarContainer>
                </PageWrapper>
            </PageContainer>

        </div>
    );
    }
}

export default Profile;
