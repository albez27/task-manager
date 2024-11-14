// src/App.js
import React, { useEffect, useState } from 'react';
import { LaptopOutlined, NotificationOutlined, UserOutlined, FileOutlined } from '@ant-design/icons';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { BrowserRouter as Router, Route, Routes, Link, useLocation } from 'react-router-dom';
import TaskList from './components/TaskList';
import Information from './components/Information';
import News from './components/News';
import Documents from './components/Documents';
import Executors from './components/Executors';
import Reports from './components/Reports';
import CreateTask from './components/CreateTask';
import CreateUser from './components/CreateUser';
import Profile from './components/Profile'; // Импортируем компонент Profile
import './App.css';
import NewsBlock from './components/NewsBlock';

const { Header, Content, Sider } = Layout;

const items1 = [
  { key: '/task-list', label: <Link to="/task-list"><LaptopOutlined /> Список задач</Link> },
  { key: '/information', label: <Link to="/information"><NotificationOutlined /> Информация</Link> },
  { key: '/news', label: <Link to="/news"><LaptopOutlined /> Новости</Link> },
  { key: '/documents', label: <Link to="/documents"><FileOutlined /> Документы</Link> },
  { key: '/profile', label: <Link to="/profile"><UserOutlined /> Профиль</Link> },
];

const items2 = [
  { key: 'executors', icon: <UserOutlined />, label: 'Исполнители', children: [
    { key: '/executors', label: <Link to="/executors">Список исполнителей</Link> },
    { key: '/create-user', label: <Link to="/create-user">Создать пользователя</Link> }
  ]},
  { key: 'reports', icon: <LaptopOutlined />, label: 'Отчеты', children: [
    { key: '/reports', label: <Link to="/reports">Список отчетов</Link> },
    { key: '/create-report', label: <Link to="/create-report">Создать отчет</Link> }
  ]},
  { key: '/create-task', icon: <NotificationOutlined />, label: <Link to="/create-task">Создать задачу</Link> },
];

const App = () => {
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  const location = useLocation();
  const [selectedKey, setSelectedKey] = useState(location.pathname);

  useEffect(() => {
    setSelectedKey(location.pathname);
  }, [location.pathname]);

  const isAdmin = true; // Здесь можно установить проверку на права пользователя

  return (
    <Layout style={{ minHeight: '100vh'}}>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <div className="logo" style={{  marginRight: '10px' }}>
          <UserOutlined style={{ fontSize: '24px', marginRight: '10px' }} />
          <span>Таск-менеджер</span>
        </div>
        <Menu
          theme="dark"
          mode="horizontal"
          selectedKeys={[selectedKey]}
          items={items1}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <Layout>
        <Sider width={200} style={{ background: colorBgContainer }}>
          {isAdmin && (
            <Menu
              mode="inline"
              selectedKeys={[selectedKey]}
              style={{ height: 'calc(100% - 48px)', borderRight: 0 }}
              items={items2}
            />
          )}
          <NewsBlock />
        </Sider>
        <Layout style={{ minHeight: '100vh' }}>
          <Content style={{ padding: '0 24px' }}>
            <Breadcrumb style={{ margin: '16px 0' }}>
              <Breadcrumb.Item>Home</Breadcrumb.Item>
              <Breadcrumb.Item>List</Breadcrumb.Item>
              <Breadcrumb.Item>App</Breadcrumb.Item>
            </Breadcrumb>
            <Routes>
              <Route path="/task-list" element={<TaskList />} />
              <Route path="/information" element={<Information />} />
              <Route path="/news" element={<News />} />
              <Route path="/documents" element={<Documents />} />
              <Route path="/executors" element={<Executors />} />
              <Route path="/reports" element={<Reports />} />
              <Route path="/create-task" element={<CreateTask />} />
              <Route path="/create-user" element={<CreateUser />} />
              <Route path="/profile" element={<Profile />} />
              <Route path="/" element={<TaskList />} />
            </Routes>
          </Content>
        </Layout>
      </Layout>
    </Layout>
  );
};

const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
