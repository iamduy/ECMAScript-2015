import listContacts from '../../components/admin/list-contact'
import sidebar from '../../components/admin/sidebar'
import header_admin_prod from "../../components/admin/Header-AD-prod"

const table_contact = {
   async render(){
        return /* html */`
        <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
         <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false"
            class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

         <!-- sidebar -->
         ${ sidebar.render()}

         <!-- main -->
         <div class="flex-1 flex flex-col overflow-hidden">

            <!-- Header -->
            ${ header_admin_prod.render()}

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
                     <span class="mx-3 text-2xl hind font-semibold">List Contacts from Customer</span>
                  </div>



                  <!-- table-products -->
                  <div class="flex flex-col">
                     <div class="-my-2 py-2 overflow-x-auto sm:-mx-6 sm:px-6 lg:-mx-8 lg:px-8">
                          <div class="align-middle inline-block min-w-full shadow overflow-hidden sm:rounded-lg border-b border-gray-200" id="list-contacts">
                         <!-- table list-products-->
                         ${ await listContacts.render()}
                         </div>
                     </div>
                  </div> 

           </main>

         </div>

        </div>
      </div>
     </div>
  </div>
        `
    },
    async afterRender(){
        return /* html */ `
        ${ await listContacts.afterRender()}
        ${header_admin_prod.afterRender()}
      `
    }
}
export default table_contact;