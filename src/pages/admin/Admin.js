import listProd from '../../components/admin/list-product'
import listCate from '../../components/admin/list-category'
import sidebar from '../../components/admin/sidebar'
import header_admin_prod from "../../components/admin/Header-AD-prod"
import productAPI from '../../api/productAPI'
import categoryAPI from '../../api/categoryAPI'
const admin = {
  async render(){

   const {data : products } = await productAPI.getAll();
   const {data : category } = await categoryAPI.getAll();
 
   
         return /* html */`

         <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
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

                  <div class="mt-4">
                     <div class="flex flex-wrap -mx-6">
                     <div class="w-full px-6 sm:w-1/2 xl:w-1/3">
                        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                           <div class="p-3 rounded-full bg-indigo-600 bg-opacity-75">
                           <svg class="h-8 w-8 text-white" viewBox="0 0 28 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M18.2 9.08889C18.2 11.5373 16.3196 13.5222 14 13.5222C11.6804 13.5222 9.79999 11.5373 9.79999 9.08889C9.79999 6.64043 11.6804 4.65556 14 4.65556C16.3196 4.65556 18.2 6.64043 18.2 9.08889Z"
                                 fill="currentColor"></path>
                              <path
                                 d="M25.2 12.0444C25.2 13.6768 23.9464 15 22.4 15C20.8536 15 19.6 13.6768 19.6 12.0444C19.6 10.4121 20.8536 9.08889 22.4 9.08889C23.9464 9.08889 25.2 10.4121 25.2 12.0444Z"
                                 fill="currentColor"></path>
                              <path
                                 d="M19.6 22.3889C19.6 19.1243 17.0927 16.4778 14 16.4778C10.9072 16.4778 8.39999 19.1243 8.39999 22.3889V26.8222H19.6V22.3889Z"
                                 fill="currentColor"></path>
                              <path
                                 d="M8.39999 12.0444C8.39999 13.6768 7.14639 15 5.59999 15C4.05359 15 2.79999 13.6768 2.79999 12.0444C2.79999 10.4121 4.05359 9.08889 5.59999 9.08889C7.14639 9.08889 8.39999 10.4121 8.39999 12.0444Z"
                                 fill="currentColor"></path>
                              <path
                                 d="M22.4 26.8222V22.3889C22.4 20.8312 22.0195 19.3671 21.351 18.0949C21.6863 18.0039 22.0378 17.9556 22.4 17.9556C24.7197 17.9556 26.6 19.9404 26.6 22.3889V26.8222H22.4Z"
                                 fill="currentColor"></path>
                              <path
                                 d="M6.64896 18.0949C5.98058 19.3671 5.59999 20.8312 5.59999 22.3889V26.8222H1.39999V22.3889C1.39999 19.9404 3.2804 17.9556 5.59999 17.9556C5.96219 17.9556 6.31367 18.0039 6.64896 18.0949Z"
                                 fill="currentColor"></path>
                           </svg>
                           </div>

                           <div class="mx-5">
                           <h4 class="text-2xl font-semibold text-gray-700">${products.length}</h4>
                           <div class="text-gray-500">Products</div>
                           </div>
                        </div>
                     </div>

                     <div class="w-full mt-6 px-6 sm:w-1/2 xl:w-1/3 sm:mt-0">
                        <div class="flex items-center px-5 py-6 shadow-sm rounded-md bg-white">
                           <div class="p-3 rounded-full bg-yellow-600 bg-opacity-75">
                           <svg class="h-8 w-8 text-white" viewBox="0 0 28 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path
                                 d="M4.19999 1.4C3.4268 1.4 2.79999 2.02681 2.79999 2.8C2.79999 3.57319 3.4268 4.2 4.19999 4.2H5.9069L6.33468 5.91114C6.33917 5.93092 6.34409 5.95055 6.34941 5.97001L8.24953 13.5705L6.99992 14.8201C5.23602 16.584 6.48528 19.6 8.97981 19.6H21C21.7731 19.6 22.4 18.9732 22.4 18.2C22.4 17.4268 21.7731 16.8 21 16.8H8.97983L10.3798 15.4H19.6C20.1303 15.4 20.615 15.1004 20.8521 14.6261L25.0521 6.22609C25.2691 5.79212 25.246 5.27673 24.991 4.86398C24.7357 4.45123 24.2852 4.2 23.8 4.2H8.79308L8.35818 2.46044C8.20238 1.83722 7.64241 1.4 6.99999 1.4H4.19999Z"
                                 fill="currentColor"></path>
                              <path
                                 d="M22.4 23.1C22.4 24.2598 21.4598 25.2 20.3 25.2C19.1403 25.2 18.2 24.2598 18.2 23.1C18.2 21.9402 19.1403 21 20.3 21C21.4598 21 22.4 21.9402 22.4 23.1Z"
                                 fill="currentColor"></path>
                              <path
                                 d="M9.1 25.2C10.2598 25.2 11.2 24.2598 11.2 23.1C11.2 21.9402 10.2598 21 9.1 21C7.9402 21 7 21.9402 7 23.1C7 24.2598 7.9402 25.2 9.1 25.2Z"
                                 fill="currentColor"></path>
                           </svg>
                           </div>

                           <div class="mx-5">
                           <h4 class="text-2xl font-semibold text-gray-700">${category.length}</h4>
                           <div class="text-gray-500">Categories</div>
                           </div>
                        </div>
                     </div>

                   
                     </div>
                  </div>

                  <div class="mt-8"></div>
                  <div class="flex items-center px-2 mt-6 mb-2 text-gray-900">
                  <svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                  <path fill-rule="evenodd"
                     d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                     clip-rule="evenodd" />
                  </svg>
                  <span class="mx-3 text-2xl hind font-semibold">Table Product</span>
                  </div>
                  

                  <div class="my-4">
                     <a href="/#/products-add"
                     class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" class='w-4 h-4' viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                           d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                           clip-rule="evenodd" />
                     </svg>
                     <span>ADD PRODUCT</span>
                     </a>
                  </div>
                  <!-- table-products -->
                  <div class="flex flex-col">
                     <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                     <div
                        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
                        id="list-products">
                        <!-- table list-products-->
                        ${await listProd.render()}
                     </div>
                     </div>
                  </div>

                  <!--/////////////////////////-->

                  <div class="mt-8"></div>

                  <div class="flex items-center px-2 mt-6 mb-2 text-gray-900">
                     <svg class="h-6 w-6 " xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                     <path fill-rule="evenodd"
                        d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                        clip-rule="evenodd" />
                     </svg>
                     <span class="mx-3 text-2xl hind font-semibold">Table Categories</span>
                  </div>

                  <div class="my-4">
                     <a href="/#/category-add"
                     class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none">
                     <svg xmlns="http://www.w3.org/2000/svg" class='w-4 h-4' viewBox="0 0 20 20" fill="currentColor">
                        <path fill-rule="evenodd"
                           d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z"
                           clip-rule="evenodd" />
                     </svg>
                     <span>ADD CATEGORY</span>
                     </a>
                  </div>

                  <!-- table-products -->
                  <div class="flex flex-col">
                     <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                     <div
                        class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200"
                        id="list-categories">
                        <!-- table list-products-->
                        ${await listCate.render()}
               </main>

            </div>

         </div>


         </div>
         </div>
      </div>
         
         `;
    },

    async afterRender(){
       return /* html */ `
       ${header_admin_prod.afterRender()}
         ${ await listProd.afterRender()}
         ${ await listCate.afterRender()}
       `
    }
}
export default admin;

