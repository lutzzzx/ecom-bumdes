import React, { useEffect, useState } from 'react';
import { Table } from "antd";
import { Link } from 'react-router-dom';
import { BiEdit } from 'react-icons/bi';
import { AiFillDelete } from 'react-icons/ai';
import { useDispatch, useSelector } from 'react-redux';
import {
    deleteAProductCategory,
    getCategories,
    resetState,
} from '../features/prodCategory/prodCategorySlice';
import CustomModal from "../components/CustomModal";

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
        title: "Action",
        dataIndex: "action",
    },
];

const CategoryList = () => {
    const [open, setOpen] = useState(false);
    const [pCatId, setpCatId] = useState("");
    const showModal = (e) => {
        setOpen(true);
        setpCatId(e);
    };

    const hideModal = () => {
        setOpen(false);
    };

    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(resetState());
        dispatch(getCategories());
    }, []);

    const prodCategoryState = useSelector((state) => state.prodCategory.prodCategories);
    const data1 = [];
    for (let i = 0; i < prodCategoryState.length; i++) {
        data1.push({
            key: i + 1,
            name: prodCategoryState[i].title,
            action: (
                <>
                    <Link to={`/admin/category/${prodCategoryState[i]._id}`} className='fs-3 text-danger'>
                        <BiEdit />
                    </Link>
                    <button
                        className="ms-3 fs-3 text-danger bg-transparent border-0"
                        onClick={() => showModal(prodCategoryState[i]._id)}
                    >
                        <AiFillDelete />
                    </button>
                </>
            ),
        });
    }

    const deleteCategory = (e) => {
        dispatch(deleteAProductCategory(e));
        setOpen(false);
        setTimeout(() => {
            dispatch(getCategories());
        }, 100);
    };

    return (
        <div>
            <h3 className="mb-4 title">Product Categories</h3>
            <div>
                <Table columns={columns} dataSource={data1} />
            </div>
            <CustomModal
                hideModal={hideModal}
                open={open}
                performAction={() => {
                    deleteCategory(pCatId);
                }}
                title="Are you sure you want to delete this Product Category?"
            />
        </div>
    )
}

export default CategoryList;