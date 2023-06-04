import {
  FileOutlined,
  PieChartOutlined,
  UserOutlined,
  DesktopOutlined,
  TeamOutlined,
  LogoutOutlined,
  SearchOutlined
} from "@ant-design/icons";
import { Breadcrumb,Button, Layout, Menu, theme } from "antd";
import { useState } from "react";
import {BsFillHouseFill, BsFillPeopleFill, BsHouseAddFill, BsHouseDashFill} from "react-icons/bs"
import {HiReceiptTax} from "react-icons/hi";
import { useNavigate } from "react-router-dom";
const { Header, Content, Footer, Sider } = Layout;

function getItem(label, key, icon, route) {
  return {
    key,
    icon,
    route,
    label,
  };
}

const items = [
  getItem("Ho Khau", "1", <BsFillHouseFill/>, "/"),
  getItem("Nhan Khau", "2", <BsFillPeopleFill />, "/nhankhau"),
  getItem("Tam tru", "3", <BsHouseAddFill/>, "/tamtru"),
  getItem("Tam vang", "4", <BsHouseDashFill />, "/tamvang"),
  getItem("Thu phí, đóng góp", "9", <HiReceiptTax />, "/phi"),
];
const MyLayout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  const navigate = useNavigate();
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const handleLogout = ()=>{
    sessionStorage.removeItem("token");
    navigate("/login");
  }


  return (
    <Layout
      style={{
        minHeight: "100vh",
      }}
    >
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div
          style={{
            height: 32,
            margin: 16,
            background: "rgba(255, 255, 255, 0.2)",
          }}
        />
        <Menu
          theme="dark"
          defaultSelectedKeys={["0"]}
          mode="inline"
          // items={items}
        >
          {
            items.map( (item, index)=>{
              return <Menu.Item key={index} icon={item.icon} onClick={()=> navigate(item.route)}>
                {item.label}
              </Menu.Item>
            })
          }
        </Menu>
      </Sider>
      <Layout className="site-layout">
        <Header className="flex justify-end items-center"
          style={{
            padding: 0,
            background: colorBgContainer,
          }}
        >
          <Button onClick={handleLogout} className="flex items-center bg-[#334454] mr-[50px]" type="primary" icon={<LogoutOutlined  className="block text-[16px]"/>}>
            Log out
          </Button>
        </Header>
        <Content
          style={{
            margin: "20px 20px",
          }}
        >
          <div
            className="h-[100%] shadow-lg rounded-lg p-4"
            style={{
              padding: 24,
              background: colorBgContainer,
            }}
          >
            {children}
          </div>
        </Content>
      </Layout>
    </Layout>
  );
};
export default MyLayout;
