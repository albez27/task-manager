// src/components/Login.js
import React from 'react';
import { Form, Input, Button, Typography } from 'antd';

const { Title } = Typography;

const Login = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Здесь можно добавить логику для отправки данных на сервер
  };

  return (
    <div style={{ maxWidth: '400px', margin: 'auto', padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Войти</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="email"
          label="Почта"
          rules={[
            { type: 'email', message: 'Введите корректный email' },
            { required: true, message: 'Введите почту' },
          ]}
        >
          <Input placeholder="Введите почту" />
        </Form.Item>

        <Form.Item
          name="password"
          label="Пароль"
          rules={[
            { required: true, message: 'Введите пароль' },
            { min: 6, message: 'Пароль должен содержать минимум 6 символов' },
          ]}
        >
          <Input.Password placeholder="Введите пароль" />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" style={{ width: '100%' }}>
            Войти
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default Login;
