// src/components/CreateUser.js
import React from 'react';
import { Form, Input, Button, Select, Typography } from 'antd';

const { Title } = Typography;
const { Option } = Select;

const CreateUser = () => {
  const [form] = Form.useForm();

  const onFinish = (values) => {
    console.log('Received values:', values);
    // Здесь можно добавить логику для отправки данных на сервер
  };

  return (
    <div style={{ maxWidth: '600px', margin: 'auto', padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <Title level={2} style={{ textAlign: 'center' }}>Создать пользователя</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Form.Item
          name="firstName"
          label="Имя"
          rules={[
            { required: true, message: 'Введите имя' },
            { pattern: /^[A-Za-zА-Яа-я]+$/, message: 'Имя должно содержать только буквы' },
          ]}
        >
          <Input placeholder="Введите имя" />
        </Form.Item>

        <Form.Item
          name="lastName"
          label="Фамилия"
          rules={[
            { required: true, message: 'Введите фамилию' },
            { pattern: /^[A-Za-zА-Яа-я]+$/, message: 'Фамилия должна содержать только буквы' },
          ]}
        >
          <Input placeholder="Введите фамилию" />
        </Form.Item>

        <Form.Item
          name="middleName"
          label="Отчество"
          rules={[
            { pattern: /^[A-Za-zА-Яа-я]*$/, message: 'Отчество должно содержать только буквы' },
          ]}
        >
          <Input placeholder="Введите отчество (если есть)" />
        </Form.Item>

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
          name="role"
          label="Роль"
          rules={[
            { required: true, message: 'Выберите роль' },
          ]}
        >
          <Select
            mode="multiple"
            placeholder="Выберите роль"
          >
            <Option value="Admin">Admin</Option>
            <Option value="User">User</Option>
            <Option value="Manager">Manager</Option>
          </Select>
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
            Создать
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateUser;
