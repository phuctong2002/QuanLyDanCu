const { Fragment } = require("react")
const { default: Login } = require("../page/login")
const { default: MyLayout } = require("../component/MyLayout")
const {default: NhanKhau } = require("../page/home/NhanKhau")

const publicRoute =[
    {component: Login, layout: Fragment, path: "/login"},
]

const privateRoute = [
    {component: NhanKhau, layout: MyLayout, path: "/"}
]


module.exports = {privateRoute, publicRoute}
