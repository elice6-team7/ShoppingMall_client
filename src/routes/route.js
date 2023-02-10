import Cart from "../pages/CartPage/Cart";
import Login from "../pages/LoginPage/Login";
import Main from "../pages/MainPage/Main";
import DeleteAccount from "../pages/DeleteAccountPage/DeleteAccount";
import Productadd from "../pages/Productaddpage/Productadd";
import Productedit from "../pages/Producteditpage/Productedit";
import Order from "../pages/OrderPage/Order/Order";
import Product from "../pages/ProductPage/ProductList/ProductList";
import ProductDetail from "../pages/ProductPage/ProductDetail/ProductDetail";
import Signup from "../pages/SignupPage/Signup";
import CategoryManage from "../pages/AdminPage/CategoryManagePage/CategoryManage";
import MyAccount from "../pages/MyAccountPage/MyAccount";
import MyDetails from "../pages/MyAccountPage/MyDetailsPage/MyDetails";
import ORDERHISTORY from "../pages/MyAccountPage/UserOrderHistoryPage/OrderHistory";
import Productlist from "../pages/Productlistpage/Productlist";
import Admin from "../pages/AdminPage/Admin";
import UserOrderedDetail from "../pages/MyAccountPage/UserOrderHistoryPage/OrderedDetailPage/OrderedDetail";
import Orderlist from "../pages/Orderlistpage/Orderlist";
import OrderComplete from "../pages/OrderPage/OrderComplete/OrderComplete";

export const ROUTE = {
  HOME: {
    path: "/",
    link: "/",
    element: Main,
  },
  LOGIN: {
    path: "/login",
    link: "/login",
    element: Login,
  },
  REGISTER: {
    path: "/signup",
    link: "/signup",
    element: Signup,
  },
  DELETEACCOUNT: {
    path: "/account/delete",
    link: "/account/delete",
    element: DeleteAccount,
  },
  CART: {
    path: "/cart",
    link: "/cart",
    element: Cart,
  },
  PRODUCTADD: {
    path: "/admin/product/add",
    link: "/admin/product/add",
    element: Productadd,
  },
  PRODUCTEDIT: {
    path: "/admin/product/edit",
    link: "/admin/product/edit",
    element: Productedit,
  },
  ORDER: {
    path: "/order",
    link: "/order",
    element: Order,
  },
  ORDERCOMPELETE: {
    path: "/order/complete",
    link: "/order/complete",
    element: OrderComplete,
  },
  PRODUCTALL: {
    path: "/product",
    link: "/product",
    element: Product,
  },
  PRODUCT: {
    path: "/product/:category",
    link: "/product/:category",
    element: Product,
  },
  PRODUCTDETAIL: {
    path: "/product/detail/:id",
    link: "/product/detail/:id",
    element: ProductDetail,
  },
  CATEGORYMANAGE: {
    path: "/admin/category/manage",
    link: "/admin/category/manage",
    element: CategoryManage,
  },
  MYACCOUNT: {
    path: "/myaccount",
    link: "/myaccount",
    element: MyAccount,
  },
  MYDETIALS: {
    path: "/myaccount/detail",
    link: "/myaccount/detail",
    element: MyDetails,
  },
  USERORDERHISTORY: {
    path: "/myaccount/order",
    link: "/myaccount/order",
    element: ORDERHISTORY,
  },
  USERORDEREDDETAIL: {
    path: "/myaccount/order/detail/:orderId",
    link: "/myaccount/order/detail",
    element: UserOrderedDetail,
  },
  PRODUCTLIST: {
    path: "/admin/product/list",
    link: "/admin/product/list",
    element: Productlist,
  },
  ADMIN: {
    path: "/admin",
    link: "/admin",
    element: Admin,
  },
  ORDERLIST: {
    path: "/order/list",
    link: "/order/list",
    element: Orderlist,
  },
};

export const ROUTE_ARR = Object.values(ROUTE);
