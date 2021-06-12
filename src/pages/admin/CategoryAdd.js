import categoryAPI from '../../api/categoryAPI';
import { $ } from "../../until.js";
import sidebar from '../../components/admin/sidebar'
import header_admin_prod from "../../components/admin/Header-AD-prod"
import swal from 'sweetalert';
import firebase from 'firebase'
const categoryAdd = {

    async render() {

        return/* html */ `

        <div x-data="{ sidebarOpen: false }" class="flex h-screen bg-gray-200">
            <div :class="sidebarOpen ? 'block' : 'hidden'" @click="sidebarOpen = false" class="fixed z-20 inset-0 bg-black opacity-50 transition-opacity lg:hidden"></div>

                <!-- sidebar -->
                ${sidebar.render()}

                <!-- main -->
                <div class="flex-1 flex flex-col overflow-hidden">
                
                    <!-- Header -->
                    ${header_admin_prod.render()}

                    <!-- main-content -->
                    <main class="flex-1 overflow-x-hidden overflow-y-auto bg-gray-200">
                        <div class="container mx-auto px-6 py-8">
                             
                        <form id="form-add-cate">
                            <div class="shadow sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <h3 class="lora text-center text-2xl">Add categories</h3>
                            <!-- grid-cols-6 -->
                            
                            <div class="col-span-6 sm:col-span-3">
                                <label for="cate-name" class="block text-sm font-medium text-gray-700">Name category</label>
                                <div class="mt-1"> 
                                    <input type="text" id="cate-name" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" Name category">
                                    <span class="form-message text-red-600 hind text-xs"></span>
                                </div>
                            </div>
                            

                            <!-- grid-col-2 -->
                            <div class="grid grid-cols-2 gap-6">
                            <div class="col-span-2 sm:col-span-2">

                                <div class="mt-1 flex justify-center px-6 pt-5 pb-6 border border-gray-300">
                                <div class="space-y-1 text-center">
                                  <svg class="mx-auto h-12 w-12 text-gray-400" stroke="currentColor" fill="none" viewBox="0 0 48 48"
                                    aria-hidden="true">
                                    <path
                                      d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                                      stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                                  </svg>
                                  <div class="text-sm text-gray-600">
                                    <label for="cate-images"
                                      class="relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                      <span>Upload a file</span>
                                    </label> 
                                    <input id="cate-images" type="file" class="sr-only">
                                    <span class="form-message text-red-600 hind text-xs"></span>
                                  </div>
                                  <p class="text-xs text-gray-500">
                                    PNG, JPG, GIF up to 10MB
                                  </p>
                                </div>
                              </div>

                            </div>
                            </div>
                                    

                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Add category
                                </button>
                
                                
                            
                            </div>
                        </form>

                        </div>
                    </main>
                </div>
        </div> 
        `

    },

     afterRender() {
   
       
        $('#form-add-cate').addEventListener('submit', e => {
            
            e.preventDefault();

            const cateImage = $('#cate-images').files[0];
            let storageRef = firebase.storage().ref(`images/${cateImage.name}`);
            storageRef.put(cateImage).then(function () {

                storageRef.getDownloadURL().then((url) => {

                    const newCate = {
                        id: Math.random().toString(36).substr(2, 9),
                        name: $('#cate-name').value,
                        images: url,

                    };
                    console.log(newCate);
                    categoryAPI.add(newCate);
                    swal({
                        title: "Success !",
                        icon: "success",
                        button: "Done",
                    });
                    window.location.hash = '/admin';
                })
            })
        })
    }
    
}
export default categoryAdd;