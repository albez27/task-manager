import React from 'react';
import { Form, Input, Button } from 'antd';

const CreateTask = () => {
  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  return (
    <div>
      <h1>Создать задачу</h1>
      <Form
        name="create_task"
        initialValues={{ remember: true }}
        onFinish={onFinish}
      >
        <Form.Item
          name="title"
          label="Заголовок"
          rules={[{ required: true, message: 'Введите заголовок задачи' }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="description"
          label="Описание"
          rules={[{ required: true, message: 'Введите описание задачи' }]}
        >
          <Input.TextArea />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit">
            Создать задачу
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateTask;
