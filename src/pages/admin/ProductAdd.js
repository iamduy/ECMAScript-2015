import productAPI from '../../api/productAPI'
import { $ } from "../../until.js";
import sidebar from '../../components/admin/sidebar'
import header_admin_prod from "../../components/admin/Header-AD-prod"
import firebase from '../../firebase'
import swal from 'sweetalert';


const ProductAdd = {
    render() {

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
                             
                        <form id="form-add-prod">
                            <div class="shadow sm:overflow-hidden">
                            <div class="px-4 py-5 bg-white space-y-6 sm:p-6">
                            <h3 class="lora text-center text-2xl">Add products</h3>

                                <!-- grid-cols-6 -->
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="company_website" class="block text-sm font-medium text-gray-700">
                                        Name Products 
                                        </label>
                                        <div class="mt-1"> 
                                            <input type="text" id="prod-name" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" Name">
                                            <span class="form-message text-red-600 hind text-xs"></span>
                                        </div>
                                    </div>

                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="country" class="block text-sm font-medium text-gray-700">Categories</label>
                                        <select id="prod-category" name="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="1">Home Decor</option>
                                        <option value="2">Accessories</option>
                                        
                                        </select>
                                    </div>
                                </div>
                                
                                <!-- grid-cols-6 -->
                                <div class="grid grid-cols-6 gap-6">
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="company_website" class="block text-sm font-medium text-gray-700">Price</label>
                                        <div class="mt-1"> 
                                            <input type="number" id="prod-price" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" Price">
                                            <span class="form-message text-red-600 hind text-xs"></span>
                                        </div>
                                    </div>
                                    <div class="col-span-6 sm:col-span-3">
                                        <label for="company_website" class="block text-sm font-medium text-gray-700">Quantity</label>
                                        <div class="mt-1"> 
                                            <input type="number" id="prod-quantity" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300 py-2" placeholder=" Quantity">
                                            <span class="form-message text-red-600 hind text-xs"></span>
                                        </div>
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
                                        <label for="prod-images"
                                          class="relative cursor-pointer bg-white font-medium text-indigo-600 hover:text-indigo-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-indigo-500">
                                          <span>Upload a file</span>
                                        </label> 
                                        <input id="prod-images" type="file" class="sr-only">
                                        <span class="form-message text-red-600 hind text-xs"></span>
                                      </div>
                                      <p class="text-xs text-gray-500">
                                        PNG, JPG, GIF up to 10MB
                                      </p>
                                    </div>
                                    
                                  </div>

                                </div>
                                </div>

                                <div class="col-span-6 sm:col-span-3">
                                        <label for="country" class="block text-sm font-medium text-gray-700">Products types</label>
                                        <select id="checkbox" name="" class="mt-1 block w-full py-2 px-3 border border-gray-300 bg-white shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 sm:text-sm">
                                        <option value="1">Special</option>
                                        <option value="0">Normal</option>
                                        </select>
                                </div>
                
                                <!-- grid-col-2 -->
                                <div class="grid grid-cols-2 gap-6">
                                    <div class="col-span-2 sm:col-span-2">
                                        <label for="about" class="block text-sm font-medium text-gray-700">Intro</label>
                
                                        <div class="mt-1">
                                            <textarea id="prod-intro" rows="5" class="focus:outline-none border-current border flex-1 block w-full sm:text-sm border-gray-300" placeholder="  Message...."></textarea>
                                            <span class="form-message text-red-600 hind text-xs"></span>
                                        </div>
                                    </div>
                                </div>
                    
                                <button type="submit" class="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
                                Add Products
                                </button>
                
                                <!-- status -->
                                <input type="hidden" value="true" id="prod-status">
                            
                            </div>
                        </form>

                        </div>
                    </main>
                </div>
        </div>

           
        `
    },
    afterRender() {




        //đối tượng validator
        function Validator(options) {

            var selectorRules = {};

            //hàm thực hiên validate
            function validate(inputElement, rule) {
                var error;
                const errorElement = inputElement.parentElement.querySelector(options.errorSelector);

                var rules = selectorRules[rule.selector];

                for (let i = 0; i < rules.length; i++) {
                    error = rules[i](inputElement.value);
                    if (error) break;
                }

                if (error) {
                    errorElement.innerHTML = error;
                    inputElement.classList.add('border-red-600')
                } else {
                    errorElement.innerHTML = '';
                    inputElement.classList.remove('border-red-600')
                }
                return !error
            }

            //lấy element của form cần validate
            const formElement = document.querySelector(options.form)

            if (formElement) {


                $('#form-add-prod').addEventListener('submit', e => {
                    e.preventDefault();


                    var isFormValid = true;

                    options.rules.forEach((rule) => {

                        //lưu lại các rules cho mỗi input
                        if (Array.isArray(selectorRules[rule.selector])) {
                            selectorRules[rule.selector].push(rule.test)
                        } else {
                            selectorRules[rule.selector] = [rule.test];
                        }


                        const inputElement = formElement.querySelector(rule.selector);
                        var isvalid = validate(inputElement, rule);
                        if (!isvalid) {
                            isFormValid = false;
                        }
                    });

                    if (isFormValid) {
                        const prodImage = $('#prod-images').files[0];
                        let storageRef = firebase.storage().ref(`images/${prodImage.name}`);
                        storageRef.put(prodImage).then(function () {

                            storageRef.getDownloadURL().then((url) => {

                                const product = {
                                    id: Math.random().toString(36).substr(2, 9),
                                    name: $('#prod-name').value,
                                    category: $('#prod-category').value,
                                    image: url,
                                    price: $('#prod-price').value,
                                    status: $('#prod-status').value,
                                    intro: $('#prod-intro').value,
                                    quantity: $('#prod-quantity').value,
                                    feature: $('#checkbox').value
                                };
                                console.log(product);
                                productAPI.add(product);
                                swal({
                                    title: "Success !",
                                    text: "Product has been added to the catalog !",
                                    icon: "success",
                                    button: "Done",
                                });
                                window.location.hash = '/admin';
                            })
                        })
                    }

                })

                options.rules.forEach((rule) => {

                    const inputElement = formElement.querySelector(rule.selector);
                    if (inputElement) {
                        //xử lý trường hợp blur khỏi input
                        inputElement.onblur = () => {
                            validate(inputElement, rule);
                        }

                        //xử lý khi người dùng nhập vào input
                        inputElement.oninput = () => {
                            const errorElement = inputElement.parentElement.querySelector(options.errorSelector);
                            errorElement.innerHTML = '';
                            inputElement.classList.remove('border-red-600')
                        }
                    }
                })
            }
        }

        //định nghĩa rules 
        // 1. khi có lỗi => trả message lỗi 
        // 2. khi hợp lệ => không trả lại gì cả (undefined)
        Validator.isRequired = (selector) => {
            return {
                selector: selector,
                test: (value) => {
                    return value.trim() ? undefined : "* Please enter this field";
                }
            }
        }

        Validator.minLength = (selector, min) => {
            return {
              selector: selector,
              test: (value) => {
        
                return value >= min ? undefined : `Minimum unit price ${min} $`;
              }
            }
          }


        Validator({
            form: '#form-add-prod',
            errorSelector: '.form-message',
            rules: [
                Validator.isRequired('#prod-name'),
                Validator.isRequired('#prod-quantity'),
                Validator.minLength('#prod-quantity' , 1),
                Validator.isRequired('#prod-images'),
                Validator.isRequired('#prod-price'),
                Validator.minLength('#prod-price' , 1),
                Validator.isRequired('#prod-intro'),

            ]
        });
    }
}
export default ProductAdd;