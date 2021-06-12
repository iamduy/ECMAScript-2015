/** Thêm dữ liệu cứ import */
import homepage from './pages/website/Home'
import About from './pages/website/About'
import Blog from './pages/website/Blog'
import Contacts from './pages/website/Contacts'
import shop from './pages/website/Shop'
import categoryPage from './pages/website/category'
import Detail from './pages/website/Detail-prod'
import detail_blog from './pages/website/Detail-blog'
import Error404 from './pages/Error404'
import { parseRequestUrl, $ } from './until.js' // định nghĩa đường link
import admin from './pages/admin/Admin'
import ProductAdd from './pages/admin/ProductAdd'
import ProductEdit from './pages/admin/productEdit'
import categoryAdd from './pages/admin/CategoryAdd'
import categoryEdit from './pages/admin/CategoryEdit'
import login from './pages/website/login'
import register from './pages/website/register'
import table_category from './pages/admin/table-category'
import table_product from './pages/admin/table-product'
import table_contact from './pages/admin/table-contact'


import CartPage from './pages/website/CartPage'
import OrderPage from './pages/website/OrderPage'
import table_order from './pages/admin/table-order'

/** Tạo đường dẫn */
const routes = {

    // routes dành cho website
    '/': homepage,
    '/about': About,
    '/category/:id': categoryPage,
    '/shop': shop,
    '/products/:id': Detail,
    '/blog': Blog,
    '/blog/:id': detail_blog,
    '/contacts': Contacts,
    '/admin': admin,
    '/list-category': table_category,
    '/list-product': table_product,
    '/list-contact': table_contact,
    '/list-order' : table_order,
    // routes thêm sửa xóa sản phẩm và danh mục admin
    '/products-add': ProductAdd,
    '/products-edit/:id': ProductEdit,
    '/category-add': categoryAdd,
    '/category-edit/:id': categoryEdit,

    // routes user login logout
    '/login': login,
    '/register': register,
    '/cart': CartPage,
    '/checkout': OrderPage


}
const router = async () => {

    const request = parseRequestUrl();

    const parseUrl = (request.resource ? `/${request.resource}` : '/') + (request.id ? '/:id' : '') + (request.action ? `/${request.action}` : '');


    const screen = routes[parseUrl] ? routes[parseUrl] : Error404;

    const main = $('#main-content');

    main.innerHTML = await screen.render();
    if (screen.afterRender) {
        await screen.afterRender();
    }

}


window.addEventListener('DOMContentLoaded', router);
window.addEventListener('hashchange', router)