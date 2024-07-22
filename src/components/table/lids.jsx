import React, { useState } from 'react';
import { Space, Table } from 'antd';
import { IconButton } from '@mui/material';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";
import useMediaQuery from '@mui/material/useMediaQuery';

const Index = () => {
  const [copiedLink, setCopiedLink] = useState(null);
  const isSmallScreen = useMediaQuery('(max-width: 768px)');

  const handleCopy = (link) => {
    navigator.clipboard.writeText(link).then(() => {
      setCopiedLink(link);
      setTimeout(() => {
        setCopiedLink(null);
      }, 2000);
    });
  };

  const columns = [
    {
      title: "№",
      key: 'index',
      dataIndex: 'index',
      render: (_, __, index) => index + 1,
      align: 'center',
      width: 60,
    },
    {
      title: 'Filiallar',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Havolalar',
      dataIndex: 'links',
      key: 'links',
      align: 'center',
      render: (_, record) => (
        <Space direction="vertical">
          <a href={record.links} target="_blank" rel="noopener noreferrer">
            {record.links}
          </a>
        </Space>
      )
    },
    {
      title: 'Havolani nusxalash',
      key: 'action',
      render: (_, record) => (
        <IconButton onClick={() => handleCopy(record.links)}>
          {copiedLink === record.links ? <DoneIcon /> : <ContentCopyIcon />}
        </IconButton>
      ),
      align: 'center',
    },
    {
      title: 'Lidlar soni',
      key: 'lids',
      dataIndex: 'lids',
      align: 'center',
    },
  ];

  const data = [
    {
      key: '1',
      name: 'Tinchlik',
      links: 'https://t.me/modmeRobot?start=123',
      lids: 23
    },
    {
      key: '2',
      name: 'Tinchlik',
      links: 'https://t.me/modmeRobot?start=456',
      lids: 20
    },
    {
      key: '3',
      name: 'Tinchlik',
      links: 'https://t.me/modmeRobot?start=789',
      lids: 18
    },
    {
      key: '4',
      name: 'Tinchlik',
      links: 'https://t.me/modmeRobot?start=128',
      lids: 16
    },
  ];

  return (
    <div style={{ padding: isSmallScreen ? '10px' : '20px' }}>
      <Table 
        scroll={{ y: isSmallScreen ? 240 : 420 }} 
        pagination={false} 
        columns={isSmallScreen ? columns.filter(col => col.key !== 'lids' && col.key !== "links") : columns} 
        dataSource={data} 
      />
    </div>
  );
};

export default Index;
