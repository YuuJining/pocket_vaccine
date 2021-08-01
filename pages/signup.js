import React, { useCallback, useState } from 'react';
import AppLayout from '../components/AppLayout';
import { Form, Input, Col } from 'antd';
import useInput from '../hooks/useInput';

const Signup = () => {
    const [id, onChangeId] = useInput();
    const [nickname, onChangeNickname] = useInput();
    const [password, onChangePassword] = useInput();
    const [passwordCheck, setPasswordCheck] = useCallback((e)=>{

    });
    const onChangePasswordCheck = useCallback(()=>{
        
    });

    return (
        <AppLayout>
            <Col span={4} offset={10}>
                <Form onFinish>
                    <div>
                        <label htmlFor="user-id">아이디</label>
                        <br />
                        <Input name="user-id" value={id} required onChange={onChangeId} />
                    </div>
                    <div>
                        <label htmlFor="user-nick">닉네임</label>
                        <br />
                        <Input name="user-nick" value={nickname} required onChange={onChangeNickname} />
                    </div>
                    <div>
                        <label htmlFor="user-password">비밀번호</label>
                        <br />
                        <Input name="user-password" type="password" value={password} required onChange={onChangePassword} />
                    </div>
                    <div>
                        <label htmlFor="user-password-check">비밀번호 확인</label>
                        <br />
                        <Input 
                            name="user-password-check" 
                            type="password" 
                            value={passwordCheck} 
                            required
                            onChange={onChangePasswordCheck} 
                        />
                    </div>
                </Form>
            </Col>
        </AppLayout>
    );
}

export default Signup;