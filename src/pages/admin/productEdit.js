import productAPI from "../../api/productAPI";
import categoryAPI from "../../api/categoryAPI";
import { $, parseRequestUrl, reRender } from "../../until.js";
import sidebar from "../../components/admin/sidebar";
import header_admin_prod from "../../components/admin/Header-AD-prod";
import firebase from "../../firebase";
// import swal from 'sweetalert';
const ProductEdit = {
  async render() {
    const { id } = parseRequestUrl();
    const { data: prod } = await productAPI.get(id);
    const { data: cate } = await categoryAPI.getAll();

    const category = cate.map((items) => {
      return /* html */ `     
        <option value="${items.id}">${items.name}</option>
         `;
    }).join("");
    return /* html */ `
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
                            
                        <form id="form-update-prod">
                            <div class="shadow sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                

                                <!-- grid-cols-6 -->
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="prod-name" class="block text-sm font-medium text-gray-700">
                                        Name Products 
                                        </label>
                                        <div class="mt-1 flex shadow-sm"> 
                                            <input type="text" id="prod-name" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" Name" value=" ${prod.name
      }">
                                        </div>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="prod-category" class="block text-sm font-medium text-gray-700">Categories</label>
                                        <select id="prod-category" name="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        ${category}
                                        </select>
                                    </div>
                                </div>

                                <!-- grid-cols-6 -->
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="prod-price" class="block text-sm font-medium text-gray-700">Price</label>
                                        <div class="mt-1 flex shadow-sm"> 
                                            <input type="number" id="prod-price" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" Price" value="${prod.price
      }">
                                        </div>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="prod-quantity" class="block text-sm font-medium text-gray-700">Quantity</label>
                                        <div class="mt-1 flex shadow-sm"> 
                                            <input type="number" id="prod-quantity" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" Quantity" value="${prod.quantity
      }">
                                        </div>
                                    </div>
                                </div>

                                <!-- grid-cols-6 -->
                                <div class="grid grid-cols-6 gap-6">
                                   
                                    <div class="col-span-6 sm:col-span-3">

                                        <label for="checkbox" class=" block text-sm font-medium text-gray-700">Products types</label>
                                        <select id="checkbox" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="1">Special</option>
                                        <option value="0">Normal</option> 
                                        </select>

                                        <label for="prod-intro" class="mt-4 block text-sm font-medium text-gray-700">Intro</label>
                                        <textarea id="prod-intro" rows="10" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300" placeholder="  Message...." >${prod.intro}</textarea>
                                    </div>


                                    <div class="col-span-6 sm:col-span-3">
                                    
                                    <label for="prod-images" class="block text-sm font-medium text-gray-700 border border-gray-900 hover:bg-gray-900 transition duration-500 hover:text-white p-2 text-gray-900 rounded uppercase cursor-pointer">

                                        <div class="flex justify-center ">
                                        <svg class="h-5 w-5" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-8l-4-4m0 0L8 8m4-4v12" />
                                        </svg>
                                            <span class="px-2">Upload file</span>
                                        </div>
                                    </label>
                                    <div class="mt-1 flex shadow-sm"> 
                                    
                                    <input type="file" id="prod-images" class="sr-only">
                                    <input type="hidden" value="${prod.image}" id="old-images" >
                                    <img class="w-full pt-2" src="${prod.image}" alt="">
                                      
                                     
                               
                                    </div>
                                </div>

                              </div>
                                
                                
                               

                    
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Update Products
                                </button>
                
                                <!-- status -->
                                <input type="hidden" value="true" id="prod-status">
                            
                            </div>
                        </form>

                        </div>
                    </main>
                </div>
        </div>
        `;
  },
  async afterRender() {
    const { id } = parseRequestUrl();
    const { data: prod } = await productAPI.get(id);
    $("#form-update-prod").addEventListener("submit", (e) => {
      e.preventDefault();

      if ($('#prod-name').value === '') {
        swal({
          title: "Failed!",
          text: "...Please , enter Product name!",
          icon: "warning",
          button: "Ok",
        });
        return false;
      }
      if ($('#prod-price').value === '') {
        swal({
          title: "Failed!",
          text: "...Please , enter Product price!",
          icon: "warning",
          button: "Ok",
        });
        return false;
      }
      if ($('#prod-price').value <= 0) {
        swal({
          title: "Failed!",
          text: "...Product prices must be > 0 !",
          icon: "warning",
          button: "Ok",
        });
        return false;
      }
      if ($('#prod-quantity').value <= 0) {
        swal({
          title: "Failed!",
          text: "...Quantity product must be > 0 !",
          icon: "warning",
          button: "Ok",
        });
        return false;
      }
      if ($('#prod-quantity').value === '') {
        swal({
          title: "Failed!",
          text: "...Please , enter Product quantity!",
          icon: "warning",
          button: "Ok",
        });
        return false;
      }
      if ($('#prod-intro').value.length > 300) {
        swal({
          title: "Failed!",
          text: "...Maximum length of 300 characters!",
          icon: "warning",
          button: "Change",
        });
        return false;
      }
      else {



        const prodImage = $("#prod-images").files[0];
        if (prodImage) {
          let storageRef = firebase.storage().ref(`images/${prodImage.name}`);
          storageRef.put(prodImage).then(function () {
            console.log("Upload success");
            storageRef.getDownloadURL().then((url) => {
              const newProduct = {
                ...prod,
                name: $("#prod-name").value,
                category: $("#prod-category").value,
                image: url,
                price: $("#prod-price").value,
                status: $("#prod-status").value,
                intro: $("#prod-intro").value,
                quantity: $("#prod-quantity").value,
                feature: $("#checkbox").value
              };
              console.log(newProduct);
              productAPI.update(id, newProduct);
              swal({
                title: "Success !",
                text: "Product has been updated !",
                icon: "success",
                button: "Done",
              });
              window.location.hash = "/admin";
            });
          });
        } else {
          const newProduct = {
            ...prod,
            name: $("#prod-name").value,
            category: $("#prod-category").value,
            image: $("#old-images").value,
            price: $("#prod-price").value,
            status: $("#prod-status").value,
            intro: $("#prod-intro").value,
            quantity: $("#prod-quantity").value,
            feature: $("#checkbox").value
          };
          console.log(newProduct);
          productAPI.update(id, newProduct);
          swal({
            title: "Success !",
            text: "Product has been updated !",
            icon: "success",
            button: "Done",
          });
          window.location.hash = "/admin";
        }

      }
    });

  },
};
export default ProductEdit;
