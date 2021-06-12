import { $ } from '../../until'
import userAPI from '../../api/userAPI'

const login = {
    render() {
        return /* html */ `

        <div class="bg-white font-family-karla h-screen">

            <div class="w-full flex flex-wrap">

                <!-- Login Section -->
                <div class="w-full md:w-1/2 flex flex-col">

                    <div class="flex justify-center md:justify-start pt-12 md:pl-12 md:-mb-24">
                        <a href="#" class="text-gray-900 border border-gray-900 p-4 font-bold text-xl uppercase lora hover:bg-gray-900 hover:text-white transition duration-500">w-1914</a>
                    </div>

                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl hind">Login</p>
                        <form class="flex flex-col pt-3 md:pt-8" id="form-login">
                            <div class="flex flex-col pt-4">
                                <label for="username" class="text-lg hind font-normal">User Name</label>
                                <div class="relative">
                                <input type="text" id="username" class="border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900">
                                <span id="check_user" class=" text-xs text-red-400 absolute right-1 top-3"></span>
                                </div>
                            </div>
            
                            <div class="flex flex-col pt-4">
                                <label for="password" class="text-lg hind font-normal">Password</label>
                                <div class="relative">
                                <input type="password" id="password" class="border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900">
                                <span id="check_pass" class="text-xs text-red-400 absolute right-1 top-3"></span>
                                </div>
                            </div>
            
                            <button type="submit" class="hind hover:bg-white text-white font-normal text-lg border hover:border-black bg-black hover:text-black p-2 mt-8 transition duration-500">Login</button>
        
                        </form>
                        <div class="text-center pt-12 pb-12">
                            <p>Don't have an account? <a href="/#/register" class="font-semibold hind hover:underline hover:text-gray-600 transition duration-500">Register here.</a></p>
                        </div>
                    </div>

                </div>

                <!-- Image Section -->
                <div class="w-1/2 shadow-2xl">
                    <img class="object-cover w-full h-screen hidden md:block opacity-75" src="https://firebasestorage.googleapis.com/v0/b/shop-ea818.appspot.com/o/images%2Fbanner-login.jpg?alt=media&token=f02f2464-2545-47f4-832d-7e5408f579d7">
                </div>
            </div>

        </div>
       
        `;
    },

    async afterRender() {
        const username = $('#username');
        const password = $('#password');
        const check_user = $('#check_user');
        const check_pass = $('#check_pass');


        const { data: users } = await userAPI.getAll();

        password.oninput = () => {
            check_pass.innerHTML = '';
            password.style.border = 'solid 1px gray';
        }

        const user = username.onchange = () => {
            if (username.value === '') {
                username.style.border = 'solid 1px red';
                check_user.innerHTML = 'Tài khoản không được để trống <i class="fas fa-exclamation-circle"></i>';
                return false;
            } else {
                const invalid = users.find(user => user.username === username.value.trim());
                if (invalid) {
                    check_user.innerHTML = '<i class="fas fa-check-circle text-green-400"></i>';
                    username.style.border = 'solid 1px green';
                    if (invalid.password === password.value.trim()) {
                        localStorage.setItem('user', JSON.stringify(invalid));
                        const user = JSON.parse(localStorage.getItem('user'));
                        return true;
                    } else {
                        check_pass.innerHTML = 'Sai password <i class="fas fa-exclamation-circle"></i>';
                        password.style.border = 'solid 1px red';
                    }
                } else {
                    username.style.border = 'solid 1px red';
                    check_user.innerHTML = 'Tài khoản không xác định <i class="fas fa-exclamation-circle"></i>';
                    return false;
                }
            }
        }
        $('#form-login').addEventListener('submit', e => {
            e.preventDefault();
            if (user() === true) {
                window.location.hash = '#/';
            }
        })
    }
};

export default login;
