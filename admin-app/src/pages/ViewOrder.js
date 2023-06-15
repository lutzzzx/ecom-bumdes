import React, { useEffect } from 'react';
import { Table } from "antd";
import { Link, useLocation } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getOrderByUser, getOrders } from '../features/auth/authSlice';

const columns = [
    {
        title: "No",
        dataIndex: "key",
    },
    {
        title: "Product Name",
        dataIndex: "name",
    },
    {
        title: "Count",
        dataIndex: "count",
    },
    {
        title: "Amount",
        dataIndex: "amount",
    },
    {
        title: "Date",
        dataIndex: "date",
    },

    {
        title: "Action",
        dataIndex: "action",
    },
];

const ViewOrder = () => {
    const location = useLocation();
    const userId = location.pathname.split('/')[3];
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrderByUser(userId));
    }, []);
    const orderState = useSelector((state) => state?.auth?.orderbyuser?.products);
    const asal = useSelector((state) => state);
    console.log(asal)

    const data1 = [];
    if (orderState) {
        for (let i = 0; i < orderState?.length; i++) {
            data1.push({
                key: i + 1,
                name: orderState[i].product?.title,
                count: orderState[i].count,
                amount: orderState[i].product?.price,
                date: orderState[i].product?.createdAt,
                action: (
                    <>
                        <Link to="/" className=" fs-3 text-danger">
                            <BiEdit />
                        </Link>
                        <Link className="ms-3 fs-3 text-danger" to="/">
                            <AiFillDelete />
                        </Link>
                    </>
                ),
            });
        }
    }
    return (
        <div>
            <h3 className="mb-4 title">View Orders</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default ViewOrder;