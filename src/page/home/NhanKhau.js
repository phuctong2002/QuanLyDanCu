import { Space, Table, Tag } from "antd";
const NhanKhau = () => {
  const columns = [
    // {
    //   title: "CCCD",
    //   dataIndex: "cccd",
    //   key: "cccd",
    //   render: (text) => <a>{text}</a>,
    // },
    // {
    //   title: "Mã nhân khẩu",
    //   dataIndex: "manhankhau",
    //   key: "manhankhau",
    //   render: (text) => <a>{text}</a>,
    // },
    {
      title: "Họ và tên",
      dataIndex: "name",
      key: "name",
      render: (text) => <a>{text}</a>,
    },
    {
      title: "Tuổi",
      dataIndex: "age",
      key: "age",
    },
    // {
    //   title: "Bí danh",
    //   dataIndex: "bidanh",
    //   key: "bidanh",
    // },
    // {
    //   title: "Ngày sinh",
    //   dataIndex: "ngaysinh",
    //   key: "ngaysinh",
    // },
    // {
    //   title: "Giới tính",
    //   dataIndex: "gioitinh",
    //   key: "gioitinh",
    // },
    // {
    //   title: "Địa chỉ",
    //   dataIndex: "diachi",
    //   key: "diachi",
    // },
    // {
    //     title: "Quê quán",
    //     dataIndex: "quequan",
    //     key: "quequan",
    //   },
    //   {
    //     title: "Dân tộc",
    //     dataIndex: "dantoc",
    //     key: "dantoc",
    //   },
    //   {
    //     title: "Địa chỉ",
    //     dataIndex: "diachi",
    //     key: "diachi",
    //   },
    {
      title: "Tags",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            let color = tag.length > 5 ? "geekblue" : "green";
            if (tag === "loser") {
              color = "volcano";
            }
            return (
              <Tag color={color} key={tag}>
                {tag.toUpperCase()}
              </Tag>
            );
          })}
        </>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          <a>Invite {record.name}</a>
          <a>Delete</a>
        </Space>
      ),
    },
  ];
  const data = [
    {
      key: "1",
      name: "John Brown",
      age: 32,
      address: "New York No. 1 Lake Park",
      tags: ["nice", "developer"],
    },
    {
      key: "2",
      name: "Jim Green",
      age: 42,
      address: "London No. 1 Lake Park",
      tags: ["loser"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
    {
      key: "3",
      name: "Joe Black",
      age: 32,
      address: "Sydney No. 1 Lake Park",
      tags: ["cool", "teacher"],
    },
  ];

  return (
    <div className="h-[100%] w-[100%] ">
      <Table columns={columns} dataSource={data} pagination={{ pageSize:8}}></Table>
    </div>
  );
};

export default NhanKhau;
