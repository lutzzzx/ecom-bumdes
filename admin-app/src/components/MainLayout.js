import { React, useState } from 'react';
import {
    AiOutlineDashboard,
    AiOutlineShoppingCart,
    AiOutlineUser,
    AiOutlinePicLeft,
    AiOutlinePicRight,
} from 'react-icons/ai';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { BiCategoryAlt } from 'react-icons/bi';
import { FaClipboardList } from 'react-icons/fa';
import { IoIosNotifications } from 'react-icons/io';
import { Layout, Menu, Button, theme } from 'antd';
import { useNavigate, Outlet, Link } from 'react-router-dom';
const { Header, Sider, Content } = Layout;

const MainLayout = () => {
    const [collapsed, setCollapsed] = useState(false);
    const {
        token: { colorBgContainer },
    } = theme.useToken();

    const navigate = useNavigate();
    return (
        <Layout>
            <Sider trigger={null} collapsible collapsed={collapsed}>
                <div className="logo">
                    <h2 className='text-white fs-5 text-center py-3 mb-0'>
                        <span className='sm-logo'>AB</span>
                        <span className='lg-logo'>Admin BUMdes</span>
                    </h2>
                </div>
                <Menu
                    theme="dark"
                    mode="inline"
                    defaultSelectedKeys={['']}
                    onClick={({ key }) => {
                        if (key == 'signout') {

                        } else {
                            navigate(key);
                        }
                    }}
                    items={[
                        {
                            key: '',
                            icon: <AiOutlineDashboard className='fs-4' />,
                            label: 'Dashboard',
                        },
                        {
                            key: 'customers',
                            icon: <AiOutlineUser className='fs-4' />,
                            label: 'Customers',
                        },
                        {
                            key: 'catalog',
                            icon: <AiOutlineShoppingCart className='fs-4' />,
                            label: 'Catalog',
                            children: [
                                {
                                    key: 'product',
                                    icon: <AiOutlineShoppingCart className='fs-4' />,
                                    label: 'Add Product',
                                },
                                {
                                    key: 'product-list',
                                    icon: <AiOutlineShoppingCart className='fs-4' />,
                                    label: 'Product List',
                                },
                                {
                                    key: 'category',
                                    icon: <BiCategoryAlt className='fs-4' />,
                                    label: 'Category',
                                },
                                {
                                    key: 'category-list',
                                    icon: <BiCategoryAlt className='fs-4' />,
                                    label: 'Category List',
                                },
                            ]
                        },
                        {
                            key: 'orders',
                            icon: <FaClipboardList className='fs-4' />,
                            label: 'Orders',
                        },
                        {
                            key: 'enquiries',
                            icon: <FaClipboardList className='fs-4' />,
                            label: 'Enquiries',
                        },
                    ]}
                />
            </Sider>
            <Layout className='site-layout'>
                <Header className='d-flex justify-content-between ps-3 pe-5' style={{ padding: 0, background: colorBgContainer }}>
                    <Button
                        type="text"
                        icon={collapsed ? <AiOutlinePicRight /> : <AiOutlinePicLeft />}
                        onClick={() => setCollapsed(!collapsed)}
                        style={{
                            fontSize: '16px',
                            width: 64,
                            height: 64,
                        }}
                    />
                    <div className='d-flex gap-4 align-items-center dropdown'>
                        <div className='position-relative'>
                            <IoIosNotifications className='fs-4' />
                            <span className='badge bg-warning rounded-circle p-1 position-absolute'>3</span>
                        </div>
                        <div className='d-flex gap-1 align-items-center'>
                            <div>
                                <img height={32} width={32}
                                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/c/c4/20180603_N%C3%BCrnberg_Rock_im_Park_Avenged_Sevenfold_0744.jpg/800px-20180603_N%C3%BCrnberg_Rock_im_Park_Avenged_Sevenfold_0744.jpg'
                                    alt=''
                                />
                            </div>
                            <div role='button' id='dropdownMenuLink' data-bs-toggle='dropdown' aria-expanded='false'>
                                <h5 className='mb-0'>Abiyyu Hade</h5>
                                <p className='mb-0'>abiyyuhade@gmail.com</p>
                            </div>
                            <div className="dropdown-menu" aria-labelledby='dropdownMenuLink'>
                                <li>
                                    <Link to='/' className="dropdown-item py-2 mb-0" style={{ 'height': 'auto', 'lineHeight': '20px' }}>
                                        View Profile
                                    </Link>
                                </li>
                                <li>
                                    <Link to='/' className="dropdown-item py-2 mb-0" style={{ 'height': 'auto', 'lineHeight': '20px' }}>
                                        Log Out
                                    </Link>
                                </li>
                            </div>
                        </div>
                    </div>
                </Header>
                <Content
                    style={{
                        margin: '24px 16px',
                        padding: 24,
                        minHeight: 280,
                        background: colorBgContainer,
                    }}
                >
                    <ToastContainer
                        position="top-right"
                        autoClose={250}
                        hideProgressBar={false}
                        newestOnTop={true}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        theme="light"
                    />
                    <Outlet />
                </Content>
            </Layout>
        </Layout>
    );
}

export default MainLayout;