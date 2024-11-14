// src/components/Profile.js
import React, { useState } from 'react';
import { Form, Input, Button, Select, Typography, Table, Space, Upload, Row, Col, Modal } from 'antd';
import { UploadOutlined, EditOutlined, DeleteOutlined } from '@ant-design/icons';

const { Title } = Typography;
const { Option } = Select;

const Profile = () => {
  const [form] = Form.useForm();
  const [achievementForm] = Form.useForm();
  const [achievements, setAchievements] = useState([
    { key: '1', achievement: 'Публикация в журнале', description: 'Статья о нейронных сетях', year: '2020', file: null },
    { key: '2', achievement: 'Премия лучшего преподавателя', description: 'За выдающиеся достижения в обучении', year: '2021', file: null },
  ]);
  const [isModalVisible, setIsModalVisible] = useState(false);
  const [editingKey, setEditingKey] = useState('');

  const onFinish = (values) => {
    console.log('Received values:', values);
  };

  const handleAddAchievement = () => {
    achievementForm.resetFields();
    setIsModalVisible(true);
    setEditingKey('');
  };

  const handleSaveAchievement = (values) => {
    if (editingKey) {
      setAchievements(prevAchievements => prevAchievements.map(ach => ach.key === editingKey ? { ...values, key: editingKey } : ach));
    } else {
      setAchievements([...achievements, { ...values, key: Date.now().toString() }]);
    }
    setIsModalVisible(false);
  };

  const editAchievement = (key) => {
    const achievement = achievements.find(ach => ach.key === key);
    achievementForm.setFieldsValue(achievement);
    setIsModalVisible(true);
    setEditingKey(key);
  };

  const deleteAchievement = (key) => {
    setAchievements(prevAchievements => prevAchievements.filter(item => item.key !== key));
  };

  const columns = [
    {
      title: 'Достижение',
      dataIndex: 'achievement',
      key: 'achievement',
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Год',
      dataIndex: 'year',
      key: 'year',
    },
    {
      title: 'Файл',
      dataIndex: 'file',
      key: 'file',
      render: (file) => file && <a href={file.url}>Скачать</a>,
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (text, record) => (
        <Space size="middle">
          <EditOutlined onClick={() => editAchievement(record.key)} />
          <DeleteOutlined onClick={() => deleteAchievement(record.key)} />
        </Space>
      ),
    },
  ];

  return (
    <div style={{ maxWidth: '1200px', margin: 'auto', padding: '24px', background: '#fff', borderRadius: '8px', boxShadow: '0 2px 8px rgba(0, 0, 0, 0.1)' }}>
      <Title level={2}>Профиль</Title>
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
      >
        <Row gutter={24}>
          <Col span={12}>
            <Form.Item
              name="email"
              label="Email"
              rules={[
                { type: 'email', message: 'Введите корректный email' },
                { required: true, message: 'Введите email' },
              ]}
            >
              <Input />
            </Form.Item>

            <Form.Item
              name="password"
              label="Пароль"
              rules={[
                { required: true, message: 'Введите пароль' },
              ]}
            >
              <Input.Password />
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
              name="fullname"
              label="ФИО"
              rules={[
                { required: true, message: 'Введите ФИО' },
              ]}
            >
              <Input />
            </Form.Item>
          </Col>
          <Col span={12}>
            <Title level={3}>Достижения</Title>
            <Table
              dataSource={achievements}
              columns={columns}
              rowKey="key"
              pagination={false}
              style={{ marginBottom: '24px' }}
            />
            <Button type="dashed" onClick={handleAddAchievement}>
              Добавить достижение
            </Button>
          </Col>
        </Row>
        <Form.Item style={{ marginTop: '24px', textAlign: 'center' }}>
          <Button type="primary" htmlType="submit">
            Сохранить
          </Button>
        </Form.Item>
      </Form>

      <Modal
        title={editingKey ? "Редактировать достижение" : "Добавить достижение"}
        visible={isModalVisible}
        onCancel={() => setIsModalVisible(false)}
        footer={null}
      >
        <Form
          form={achievementForm}
          layout="vertical"
          onFinish={handleSaveAchievement}
        >
          <Form.Item
            name="achievement"
            label="Достижение"
            rules={[
              { required: true, message: 'Введите достижение' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="description"
            label="Описание"
            rules={[
              { required: true, message: 'Введите описание' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="year"
            label="Год"
            rules={[
              { required: true, message: 'Введите год' },
            ]}
          >
            <Input />
          </Form.Item>

          <Form.Item
            name="file"
            label="Файл"
            valuePropName="file"
          >
            <Upload>
              <Button icon={<UploadOutlined />}>Загрузить файл</Button>
            </Upload>
          </Form.Item>

          <Form.Item>
            <Button type="primary" htmlType="submit">
              Сохранить
            </Button>
          </Form.Item>
        </Form>
      </Modal>
    </div>
  );
};

export default Profile;
