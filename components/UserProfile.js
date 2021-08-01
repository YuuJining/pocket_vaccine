import React, { useCallback, useState } from 'react';
import { Card,Avatar,Button,Col } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';
import styled from 'styled-components';

const LogOutButton = styled(Button)`
    margin-top: 10px;
    margin-left: 10px;
`;

const UserProfile = ({ setIsLoggedIn }) => {
    const onLogOut = useCallback(()=> {
        setIsLoggedIn(false);
    })

    return(
        <Col span={4} offset={10}>
            <Card
                actions={[
                    <SettingOutlined key="setting" />,
                    <EditOutlined key="edit"/>
                ]}
            >
                <Card.Meta 
                    avatar={<Avatar size={64}>YJ</Avatar>}
                    title="유진이"
                    description="인천 여/24세"
                />
                <LogOutButton onClick={onLogOut}>로그아웃</LogOutButton>
            </Card>
        </Col>    
    );
}

export default UserProfile;