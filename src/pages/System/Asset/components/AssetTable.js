import React, {useEffect, useState} from 'react';
import apiMap from '@/api/asset'; // 导入你的 API
import {Space, Switch, Table, Tag} from 'antd';

const AssetTable = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    try {
      const response = await apiMap.table.get({});
      setData(response.data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const [fixedTop, setFixedTop] = useState(false);
  return (
      <Table
          columns={columns}
          dataSource={data}
          scroll={{
            x: 1500,
          }}
          summary={() => (
              <Table.Summary fixed={fixedTop ? "top" : "bottom"}>
                <Table.Summary.Row>
                  <Table.Summary.Cell index={0} colSpan={2}>
                    <Switch
                        checkedChildren="Fixed Top"
                        unCheckedChildren="Fixed Top"
                        checked={fixedTop}
                        onChange={() => {
                          setFixedTop(!fixedTop);
                        }}
                    />
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={2} colSpan={8}>
                    Scroll Context
                  </Table.Summary.Cell>
                  <Table.Summary.Cell index={10}>Fix Right</Table.Summary.Cell>
                </Table.Summary.Row>
              </Table.Summary>
          )}
          // antd site header height
          sticky={{
            offsetHeader: 64,
          }}
      />
  );
};

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
  },
];

export default AssetTable;