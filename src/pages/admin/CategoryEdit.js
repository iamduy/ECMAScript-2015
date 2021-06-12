
import categoryAPI from '../../api/categoryAPI'
import { $, parseRequestUrl } from "../../until.js";
import sidebar from '../../components/admin/sidebar'
import header_admin_prod from "../../components/admin/Header-AD-prod"
import swal from 'sweetalert';
import firebase from 'firebase'
const categoryEdit = {

    async render() {

        const { id } = parseRequestUrl();
        const { data: cate } = await categoryAPI.get(id);

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
                             
                        <form id="form-update-cate">
                            <div class="shadow sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <h3 class="lora text-center text-2xl">Update categories</h3>
                            <!-- grid-cols-6 -->
                            <div class="grid grid-cols-6 gap-6">
                            
                            <div class="col-span-6 sm:col-span-3">
                                <label for="cate-id" class="block text-sm font-medium text-gray-700">ID</label>
                                <div class="mt-1 flex shadow-sm"> 
                                    <input disabled id="cate-id" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" ID random" value=" ${cate.id}">
                                </div>
                            </div>
                            
                            <div class="col-span-6 sm:col-span-3">
                                <label for="cate-name" class="block text-sm font-medium text-gray-700">Name category</label>
                                <div class="mt-1 flex shadow-sm"> 
                                    <input type="text" id="cate-name" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" Name category" value=" ${cate.name}">
                                </div>
                            </div>
                            </div>

                            <!-- grid-cols-6 -->
                            <div class="grid grid-cols-6 gap-6">
                            <div class="col-span-6 sm:col-span-3">
                                <label for="cate-images" class="block text-sm font-medium text-gray-700 border border-gray-900 hover:bg-gray-900 transition duration-500 hover:text-white p-2 text-gray-900 rounded uppercase cursor-pointer">

                                    <div class="flex justify-center ">
                                    <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                    </svg>
                                        <span class="px-2">Upload file</span>
                                    </div>
                                </label>
                                <div class="mt-1 flex shadow-sm"> 
                                
                                <input type="file" id="cate-images" class="sr-only">
                                <input type="hidden" value="${cate.images}" id="old-images" >
                                <img class="w-full pt-2" src="${cate.images}" alt=""> 
                                 
                               
                           
                                   </div>
                                </div>
                            </div>
                                    

                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Update category
                                </button>
                
                            </div>
                        </form>

                        </div>
                    </main>
                </div>
        </div> 
        `

    }
    ,
    async afterRender() {

        const { id } = parseRequestUrl();
        const { data: cate } = await categoryAPI.get(id);

        $('#form-update-cate').addEventListener('submit', e => {

            e.preventDefault();
            if ($('#cate-name').value === '') {
                swal({
                    title: "Failed!",
                    text: "...Please , enter Category name!",
                    icon: "warning",
                    button: "Ok",
                });
                return false;
            }
            else {


                const cateImage = $("#cate-images").files[0];
                if (cateImage) {
                    let storageRef = firebase.storage().ref(`images/${cateImage.name}`);
                    storageRef.put(cateImage).then(function () {
                        console.log("Upload success");
                        storageRef.getDownloadURL().then((url) => {
                            const Category = {
                                ...cate,
                                name: $('#cate-name').value,
                                images: url,
                            };
                            console.log(Category);
                            categoryAPI.update(id, Category);
                            swal({
                                title: "Success !",
                                text: "Category has been updated !",
                                icon: "success",
                                button: "Done",
                            });
                            window.location.hash = "/admin";
                        });
                    });
                } else {
                    const Category = {
                        ...cate,
                        name: $('#cate-name').value,
                        images: $('#old-images').value,
                    };
                    console.log(Category);
                    categoryAPI.update(id, Category);
                    swal({
                        title: "Success !",
                        text: "Product has been updated !",
                        icon: "success",
                        button: "Done",
                    });
                    window.location.hash = "/admin";
                }
            }

        })

    }



}
export default categoryEdit;