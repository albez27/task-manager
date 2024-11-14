import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Popconfirm, Switch, Card, Col, Row } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';
import TaskCard from './TaskCard';

const TaskList = () => {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);
  const [isTableView, setIsTableView] = useState(() => {
    const savedMode = localStorage.getItem('viewMode');
    return savedMode ? JSON.parse(savedMode) : true;
  });
  const [modalVisible, setModalVisible] = useState(false);
  const [selectedTask, setSelectedTask] = useState(null);
  const [isEditable, setIsEditable] = useState(false);

  useEffect(() => {
    fetchData();
  }, []);

  useEffect(() => {
    localStorage.setItem('viewMode', JSON.stringify(isTableView));
  }, [isTableView]);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/tasks');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (key) => {
    try {
      await axios.delete(`http://localhost:8080/tasks/${key}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const showTaskCard = (task, editable = false) => {
    setSelectedTask(task);
    setModalVisible(true);
    setIsEditable(editable);
  };

  const handleModalClose = () => {
    setModalVisible(false);
    setSelectedTask(null);
    setIsEditable(false);
  };

  const handleSave = async (updatedTask) => {
    try {
      await axios.put(`http://localhost:8080/tasks/${updatedTask.id}`, updatedTask);
      const newData = data.map(item => item.id === updatedTask.id ? updatedTask : item);
      setData(newData);
      fetchData();
    } catch (error) {
      console.error('Error saving task:', error);
    }
  };

  const columns = [
    {
      title: 'Название',
      dataIndex: 'name',
      key: 'name',
      render: (text, record) => (
        <a onClick={() => showTaskCard(record)}>{text}</a>
      ),
    },
    {
      title: 'Описание',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} onClick={() => showTaskCard(record, true)} />
          <Popconfirm
            title="Вы уверены, что хотите удалить?"
            onConfirm={() => handleDelete(record.id)}
          >
            <Button type="link" icon={<DeleteOutlined />} />
          </Popconfirm>
        </Space>
      ),
    },
  ];

  const rowSelection = {
    selectedRowKeys,
    onChange: (selectedRowKeys) => {
      setSelectedRowKeys(selectedRowKeys);
    },
  };

  const renderTableView = () => (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data.map(item => ({ ...item, key: item.id }))}
    />
  );

  const renderBoardView = () => (
    <Row gutter={[16, 16]}>
      <Col span={12}>
        <h2>Надо сделать</h2>
        {data.filter(item => item.status === 0).map(item => (
          <Card key={item.id} title={item.name} extra={
            <Space size="middle">
              <Button type="link" icon={<EditOutlined />} onClick={() => showTaskCard(item, true)} />
              <Popconfirm
                title="Вы уверены, что хотите удалить?"
                onConfirm={() => handleDelete(item.id)}
              >
                <Button type="link" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Space>
          }>
            <a onClick={() => showTaskCard(item)}>{item.description}</a>
          </Card>
        ))}
      </Col>
      <Col span={12}>
        <h2>Готово</h2>
        {data.filter(item => item.status === 1).map(item => (
          <Card key={item.id} title={item.name} extra={
            <Space size="middle">
              <Button type="link" icon={<EditOutlined />} onClick={() => showTaskCard(item, true)} />
              <Popconfirm
                title="Вы уверены, что хотите удалить?"
                onConfirm={() => handleDelete(item.id)}
              >
                <Button type="link" icon={<DeleteOutlined />} />
              </Popconfirm>
            </Space>
          }>
            <a onClick={() => showTaskCard(item)}>{item.description}</a>
          </Card>
        ))}
      </Col>
    </Row>
  );

  return (
    <div>
      <Switch
        checkedChildren="Таблица"
        unCheckedChildren="Доска"
        checked={isTableView}
        onChange={() => setIsTableView(!isTableView)}
      />
      {isTableView ? renderTableView() : renderBoardView()}
      <TaskCard
        visible={modalVisible}
        onClose={handleModalClose}
        task={selectedTask}
        onSave={handleSave}
        editable={isEditable}
      />
    </div>
  );
};

export default TaskList;
