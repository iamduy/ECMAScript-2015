import sidebar from '../../components/admin/sidebar'
import header_admin_prod from "../../components/admin/Header-AD-prod"
import ListOrder from '../../components/admin/list-order'
import { $ } from '../../until'
import Order_Detail from '../../api/Order_Detail'

const table_order = {
    async render() {
        return /* html */`
        <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200" id='main'>
        <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
           class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

        <!-- sidebar -->
        ${sidebar.render()}

        <!-- main -->
        <div class="flex-1 flex flex-col overflow-hidden">

           <!-- Header -->
           ${header_admin_prod.render()}

          <!-- main-content -->
          <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
          <div class="container mx-auto px-6 py-8">
             <h3 class="text-gray-700 text-3xl font-medium">Dashboard</h3>

                   <div class="mt-8"></div>
                   <div class="flex items-center px-2 mt-6 mb-2 text-gray-900">
                    <svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                    <path fill-rule="evenodd"
                       d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                       clip-rule="evenodd" />
                    </svg>
                    <span class="mx-3 text-2xl hind font-semibold">Table Order</span>
                 </div>

                 <div class="flex flex-col">
                    <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                         <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200" id='list_order'>
                         ${await ListOrder.render()}
                        </div>
                    </div>
                 </div> 

                 <!-- modal -->
                    <div class="hidden w-9/12 h-auto bg-gray-100 border border-gray-300 rounded absolute top-20 z-10 left-40 z-40" id="modal_order_detail">
                    <div class="absolute right-3 top-2 ">
                        <button id="btn_delete" class="focus:outline-none"><i class="fas fa-times text-3xl"></i></button>
                    </div>
                    <table class="items-center w-full bg-red-300 border-collapse mt-10">
                    <thead>
                            <tr>
                                <th
                                class="px-6 bg-red-300 text-gray-600 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                ID Order 
                                </th>
                                <th
                                class="px-6 bg-red-300 text-gray-600 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Name Product
                                </th>
                                <th
                                class="px-6 bg-red-300 text-gray-600 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Image
                                </th>
                                <th
                                class="px-6 bg-red-300 text-gray-600 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Price
                                </th>
                                <th
                                class="px-6 bg-red-300 text-gray-600 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-cư">
                                Quantity
                                </th>
                                <th
                                class="px-6 bg-red-300 text-gray-600 align-middle border border-solid border-white py-3 text-xs uppercase border-l-0 border-r-0 whitespace-no-wrap font-semibold text-left">
                                Status
                                </th>
                            </tr>
                        </thead>
                        <tbody id="list_order_detail"></tbody>
                    </table>
                </div>   

            </main>
        </div>
        </div>
        </div>
        </div>
        </div>

        `
    },
    async afterRender() {
        await ListOrder.afterRender();

        const btns = $('#list_order .btn_detail');
        const modal_order_detail = $('#modal_order_detail');

        const btn_delete = $('#btn_delete');

        btns.forEach(element => {
            element.onclick = async () => {
                $('#main').classList.add('blur-md');
                modal_order_detail.classList.remove('hidden');
                modal_order_detail.classList.add('flex');

                const id = element.dataset.id;
                const { data: OrderDetail } = await Order_Detail.getAll();

                const Order_detail_ById = OrderDetail.filter(items => items.id_order === id);
                const modal = Order_detail_ById.map(items => {
                    return `
                    <tr>
                    <th
                    class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4 text-left">
                    ${items.id_order}
                    </th>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    ${items.name}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    <div class="bg-cover bg-center w-20 h-20" style="background-image: url(${items.image})"></div>
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    ${items.price}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-center text-xs whitespace-no-wrap p-4">
                    ${items.sl}
                    </td>
                    <td class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-no-wrap p-4">
                    ${items.status ? '<span class="text-green-500"><i class="fas fa-circle"></i> Stoking</span>' : '<span class="text-red-500"><i class="fas fa-circle"></i> Out of stockg</span>'}
                    </td>
              </tr>
                    `
                }).join('');

                $('#list_order_detail').innerHTML = modal;
            }

            btn_delete.onclick = () => {
                modal_order_detail.classList.remove('flex');
                modal_order_detail.classList.add('hidden');
                $('#main').classList.remove('blur-md');

            }
        });

    }
}
export default table_order;