import { $ } from '../../until'
import userAPI from '../../api/userAPI'
import { validateEmail, validateEmpty, validateUserValid, validatePassword, setError, setSuccess, validateUserText } from '../../validator';
const register = {
    async render() {
        const { data: users } = await userAPI.getAll();
        const new_id = users.length + 1;
        return /* html */ `
        <div class="bg-white font-family-karla h-screen">

            <div class="w-full flex flex-wrap">

                <!-- Login Section -->
                <div class="w-full md:w-1/2 flex flex-col">

                    <div class="flex flex-col justify-center md:justify-start my-auto pt-8 md:pt-0 px-8 md:px-24 lg:px-32">
                        <p class="text-center text-3xl hind tracking-widest">Register</p>
                        <form class="flex flex-col pt-3 md:pt-8" id="form-register">

                        <input type="hidden" id="id" value="${new_id}">

                            <div class="flex flex-col pt-4">
                            
                                <label for="username" class="text-lg hind font-normal">User Name
                                <span class="text-red-600 font-bold">*</span>
                                </label>
                                <div class="relative">
                                <input type="text" id="username" class="border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900">
                                <span class="err absolute right-3 top-3 text-xs "></span>
                                </div>
                            </div> 
                            
                            <div class="flex flex-col pt-4">
                                <label for="password" class="text-lg hind font-normal">Password
                                <span class="text-red-600 font-bold">*</span>
                                </label>
                                <div class='relative'>
                                <input type="password" id="password" class="border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900">
                                <span class="err absolute right-3 top-3 text-xs "></span>
                                </div>
                                
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="password2" class="text-lg hind font-normal">Confirm Password
                                <span class="text-red-600 font-bold">*</span>
                                </label>
                                <div class='relative'> 
                                <input type="password" id="password2" class="border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900">
                                <span class="err absolute right-3 top-3 text-xs "></span>
                                </div>
                               
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="password" class="text-lg hind font-normal">Name
                                <span class="text-red-600 font-bold">*</span>
                                </label>
                                <div class='relative'>
                                <input type="text" id="name" class="border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900">
                                <span class="err absolute right-3 top-3 text-xs "></span>
                                </div>
                               
                                
                            </div>

                            <div class="flex flex-col pt-4">
                                <label for="email" class="text-lg hind font-normal">Email
                                <span class="text-red-600 font-bold">*</span>
                                </label>
                                <div class='relative'>
                                <input type="text" id="email" class="border w-full py-2 px-3 text-gray-900 mt-1 leading-tight focus:outline-none border-gray-900">
                                <span class="err absolute right-3 top-3 text-xs "></span>
                                </div>
                               
                                
                            </div>
            
                            <button type="submit" class="tracking-widest hind hover:bg-white text-white font-normal text-lg border hover:border-black bg-black hover:text-black p-2 mt-8 transition duration-500">CREATE AN ACCOUNT</button>
                            <a href="#/login" class="font-normal text-gray-900 mt-2">BACK TO LOGIN</a>
                            
                        </form>
                        
                    </div>

                </div>

                <!-- Image Section -->
                <div class="w-1/2 shadow-2xl">
                    <img class="object-cover w-full h-screen hidden md:block opacity-75" src="https://firebasestorage.googleapis.com/v0/b/shop-ea818.appspot.com/o/images%2Fbanner-login.jpg?alt=media&token=f02f2464-2545-47f4-832d-7e5408f579d7">
                </div>
            </div>

        </div>
        `
    },

    async afterRender() {
        const username = $('#username');
        const email = $('#email');
        const password = $('#password');
        const password2 = $('#password2');
        const name = $('#name');

        const validUsername = username.onchange = async () => {
            //username
            if (validateEmpty(username.value)) {
                setError(username, 'Không được để trống!');
            } else {
                if (await validateUserValid(username) == true) {
                    if (validateUserText(username.value) == true) {
                        setSuccess(username);
                        return true;
                    } else {
                        setError(username, 'Username không đúng định dạng!');
                    }
                } else {
                    setError(username, 'Username đã tồn tại!');
                }
            }
        }
        const validPass = password.onchange = () => {
            //password
            if (validateEmpty(password.value)) {
                setError(password, 'Không được để trống!');
            } else {
                if (validatePassword(password.value) == true) {
                    setSuccess(password);
                    return true;
                } else {
                    setError(password, 'Mật khẩu của bạn yếu !');
                }
            }
        }
        const validConfirm = password2.onchange = () => {
            //  confirm pass
            if (validateEmpty(password2.value)) {
                setError(password2, 'Không được để trống!');
            } else {
                if (password2.value === password.value) {
                    setSuccess(password2);
                    return true;
                } else {
                    setError(password2, 'Không trùng khớp!');
                }
            }
        }
        const validName = name.onchange = () => {
            name
            if (validateEmpty(name.value)) {
                setError(name, 'Không được để trống!');
            } else {
                setSuccess(name);
                return true;
            }
        }
        const validEmail = email.onchange = () => {
            //email
            if (validateEmpty(email.value)) {
                setError(email, 'Không được để trống!');
            } else {
                if (validateEmail(email.value) == false) {
                    setError(email, 'Email sai định dạng!');
                } else {
                    setSuccess(email);
                    return true;
                }
            }
        }

        $('#form-register').addEventListener('submit', async e => {
            e.preventDefault();
            const { data: users } = await userAPI.getAll();
            const new_id = users.length + 1;

            if (await validUsername() === true && validPass() === true && validConfirm() === true && validName() === true && validEmail() === true) {
                const user = {
                    id: new_id,
                    username: username.value,
                    name: name.value,
                    password: password.value,
                    avatar: 'https://cdn.iconscout.com/icon/free/png-512/laptop-user-1-1179329.png',
                    email: email.value,
                    role: 'customer'
                }
                if (userAPI.add(user)) {
                    alert('Đăng ký thành công !');
                    window.location.hash = '#/login';
                }
            }

        })



    }
}
export default register;