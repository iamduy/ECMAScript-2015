import Header from '../../components/website/Header'
import Footer from '../../components/website/Footer'
import { CheckLogin, $, parseRequestUrl } from '../../until'
import OrderApi from '../../api/orderAPI'
import OrderDetail from '../../api/Order_Detail'

const OrderPage = {
    async render() {
        const { resource: URL } = parseRequestUrl();
        CheckLogin(URL);
        const user = JSON.parse(localStorage.getItem('user'));
        const arr_product_cart = JSON.parse(localStorage.getItem('arr_product_cart'));
        if (arr_product_cart != null) {
            var subtotal = arr_product_cart.reduce((sum, { sl, price }) => sum + sl * price, 0);
        }
        //id order
        const { data: order } = await OrderApi.getAll();
        const newid = order.length + 1;
        return /* html */`
        ${Header.render()}
        <form id="order">  

                <input type="hidden" id="subtotal" value="${subtotal}">
                <input type="hidden" id="id" value="${newid}">
                <input type="hidden" id="id_order_maker" value="${user.id}"> 

            <div class="grid grid-cols-2 gap-4 px-20 mb-10">
            <div class="h-96 ml-10  border border-gray-300">
                <div class=" border-b border-black px-5 py-3 text-md font-bold">
                    <i class="fas fa-home"></i> Shipping Address
                </div>
                <div class="p-5">
                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label class="block text-sm font-medium text-gray-700">Order Maker</label>
                        <input type="text" 
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white  shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm"  value="${user.name}" disabled>
                    </div>
                    
                    
                    
                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label class="block text-sm font-medium text-gray-700">Name of Consignee</label>
                        <div class="relative">
                            <input type="text" 
                                class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="name_of_consignee">
                                <span class="err absolute right-3 top-3 text-xs "></span>
                        </div>
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label class="block text-sm font-medium text-gray-700">Street Address</label>
                        <div class="relative">
                        <input type="text" 
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="address">
                            <span class="err absolute right-3 top-3 text-xs "></span>
                        </div>
                    </div>

                    <div class="col-span-6 sm:col-span-3 lg:col-span-2 mb-2">
                        <label class="block text-sm font-medium text-gray-700">Phone Number</label>
                        <div class=" relative">
                        <input type="text" 
                            class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-whiteshadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm" id="phone">
                            <span class="err absolute right-3 top-3 text-xs "></span>
                        </div>
                    </div>
                </div>
            </div>
            <div class=" mr-10  border border-gray-300">
                <div class=" border-b border-black px-5 py-3 text-md font-bold">
                    <i class="fas fa-list-ul"></i> Order Summary
                </div>
                <div class="p-5">
                    <p>${arr_product_cart.length} ITEM IN CART</p>
                    <hr class="my-3 text-gray-500">
                    ${arr_product_cart.map(product => {
            return /* html */`
                                <div class="flex my-3">
                                
                                <img src="${product.image}" alt="" class="bg-cover bg-center w-1/4 h-32 mr-3">

                                <div class="w-3/4">

                                <div class="flex">
                                <p class="text-xl flex-1 text-left font-semibold text-gray-500">
                                 ${product.name} 
                                </p> 
                                <span class="text-black justify-content-end"> Quantity : ${product.sl}</span>
                                </div>
                                   
                                    
                                    
                                    <p class="w-full flex-1 text-lg text-left font-bold  text-gray-900 mt-1">$${product.price}</p>
                                </div>
                            </div>
                        `
        }).join('')}
                    <div class="mt-5 flex items-center justify-between">
                        <p class="text-left font-bold">Subtotal</p>
                        <p class="text-right font-bold">$${subtotal}</p>
                    </div>
                    <div class=" mt-5 flex items-center justify-between">
                        <p class="text-left italic font-bold">Shipping</p>
                        <p class="text-right font-bold">$15</p>
                    </div>
                    <div class=" mt-5 flex items-center justify-between">
                        <p class="text-left font-bold">Order Total</p>
                        <p class="text-right text-lg font-bold">$${subtotal + 15}</p>
                    </div>
                    <button type="submit" class="px-6 py-2 uppercase bg-black border-none text-white w-full mt-5">Place Order</button>
                </div>
            </div>
        </div>
        </form> 
        ${Footer.render()}
        `
    },
    async afterRender() {
        await Header.afterRender();

        $('#order').addEventListener('submit', async e => {
            e.preventDefault();
            const order = {
                "id": $('#id').value,
                "id_order_maker": $('#id_order_maker').value,
                "name_of_consignee": $('#name_of_consignee').value,
                "address": $('#address').value,
                "phone": $('#phone').value,
                "subtotal": $('#subtotal').value
            }
            const arr_product_cart = JSON.parse(localStorage.getItem('arr_product_cart'));
            arr_product_cart.forEach(product => {
                const order_detail = { id_order: $('#id').value, ...product , id : ''};
                OrderDetail.add(order_detail);
            });
            if (OrderApi.add(order)) {
                localStorage.removeItem('arr_product_cart');
                alert('Đặt hàng thành công!');
                window.location.hash = '';
            }
        })
    }
}
export default OrderPage;