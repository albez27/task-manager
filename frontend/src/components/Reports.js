import React, { useEffect, useState } from 'react';
import { Table, Button, Space, Popconfirm } from 'antd';
import { EditOutlined, DeleteOutlined } from '@ant-design/icons';
import axios from 'axios';

const Reports = () => {
  const [data, setData] = useState([]);
  const [selectedRowKeys, setSelectedRowKeys] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('https://api.example.com/reports');
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (key) => {
    try {
      await axios.delete(`https://api.example.com/reports/${key}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting item:', error);
    }
  };

  const columns = [
    {
      title: 'Название отчета',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Дата создания',
      dataIndex: 'date',
      key: 'date',
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} />
          <Popconfirm
            title="Вы уверены, что хотите удалить?"
            onConfirm={() => handleDelete(record.key)}
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

  return (
    <Table
      rowSelection={rowSelection}
      columns={columns}
      dataSource={data.map(item => ({ ...item, key: item.id }))}
    />
  );
};

export default Reports;
