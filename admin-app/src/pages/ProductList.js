import { React, useEffect, useState } from 'react';
import { Table } from "antd";
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import CustomModal from "../components/CustomModal";
import {
    getProducts,
    deleteAProduct,
    resetState
} from '../features/product/productSlice';

const columns = [
    {
        title: "No",
        dataIndex: "key",
    },
    {
        title: "Title",
        dataIndex: "title",
        sorter: (a, b) => a.title.length - b.title.length,
    },
    {
        title: "Category",
        dataIndex: "category",
    },
    {
        title: "Price",
        dataIndex: "price",
    },
    {
        title: "Action",
        dataIndex: "action",
    },
];

const ProductList = () => {
    const [open, setOpen] = useState(false);
    const [prodId, setprodId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setprodId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
        dispatch(getProducts());
    }, []);
    const productState = useSelector((state) => state.product.products);
    const data1 = [];
    for (let i = 0; i < productState.length; i++) {
        data1.push({
            key: i + 1,
            title: productState[i].title,
            category: productState[i].category,
            price: `Rp ${productState[i].price}`,
            action: (
                <>
                    <Link to={`/admin/product/${productState[i]._id}`} className='fs-3 text-danger'>
                        <BiEdit />
                    </Link>
                    <button
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                        onClick={() => showModal(productState[i]._id)}
                    >
                        <AiFillDelete />
                    </button>
                </>
            ),
        });
    }

    const deleteProduct = (e) => {
        dispatch(deleteAProduct(e));
        setOpen(false);
        setTimeout(() => {
            dispatch(getProducts());
        }, 100);
    };

    return (
        <div>
            <h3 className="mb-4 title">Products</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => {
                    deleteProduct(prodId);
                }}
                title="Are you sure you want to delete this Product?"
            />
        </div>
    )
}

export default ProductList;