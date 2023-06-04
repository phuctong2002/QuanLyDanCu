import { Space, Table, Tag } from "antd";
import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
const NhanKhau = () => {
  const navigate = useNavigate();


  const columns = [
    {
      title: "Ma ho khau",
      dataIndex: "mahokhau",
      key: "name",
      render: (text) => <p className="block min-w-[20px] text hover:cursor-pointer" onClick={()=> navigate(`/hokhau/${text}/`)}>{text}</p>,
    },
    {
      title : "Ma chu ho",
      dataIndex: "machuho",
      key: "machuho"
    },
    {
      title: "Chu ho",
      dataIndex: "ten",
      key: "ten",
    },
    {
      title: "Dia chi",
      dataIndex: "diachi",
      key : "diachi"
    },
    
  ];
  const [data, setData] = useState([]);
  useEffect(()=>{
    axios.get("/api/v1/hokhau", {
      headers: {
        Authorization: "Bearer " + sessionStorage.getItem("token"),
      }
    })
      .then( res =>{
        const newData = res.data.map( (item, index)=>{
          return {
            key: index,
            mahokhau: item.mahokhau,
            machuho: item.manhankhau,
            ten: item.hoten,
            diachi: item.diachi,
          }
        })
        console.log( newData );
        setData( newData );
      })
  },[])

  return (
    <div className="h-[100%] w-[100%] ">
      <Table columns={columns} dataSource={data} pagination={{ pageSize:8}}></Table>
    </div>
  );
};

export default NhanKhau;
