import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu} from 'antd';
import styled from 'styled-components';
import Logo from '../pages/public/images/PocketVaccineLogo.png';

const LogoWrapper = styled.div`
    text-align: center;
`;

const MenuWrapper = styled.div`
    text-align: center;
`;

const ContentWrapper = styled.div`
    text-align: center;
    margin: 20px 10px 0 0;
`;

const AppLayout = ({ children }) => {
    return(
        <div>
            <LogoWrapper>
                <img src={Logo} alt="logo" width="400px" height="60" style={{padding:'20px 0 0 30px'}}/>
            </LogoWrapper>
            <MenuWrapper>
                <Menu mode="horizontal" style={{display:'inline-block'}} inlineindent="24">
                    <Menu.Item>
                        <Link href="/"><a>커뮤니티</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/vaccinegraph"><a>살펴보기</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/vaccinestatus"><a>접종현황</a></Link>
                    </Menu.Item>
                    <Menu.Item>
                        <Link href="/mypage"><a>마이</a></Link>
                    </Menu.Item>
                </Menu>
            </MenuWrapper>
            <ContentWrapper>
                {children}
            </ContentWrapper>
        </div>
    );
}

AppLayout.proTypes = {
    children : PropTypes.node.isRequired,
}

export default AppLayout;