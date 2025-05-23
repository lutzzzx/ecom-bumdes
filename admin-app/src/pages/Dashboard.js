import React from 'react';
import { BsArrowDownRight, BsArrowUpRight } from 'react-icons/bs';
import { Column } from '@ant-design/plots';
import { Table } from "antd";

const columns = [
  {
    title: "No",
    dataIndex: "key",
  },
  {
    title: "Name",
    dataIndex: "name",
  },
  {
    title: "Product",
    dataIndex: "product",
  },
  {
    title: "Status",
    dataIndex: "staus",
  },
];

const data1 = [];
for (let i = 0; i < 46; i++) {
  data1.push({
    key: i,
    name: `Edward King ${i}`,
    product: 32,
    staus: `London, Park Lane no. ${i}`,
  });
}

const Dashboard = () => {
  const data = [
    {
      type: 'Jan',
      sales: 38,
    },
    {
      type: 'Feb',
      sales: 52,
    },
    {
      type: 'Mar',
      sales: 61,
    },
    {
      type: 'Apr',
      sales: 145,
    },
    {
      type: 'May',
      sales: 48,
    },
    {
      type: 'Jun',
      sales: 38,
    },
    {
      type: 'Jul',
      sales: 38,
    },
    {
      type: 'Aug',
      sales: 38,
    },
    {
      type: 'Sep',
      sales: 38,
    },
    {
      type: 'Oct',
      sales: 38,
    },
    {
      type: 'Nov',
      sales: 38,
    },
    {
      type: 'Des',
      sales: 38,
    },
  ];
  const config = {
    data,
    xField: 'type',
    yField: 'sales',
    label: {
      position: 'middle',
      style: {
        fill: '#FFFFFF',
        opacity: 1,
      },
    },
    xAxis: {
      label: {
        autoHide: true,
        autoRotate: false,
      },
    },
    meta: {
      type: {
        alias: 'Month',
      },
      sales: {
        alias: 'Income',
      },
    },
  };

  return (
    <div>
      <h3 className='mb-4'>Dashboard</h3>
      <div className='d-flex justify-content-between align-items-center gap-3'>
        <div className='d-flex justify-content-between align-items-end bg-white flex-grow-1 p-3 rounded-3'>
          <div>
            <p className='desc'>total</p> <h4 className='mb-0 sub-title'>IDR 100.000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6><BsArrowUpRight />32%</h6>
            <p className='mb-0 desc'>Compared to april 2023</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end bg-white flex-grow-1 p-3 rounded-3'>
          <div>
            <p className='desc'>total</p> <h4 className='mb-0 sub-title'>IDR 100.000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='red'><BsArrowUpRight />32%</h6>
            <p className='mb-0 desc'>Compared to april 2023</p>
          </div>
        </div>
        <div className='d-flex justify-content-between align-items-end bg-white flex-grow-1 p-3 rounded-3'>
          <div>
            <p className='desc'>total</p> <h4 className='mb-0 sub-title'>IDR 100.000</h4>
          </div>
          <div className='d-flex flex-column align-items-end'>
            <h6 className='green'><BsArrowUpRight />32%</h6>
            <p className='mb-0 desc'>Compared to april 2023</p>
          </div>
        </div>
      </div>
      <div className='mt-4 flex-grow-1'>
        <h3 className='mb-4'>Income Statics</h3>
        <div>
          <Column {...config} />;
        </div>
      </div>
      <div className="mt-4 flex-grow-1">
        <h3 className="mb-4">Recent Orders</h3>
        <div>
          <Table columns={columns} dataSource={data1} />
        </div>
      </div>
    </div>
  );
};

export default Dashboard;