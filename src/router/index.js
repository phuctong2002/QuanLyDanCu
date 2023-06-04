const { Fragment } = require("react")
const { default: Login } = require("../page/login/index")
const { default: MyLayout } = require("../component/MyLayout")
const {default: HoKhau } = require("../page/home/HoKhau")
const {default: LoginPage } = require("../page/login/LoginPage")
const { default: Member } = require("../page/thanhvien")
const { default: People } = require("../page/nhankhau")
const { default: TamTru } = require("../page/tamtru")
const { default: TamVang } = require("../page/tamvang")
// import LoginPage from "../page/login/LoginPage"
const publicRoute =[
    {component: LoginPage, layout: Fragment, path: "/login"},
]

const privateRoute = [
    {component: HoKhau, layout: MyLayout, path: "/"},
    {component: Member, layout: MyLayout, path: "/hokhau/:id/"},
    {component: People, layout: MyLayout, path: "/nhankhau"},
    {component: TamTru, layout: MyLayout, path: "/tamtru"},
    {component: TamVang, layout: MyLayout, path: "/tamvang"},
]   


module.exports = {privateRoute, publicRoute}
