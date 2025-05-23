import { React, useEffect } from 'react';
import CustomInput from '../components/CustomInput';
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { toast } from "react-toastify";
import * as yup from "yup";
import { useFormik } from "formik";
import {
    createCategory,
    getAProductCategory,
    resetState,
    updateAProductCategory,
} from '../features/prodCategory/prodCategorySlice';

let schema = yup.object().shape({
    title: yup.string().required("Category Name is Required"),
});

const AddCategory = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const getPCatId = location.pathname.split("/")[3];
    const navigate = useNavigate();
    const newCategory = useSelector((state) => state.prodCategory);
    const {
        isSuccess,
        isError,
        isLoading,
        createdCategory,
        categoryName,
        updatedCategory,
    } = newCategory;
    useEffect(() => {
        if (isSuccess && createdCategory) {
            toast.success('Category Added Successfully!');
            navigate("/admin/category-list");
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createCategory]);
    useEffect(() => {
        if (getPCatId !== undefined) {
            dispatch(getAProductCategory(getPCatId));
        } else {
            dispatch(resetState());
        }
    }, [getPCatId]);
    useEffect(() => {
        if (isSuccess && updatedCategory) {
            toast.success("Category Updated Successfullly!");
            navigate("/admin/category-list");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading, updatedCategory]);
    
    const formik = useFormik({
        enableReinitialize: true,
        initialValues: {
            title: categoryName || "",
        },
        validationSchema: schema,
        onSubmit: (values) => {
            if (getPCatId !== undefined) {
                const data = { id: getPCatId, pCatData: values };
                dispatch(updateAProductCategory(data));
                dispatch(resetState());
            } else {
                dispatch(createCategory(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 300);
            }
        },
    });
    return (
        <div>
            <h3 className="mb-4 title">
                {getPCatId !== undefined ? "Edit" : "Add"} Category
            </h3>
            <div>
                <form action="" onSubmit={formik.handleSubmit}>
                    <CustomInput
                        type="text"
                        label="Enter Product Category"
                        onCh={formik.handleChange("title")}
                        onBl={formik.handleBlur("title")}
                        val={formik.values.title}
                        id="category"
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        {getPCatId !== undefined ? "Edit" : "Add"} Category
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddCategory;