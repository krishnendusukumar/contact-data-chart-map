import React from 'react'
import 'antd/dist/reset.css';
import { DeleteOutlined, EditOutlined } from '@ant-design/icons';
import { Table } from "antd";
import { useSelector } from "react-redux"
import { Navigate, useNavigate } from 'react-router-dom';
import { store } from '../store';

const Details = () => {

    const myData = useSelector(() => store.getState().formData.list);
    const navigate = useNavigate();

    const columns = [

        {
            id: "0",
            key: 'firstName',
            title: 'firstName',
            dataIndex: 'firstName',
        },
        {
            id: "1",
            key: "lastName",
            title: "lastName",
            dataIndex: "lastName",
        },
        {
            id: "2",
            key: "status",
            title: "status",
            dataIndex: "status",
        },
    ];

    return (
        <div>
            <button
                style={{ backgroundColor: "#2266d4" }}
                className=" ml-10 inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]"
                onClick={() => navigate("/")}>
                Back
            </button>
            <Table dataSource={myData} columns={columns} />
        </div>
    )
}

export default Details
