import React, { useState,useCallback } from 'react';
import { Button, Form, Input, Col } from 'antd';
import styled from 'styled-components';
import Link from 'next/link';

const ButtonWrapper = styled.div`
    margin: 5px 2px 0 0;
`;

const LoginForm = ({setIsLoggedIn}) => {
    const [id, setId] = useState('');
    const [password, setPassword] = useState('');

    const onChangeId = useCallback((e)=> {
        setId(e.target.value);
    }, []);

    const onChangePassword = useCallback((e)=> {
        setPassword(e.target.value);
    }, []);

    const onSubmitForm = useCallback(()=> {
        console.log(id,password)
        setIsLoggedIn(true)
    }, [id, password])

    return(
        <Col span={4} offset={10}>
            <Form onFinish={onSubmitForm}>
                <div>
                    <label htmlFor="user-id">아이디</label>
                    <br />
                    <Input 
                        name="user-id" 
                        value={id} 
                        onChange={onChangeId} 
                        required
                    />
                </div>
                <div>
                    <label htmlFor="user-password">비밀번호</label>
                    <br />
                    <Input 
                        name="user-password" 
                        value={password} 
                        type="password"
                        onChange={onChangePassword} 
                        required
                    />
                </div>
                <ButtonWrapper>
                    <Button type="primary" htmlType="submit" loading={false} style={{margin:'10px 20px 0 0'}}>로그인</Button>
                    <Link href="/signup"><a><Button>회원가입</Button></a></Link>
                </ButtonWrapper>
            </Form>
        </Col>
    );
}

export default LoginForm;