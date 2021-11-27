import React from "react";
import { Row, Col, Form, Input, Button } from "antd";
import { loginUser } from "../redux/actions/userActions";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";

import AOS from 'aos';
import 'aos/dist/aos.css'; // You can also use <link> for styles
// ..
AOS.init();

function Login() {
    const dispatch = useDispatch()
    function login(values){

        dispatch(loginUser(values))

    }
  return (
    <div className="login">
      <Row justify="center" className="flex align-items-center">
        <Col lg={5} id='bv1'><h1 className="heading1" data-aos='slide-left'>Opus</h1></Col>
        <Col lg={10} sm={24} className="bs p-5 login-form">
          <h3>Login</h3>
          <hr />
          <Form layout="vertical" onFinish={login}>
            <Form.Item
              label="Username"
              name="username"
              hasFeedback
              rules={[{ required: true }]}
             
            >
              <Input />
            </Form.Item>

            

            <Form.Item
              label="Password"
              name="password"
              hasFeedback
              rules={[{ required: true }]}
             
            >
              <Input type='password' />
            </Form.Item>

            <Button htmlType="submit" className='mb-3'>Login</Button><br />

            <Link to='/register' className='mt-3'>Not registered? Click here to register</Link>
          </Form>
        </Col>
        <Col lg={5} id='bv2'><h1 className='heading2' data-aos='slide-right'>Focus</h1></Col>
      </Row>
    </div>
  );
}

export default Login;
