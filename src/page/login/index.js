import { LockOutlined, UserOutlined } from "@ant-design/icons";
import { Button, Checkbox, Form, Input, Row, Col } from "antd";

import login from "../../assets/img/login.jpg"

const Login = () => {
  const onFinish = (values) => {
    console.log("Received values of form: ", values);
  };
  return (
    <Row className="h-screen">
      <Col className="flex justify-center items-center" span={12}>
        <div className="w-[360px] h-[400px] flex justify-center items-center bg-[#43616B] rounded-[20px]">
          <Form
            name="normal_login"
            className="login-form"
            initialValues={{
              remember: false,
            }}
            onFinish={onFinish}
          >
            <Form.Item
              name="username"
              autoComplete={false}
              rules={[
                {
                  required: true,
                  message: "Please input your Username!",
                },
              ]}
            >
              <Input 
                prefix={<UserOutlined className="site-form-item-icon" />}
                placeholder="Username"
              />
            </Form.Item>
            <Form.Item
              name="password"
              autoComplete={false}
              rules={[
                {
                  required: true,
                  message: "Please input your Password!",
                },
              ]}
            >
              <Input
                prefix={<LockOutlined className="site-form-item-icon" />}
                type="password"
                placeholder="Password"
              />
            </Form.Item>
            <Form.Item>
              <Form.Item name="remember" valuePropName="checked" noStyle>
                <Checkbox>Remember me</Checkbox>
              </Form.Item>

              <a className="login-form-forgot text-[#4096FF]" href="">
                Forgot password
              </a>
            </Form.Item>

            <Form.Item>
              <Button
                type="primary"
                htmlType="submit"
                className="login-form-button bg-[#4096FF] block w-[100%]"
              >
                Log in
              </Button>
              Or <a className="text-[#4096FF]" href="">register now!</a>
            </Form.Item>
          </Form>
        </div>
      </Col>
      <Col className="bg-[yellow]" span={12}>
        <img src={login} className="h-[100%] contain"/>
      </Col>
    </Row>
  );
};

export default Login;
