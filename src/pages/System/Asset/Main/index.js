import React, {useState} from 'react';
import CustomTable from "../../../components/CustomTable";
import {Button, Space, Tag} from "antd";
import apiMap from "../../../api/asset";
import Link from "antd/es/typography/Link";

const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    key: 'name',
    render: (text) => <a>{text}</a>,
  },
  {
    title: 'Type',
    dataIndex: 'type',
    key: 'type',
  },
  {
    title: 'Tags',
    key: 'tags',
    dataIndex: 'tags',
    render: (_, {tags}) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? 'geekblue' : 'green';
            if (tag === 'loser') {
              color = 'volcano';
            }
            return (
                <Tag color={color} key={tag}>
                  {tag.toUpperCase()}
                </Tag>
            );
          })}
        </>
    ),
  },
  {
    title: 'Last updated at',
    dataIndex: 'lastUpdatedAt',
    key: 'lastUpdatedAt',
  },
  {
    title: 'Action',
    key: 'action',
    render: (_) => (
        <Space size="middle">
          <a>Edit</a>
          <a>Delete</a>
        </Space>
    ),
  }
]
const Asset = () => {
  // 表格请求参数
  const [requestParam, setRequestParam] = useState({
    pageSize: 5,
    current: 1
  })
// 改变参数
  const onParamChange = (searchParams) => {
    if (!Object.keys(searchParams).length) {
      setRequestParam({
        ...requestParam,
        name: undefined,
        type: undefined,
        tags: undefined,
        lastUpdatedAt: undefined
      })
    } else {
      setRequestParam({...requestParam, ...searchParams})
    }
  }
  return (
      <div>

        <h1>Asset Table</h1>
        <Link to='/asset/create'>
          <Button className="enroll_btn" size="small">Create Asset</Button>
        </Link>


        <CustomTable
            columns={columns}
            fetchMethod={apiMap.table.get}
            requestParam={requestParam}
            onParamChange={onParamChange}/>
      </div>
  );
};

export default Asset