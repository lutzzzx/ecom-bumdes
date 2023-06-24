import { React, useEffect, useState } from 'react'
import CustomInput from '../components/CustomInput';
import ReactQuill from 'react-quill';
import { useNavigate, useLocation } from 'react-router-dom';
import 'react-quill/dist/quill.snow.css';
import { useFormik } from 'formik';
import { toast } from "react-toastify";
import * as Yup from 'yup';
import { useDispatch, useSelector } from 'react-redux';
import { getCategories } from '../features/prodCategory/prodCategorySlice';
import Dropzone from 'react-dropzone'
import { deleteImg, uploadImg } from '../features/upload/uploadSlice';
import {
    createProducts,
    getAProduct,
    updateAProduct,
    resetState
} from '../features/product/productSlice';

let schema = Yup.object().shape({
    title: Yup.string().required('Title is required'),
    description: Yup.string().required('Description is required'),
    price: Yup.number().required('Price is required'),
    category: Yup.string().required('Category is required'),
    quantity: Yup.number().required('Quantity is required'),
    images: Yup.array(),
});

const AddProduct = () => {
    const dispatch = useDispatch();
    const location = useLocation();
    const getProdId = location.pathname.split("/")[3];
    const navigate = useNavigate();
    const [images, setImages] = useState([]);

    useEffect(() => {
        dispatch(getCategories());
    }, []);

    const categoryState = useSelector((state) => state.prodCategory.prodCategories);
    const imgState = useSelector((state) => state.upload.images);
    const newProduct = useSelector((state) => state.product);
    const {
        isSuccess,
        isError,
        isLoading,
        createdProduct,
        updatedProduct,
        products,
    } = newProduct;

    console.log({newProduct});

    const productData = products?.filter((e) => e._id === getProdId)[0];

    useEffect(() => {
        if (isSuccess && createdProduct) {
            toast.success('Product Added Successfully!');
            navigate("/admin/product-list");
        }
        if (isError) {
            toast.error('Something Went Wrong!');
        }
    }, [isSuccess, isError, isLoading, createProducts]);

    const img = [];
    imgState.forEach((i) => {
        img.push({
            public_id: i.public_id,
            url: i.url,
        })
    })
    useEffect(() => {
        formik.values.images = img;
    }, [img]);

    useEffect(() => {
        if (getProdId !== undefined) {
            dispatch(getAProduct(getProdId));
        } else {
            dispatch(resetState());
        }
    }, [getProdId]);

    useEffect(() => {
        if (isSuccess && updatedProduct) {
            toast.success("Product Updated Successfullly!");
            navigate("/admin/product-list");
        }
        if (isError) {
            toast.error("Something Went Wrong!");
        }
    }, [isSuccess, isError, isLoading, updatedProduct]);

    const formik = useFormik({
        initialValues: {
            title: productData?.title || '',
            description: productData?.description || '',
            price: productData?.price || '',
            category: productData?.category || '',
            quantity: productData?.quantity || '',
            images: productData?.images || '',
        },
        validationSchema: schema,
        onSubmit: values => {
            if (getProdId !== undefined) {
                const data = { id: getProdId, productData: values };
                dispatch(updateAProduct(data));
                dispatch(resetState());
            } else {
                dispatch(createProducts(values));
                formik.resetForm();
                setTimeout(() => {
                    dispatch(resetState());
                }, 3000);
            }
        },
    });

    return (
        <div>
            <h3 className="mb-4 title">
                {getProdId !== undefined ? "Edit" : "Add"} Product
            </h3>
            <div>
                <form onSubmit={formik.handleSubmit} className='d-flex gap-3 flex-column'>
                    <CustomInput
                        type='text'
                        label='Enter Product Title'
                        name="title"
                        onCh={formik.handleChange('title')}
                        onBl={formik.handleBlur('title')}
                        val={formik.values.title}
                    />
                    <div className="error">
                        {formik.touched.title && formik.errors.title}
                    </div>
                    <div className="">
                        <CustomInput
                            type='text'
                            label='Enter Product Description'
                            name="description"
                            onCh={formik.handleChange('description')}
                            onBl={formik.handleBlur('description')}
                            val={formik.values.description}
                        />
                    </div>
                    <div className="error">
                        {formik.touched.description && formik.errors.description}
                    </div>
                    <CustomInput
                        type='number'
                        label='Enter Product Price'
                        name="price"
                        onCh={formik.handleChange('price')}
                        onBl={formik.handleBlur('price')}
                        val={formik.values.price}
                    />
                    <div className="error">
                        {formik.touched.price && formik.errors.price}
                    </div>
                    <select
                        name="category"
                        onChange={formik.handleChange('category')}
                        onBlur={formik.handleBlur('category')}
                        value={formik.values.category}
                        className='form-control py-3'
                        id="">
                        <option value="">Select Product Category</option>
                        {categoryState && categoryState.map((i, j) => {
                            return (
                                <option key={j} value={i.title}>
                                    {i.title}
                                </option>
                            )
                        })}
                    </select>
                    <div className="error">
                        {formik.touched.category && formik.errors.category}
                    </div>
                    <CustomInput
                        type='number'
                        label='Enter Product Quantity'
                        name='quantity'
                        onCh={formik.handleChange('quantity')}
                        onBl={formik.handleBlur('quantity')}
                        val={formik.values.quantity}
                    />
                    <div className="error">
                        {formik.touched.quantity && formik.errors.quantity}
                    </div>
                    <div className="bg-white border-1 p-5 text-center">
                        <Dropzone
                            onDrop={(acceptedFiles) => dispatch(uploadImg(acceptedFiles))}
                        >
                            {({ getRootProps, getInputProps }) => (
                                <section>
                                    <div {...getRootProps()}>
                                        <input {...getInputProps()} />
                                        <p>
                                            Drag 'n' drop some files here, or click to select files
                                        </p>
                                    </div>
                                </section>
                            )}
                        </Dropzone>
                    </div>
                    <div className="showimages d-flex flex-wrap gap-3">
                        {imgState?.map((i, j) => {
                            return (
                                <div className='position-relative' key={j}>
                                    <button
                                        type='button'
                                        onClick={() => dispatch(deleteImg(i.public_id))}
                                        className='btn-close position-absolute'
                                        style={{ top: '10px', right: '10px' }}
                                    >
                                    </button>
                                    <img src={i.url} alt="" width={200} height={200} />
                                </div>
                            )
                        })}
                    </div>
                    <button
                        className="btn btn-success border-0 rounded-3 my-5"
                        type="submit"
                    >
                        {getProdId !== undefined ? "Edit" : "Add"} Product
                    </button>
                </form>
            </div>
        </div>
    )
}

export default AddProduct;