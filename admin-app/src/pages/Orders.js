import React, { useEffect } from 'react';
import { Table } from "antd";
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import { getOrders } from '../features/auth/authSlice';

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

const Orders = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getOrders());
    }, []);
    const orderState = useSelector((state) => state.auth.orders);
    console.log(orderState);
    
    const data1 = [];
    for (let i = 0; i < orderState.length; i++) {
        data1.push({
            key: i + 1,
            name: orderState[i].orderBy.firstname,
            product: (
                <Link to={`/admin/order/${orderState[i].orderBy._id}`}>
                    View Orders
                </Link>
            ),
            amount: "Rp " + orderState[i].paymentIntent.amount,
            date: new Date(orderState[i].createdAt).toLocaleString(),
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
    return (
        <div>
            <h3 className="mb-4 title">Orders</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
        </div>
    )
}

export default Orders;