// src/components/News.js
import React from 'react';
import { Card, Col, Row, Typography } from 'antd';
import { Link } from 'react-router-dom';
import './News.css';

const { Title } = Typography;

const newsData = [
  {
    date: '17 мая, Пятница',
    items: [
      {
        title: "Пред­ста­витель СГТУ выс­ту­пила пе­ред ро­дите­лями на школь­ном соб­ра­нии",
        description: "Краткое описание новости...",
        link: "/news/1",
        img: "https://via.placeholder.com/150"
      },
      {
        title: "Ко­ман­да По­лите­ха – се­реб­ря­ный при­зер со­рев­но­ваний по греб­ле на бай­дар­ках и ка­ноэ",
        description: "Краткое описание новости...",
        link: "/news/2",
        img: "https://via.placeholder.com/150"
      },
      // добавьте другие новости здесь...
    ]
  },
  {
    date: '16 мая, Четверг',
    items: [
      {
        title: "По­литех про­вел про­филь­ную сме­ну «Мод­ный дом» для школь­ни­ков",
        description: "Краткое описание новости...",
        link: "/news/3",
        img: "https://via.placeholder.com/150"
      },
      {
        title: "Сту­ден­ты ЭТИ – учас­тни­ки кон­фе­рен­ции мо­лодых ра­бот­ни­ков в «Газ­пром про­ек­ти­рова­ние»",
        description: "Краткое описание новости...",
        link: "/news/4",
        img: "https://via.placeholder.com/150"
      },
      // добавьте другие новости здесь...
    ]
  }
];

const News = () => {
  return (
    <div style={{ padding: '24px' }}>
      {newsData.map((newsGroup, index) => (
        <div key={index}>
          <Title level={2}>{newsGroup.date}</Title>
          <Row gutter={16}>
            {newsGroup.items.map((news, idx) => (
              <Col span={8} key={idx}>
                <Card
                  hoverable
                  cover={<img alt={news.title} src={news.img} />}
                >
                  <Card.Meta
                    title={<Link to={news.link}>{news.title}</Link>}
                    description={news.description}
                  />
                </Card>
              </Col>
            ))}
          </Row>
        </div>
      ))}
    </div>
  );
};

export default News;
