import {
    Button,
    DatePicker,
    Form,
    Input,
    Space,
    Table,
    Modal,
    message, 
    Popconfirm
} from 'antd';
import { useForm } from 'antd/es/form/Form';
import axios from "axios";
import { useState } from "react";
import {IoMdAdd} from "react-icons/io";
import { useParams } from "react-router-dom";
import 'moment/locale/vi'; // Import locale (tiếng Việt trong ví dụ này)
import moment from 'moment';
moment.locale('vi'); // Đặt locale thành tiếng Việt
const columns = [
    {
        title: "Ma Nhan Khau",
        dataIndex: "manhankhau",
        key: "manhankhau",
    },
    {
        title: "Ho Ten",
        dataIndex: "hoten"
    },
    {
        title: "Bi Danh",
        dataIndex: "bidanh"
    },
    {
        title: "CCCD",
        dataIndex: "cccd"
    },
    {
        title : "Ngay Cap",
        dataIndex : "ngaycap"
    },
    {
        title : "Noi Cap",
        dataIndex : "noicap"
    },
    {
        title : "Nghe nghiep",
        dataIndex : "nghenghiep"
    },
    {
        title : "Dan toc",
        dataIndex : "dantoc"
    },
    {
        title : "Nguyen quan",
        dataIndex : "nguyenquan"
    },
    {
        title : "Noi sinh",
        dataIndex : "noisinh"
    },
    {
        title : "Ngay sinh",
        dataIndex : "ngaysinh"
    },
    {
        title : "Quan he",
        dataIndex : "quanhe"
    },
    {
        title : "Ghi chu",
        dataIndex : "ghichu"
    }
]
const Member = ()=>{
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState( false);
    const [ngaysinh, setNgaysinh] = useState(null);
    const [form] = useForm();
    const [load, setLoad] = useState(0);
    const {id} = useParams();

    const handleAdd = ()=>{
        console.log("Add thanh vien nhe");
        setIsOpen(true);
    }

    const handleOk = () => {
        setIsOpen(false);
        // them thanh vien moi o day nhe 
        const data = form.getFieldsValue();
        const date = ngaysinh.format("YYYY-MM-DD");
        axios.post( `/api/v1/thanhvien/${id}`, {
            manhankhau: null,
            hoten: data.hoten,
            bidanh: data.bidanh,
            cccd: null,
            ngaycap: null,
            noicap: null,
            nghenghiep: null,
            dantoc: data.datoc,
            nguyenquan: data.nguyenquan,
            ngaysinh: data.ngaysinh,
            noisinh: data.noisinh,
            ghichu: null,
            quanhe: data.quanhe
        },{
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        }) 
            .then( res =>{
                console.log(res);
                const tmp = load + 1;
                setLoad(tmp);
            })   
            .catch( err =>{
                console.log(err);
            })    
    };
    const handleCancel = () => {
        setIsOpen(false);
    };

    const handleDate = (date)=>{
        if( date){
            setNgaysinh(date);
        }
    }

    useState( ()=>{
        axios.get(`/api/v1/thanhvien/${id}`, {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        })
            // id cua ho khau nhe anh em
            .then( (res) => {
                const newData = res.data.map((item, index)=>{
                    return item
                })
                console.log(newData);
                setData( newData);
            })
            .catch( (err)=>{
                console.log(err)
            })
    },[load])


    return <div>
        <div className="button-container mb-[10px]">
            <Button onClick={handleAdd} className='block-inline w-[100px] bg-[#4096ff] flex items-center justify-center rounded-[20px]' type="primary" icon={<IoMdAdd className='text-[white] text-[20px] inline mr-[4px]' />}>
                Add
            </Button>
        </div>
        <Table columns={columns} dataSource={data} pagination={{pageSize: 5}} />
        <Modal title="Add member" open={isOpen} onOk={handleOk} onCancel={handleCancel}>
        <Form
                form={form}
                labelCol={{
                    span: 6,
                }}
                wrapperCol={{
                    span: 18,
                }}
                labelAlign='left'
                layout="horizontal"
                initialValues="default"
                style={{
                    maxWidth: 600,
                }}
            >
                <Form.Item label="Ho ten" name="hoten">
                    <Input />
                </Form.Item>
                <Form.Item label="Bi danh" name="bidanh">
                    <Input />
                </Form.Item>
                <Form.Item label="Dan toc" name="dantoc">
                    <Input />
                </Form.Item>
                <Form.Item label="Nguyen quan" name="nguyenquan">
                    <Input />
                </Form.Item>
                <Form.Item label="Noi sinh" name="noisinh">
                    <Input />
                </Form.Item>
                <Form.Item label="Ngay sinh" name="ngaysinh">
                    <DatePicker value={ngaysinh} onChange={handleDate} format="YYYY-MM-DD"  />
                </Form.Item>
                <Form.Item label="Quan he" name="quanhe">
                    <Input />
                </Form.Item>
                
            </Form>
        </Modal>
    </div>
}


export default Member;