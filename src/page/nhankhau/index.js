import { Table } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";

const columns = [
    {
        title: "Ma Nhan Khau",
        dataIndex: "manhankhau",
        key: "manhankhau",
    },
    {
        title: "Ho Ten",
        dataIndex: "hoten",
        key: "hoten",
    },
    {
        title: "Bi Danh",
        dataIndex: "bidanh",
        key: "bidanh"
    },
    {
        title: "CCCD",
        dataIndex: "cccd",
        key: "cccd"
    },
    {
        title : "Ngay Cap",
        dataIndex : "ngaycap",
        key: "ngaycap"
    },
    {
        title : "Noi Cap",
        dataIndex : "noicap",
        key: "noicap"
    },
    {
        title : "Nghe nghiep",
        dataIndex : "nghenghiep",
        key: "ngheghiep"
    },
    {
        title : "Dan toc",
        dataIndex : "dantoc",
        key : "dantoc"
    },
    {
        title : "Nguyen quan",
        dataIndex : "nguyenquan",
        key : "nguyenquan"
    },
    {
        title : "Noi sinh",
        dataIndex : "noisinh",
        key : "noisinh"
    },
    {
        title : "Ngay sinh",
        dataIndex : "ngaysinh",
        key: "ngaysinh"
    }
]
const People = ()=>{

    const [data, setData] = useState([]);
    useEffect( ()=>{
        axios.get("api/v1/nhankhau", {
            headers: {
                Authorization : "Bearer " + sessionStorage.getItem("token")
            }
        })
            .then( res => {
                const newData = res.data.map( (item, index)=>{
                    return {
                        key: index,
                        manhankhau: item.manhankhau,
                        hoten: item.hoten,
                        bidanh: item.bidanh,
                        cccd: item.cccd,
                        ngaycap: item.ngaycap,
                        noicap: item.noicap,
                        nghenghiep: item.nghenghiep,
                        dantoc: item.dantoc,
                        nguyenquan: item.nguyenquan,
                        ngaysinh: item.ngaysinh,
                        noisinh: item.noisinh,
                    }
                })
                setData( newData)
                console.log(res.data)
            })
            .catch( err => {
                console.log(err);
                // login lai tu dau nhe
            })
    },[]); 
    return <div>
        <div></div>
        <Table columns={columns} dataSource={data} pagination={{pageSize: 5}} />
    </div>
}


export default People;