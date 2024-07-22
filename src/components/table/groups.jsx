import React, { useState } from 'react'
import { Space, Table } from 'antd';
import { IconButton } from '@mui/material';
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import DoneIcon from "@mui/icons-material/Done";

const Index = () => {
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
      title: 'Guruh nomi',
      dataIndex: 'name',
      key: 'name',
      align: 'center',
    },
    {
      title: 'Filial',
      dataIndex: 'branch',
      key: 'branch',
      align: 'center',
    },
  ];

  const data = [
    
  ];
  return (
    <div>
      <Table scroll={{y: 420}} pagination={false} columns={columns} dataSource={data} />
    </div>
  )
}

export default Index