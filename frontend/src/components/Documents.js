import React, { useState, useEffect } from 'react';
import { Table, Button, Space, Modal, Input } from 'antd';
import { EditOutlined, DeleteOutlined, SearchOutlined } from '@ant-design/icons';
import axios from 'axios';

const Documents = () => {
  const [documents, setDocuments] = useState([]);
  const [filteredDocuments, setFilteredDocuments] = useState([]);
  const [searchText, setSearchText] = useState('');
  const [visible, setVisible] = useState(false);
  const [selectedDocument, setSelectedDocument] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await axios.get('http://localhost:8080/documents');
      setDocuments(response.data);
      setFilteredDocuments(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:8080/documents/${id}`);
      fetchData();
    } catch (error) {
      console.error('Error deleting document:', error);
    }
  };

  const handleEdit = (document) => {
    setSelectedDocument(document);
    setVisible(true);
  };

  const handleSearch = (value) => {
    const filtered = documents.filter(doc => doc.title.toLowerCase().includes(value.toLowerCase()));
    setFilteredDocuments(filtered);
    setSearchText(value);
  };

  const columns = [
    {
      title: 'Название',
      dataIndex: 'title',
      key: 'title',
    },
    {
      title: 'Ссылка',
      dataIndex: 'url',
      key: 'url',
      render: (text, record) => (
        <a href={text} target="_blank" rel="noopener noreferrer">{text}</a>
      ),
    },
    {
      title: 'Действия',
      key: 'actions',
      render: (_, record) => (
        <Space size="middle">
          <Button type="link" icon={<EditOutlined />} onClick={() => handleEdit(record)} />
          <Button type="link" icon={<DeleteOutlined />} onClick={() => handleDelete(record.id)} />
        </Space>
      ),
    },
  ];

  return (
    <div>
      <h1>Документы</h1>
      <Input
        placeholder="Поиск по названию"
        prefix={<SearchOutlined />}
        value={searchText}
        onChange={(e) => handleSearch(e.target.value)}
        style={{ marginBottom: '16px' }}
      />
      <Table columns={columns} dataSource={filteredDocuments} />
      <Modal
        title="Редактировать документ"
        visible={visible}
        onCancel={() => setVisible(false)}
        footer={null}
      >
        {/* Вставьте здесь форму для редактирования документа */}
      </Modal>
    </div>
  );
};

export default Documents;
