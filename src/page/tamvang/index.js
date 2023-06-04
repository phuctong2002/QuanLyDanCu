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
import moment from 'moment';
import { useForm } from 'antd/es/form/Form';
import axios from "axios";
import { useEffect, useState } from "react";
import {IoMdAdd} from "react-icons/io";
import 'moment/locale/vi'; // Import locale (tiếng Việt trong ví dụ này)

moment.locale('vi'); // Đặt locale thành tiếng Việt

const TamVang = () => {
    const [form] = useForm();
    const [data, setData] = useState([]);
    const [isOpen, setIsOpen] = useState( false);
    const [title, setTitle] = useState("");
    const [call, setCall] = useState(0);
    const [ngaydi, setNgaydi] = useState(null);
    const [ngayve, setNgayve] = useState( null);

    const handleNgaydi = (date)=>{
        setNgaydi(date);
    }
    const handleNgayve = (date)=>{
        setNgayve(date);
    }
    

    const confirm = (record) => {
        axios.delete(`/api/v1/tamvang/${record.matamvang}`,{
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        })
            .then( (res)=>{
                console.log(res);
                const newData = data.filter( item => item.matamvang !== record.matamvang)
                console.log( newData);
                setData(newData)
            })
            .catch( err=>{
                console.log(err);
            })
        message.success('Detele');
    };
    

    const handleEdit = (record)=>{
        console.log( record);
        setTitle("Edit");
        setIsOpen( true);
        const ngaydi = new Date( record.ngaydi);
        const ngayve = new Date( record.ngayve);
        form.setFieldsValue({
            "manhankhau" : record.manhankhau,
            "hoten": record.hoten,
            // "ngaydi": ngaydi,
            // "ngayve": ngayve,
            "lido": record.lido,
            "noitamtru": record.noitamtru,
        })
    }
    const handleAdd = ()=>{
        setIsOpen(true);
        setTitle("Add");
        form.setFieldsValue({
            "manhankhau" : "",
            "hoten": "",
            "ngaydi": null,
            "ngayve": null,
            "lido": "",
            "noitamtru": "",
        })
    }

    const columns = [
        {
          title: "Id",
          dataIndex: "matamvang",
          key: "matamvang",
        },
        {
          title: "Ma nhan khau",
          dataIndex: "manhankhau",
          key: "manhankhau",
        },
        {
          title: "Ho ten",
          dataIndex: "hoten",
          key: "hoten",
        },
        {
          title: "Ngay di",
          dataIndex: "ngaydi",
          key: "ngaydi",
        },
        {
          title: "Ngay ve",
          dataIndex: "ngayve",
          key: "ngayve",
        },
        {
            title: "Noi tam tru",
            dataIndex: "noitamtru",
            key: "noitamtru",
        },
        {
          title: "Li do",
          dataIndex: "lido",
          key: "lido",
        },
        {
          title: "Action",
          key: "action",
          render: (_, record) => (
            <Space size="middle">
              <Button className="bg-[blue] block" type="primary" onClick={()=> handleEdit(record)}>Edit</Button>
              <Popconfirm title="Are you sure!" onConfirm={()=> confirm(record)}>
                <Button danger>Delete</Button>
              </Popconfirm>
            </Space>
          ),
        },
      ];
    const handleOk = () => {
        if( title === "Edit"){
            console.log("Edit");
            console.log(form.getFieldsValue());
        }else{
            const data = form.getFieldsValue();
            const ngaydi1 = ngaydi.format("YYYY-MM-DD");
            const ngayve1 = ngayve.format("YYYY-MM-DD");
            axios.post( "/api/v1/tamvang", 
            {
                matamvang: null,
                manhankhau: Number(data.manhankhau),
                hoten: data.hoten,
                ngaydi: ngaydi1,
                ngayve: ngayve1,
                lido: data.lido,
                noitamtru: data.noitamtru,
            }
            ,{
                headers: {
                    Authorization: "Bearer " + sessionStorage.getItem("token")
                }
            })
                .then( (res)=>{
                    console.log(res);
                    const newCall = call + 1;
                    setCall(newCall);
                })
                .catch( err => {
                    console.log(err)
                })
        }
        setIsOpen(false);
    };
    const handleCancel = () => {
        setIsOpen(false);
    };
    useEffect( ()=>{
        axios.get( "/api/v1/tamvang", {
            headers: {
                Authorization: "Bearer " + sessionStorage.getItem("token")
            }
        })
            .then( res => {
                const newData = res.data.map( item => item)
                setData( newData );
            })
            .catch( err => {
                console.log(err + "\n" + "nen sang trang dang nhap nhe anh em");
            })
    },[call])
    return <div>
        <div>
            <Button onClick={handleAdd} className='block-inline rounded-[20px] w-[100px] bg-[#4096ff] flex items-center justify-center' type="primary" icon={<IoMdAdd className='text-[white] text-[20px] inline mr-[4px]' />}>
                Add
            </Button>
        </div>
        <Table columns={columns} dataSource={data} pagination={{pageSize: 8}}></Table>
        <Modal title={title} open={isOpen} onOk={handleOk} onCancel={handleCancel}>
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
                <Form.Item label="Ma nhan khau" name="manhankhau">
                    <Input />
                </Form.Item>
                <Form.Item label="Ho ten" name="hoten">
                    <Input />
                </Form.Item>
                <Form.Item label="Ngay di" name="ngaydi">
                    <DatePicker onChange={handleNgaydi} value={ngaydi} format="YYYY-MM-DD"  />
                </Form.Item>
                <Form.Item label="Ngay ve" name="ngayve">
                    <DatePicker onChange={handleNgayve} value={ngayve} format="YYYY-MM-DD"  />
                </Form.Item>
                <Form.Item label="Noi tam tru" name="noitamtru">
                    <Input />
                </Form.Item>
                <Form.Item label="Li do" name="lido">
                    <Input />
                </Form.Item>
            </Form>
        </Modal>
    </div>;
};
export default TamVang;
