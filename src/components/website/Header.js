import { $ } from '../../until'

const Header = {
    render() {
        const user = JSON.parse(localStorage.getItem('user'));
        const cartArr = JSON.parse(localStorage.getItem('arr_product_cart'));
        if (cartArr != null) {
            var subtotal = cartArr.reduce((sum, { quantity, price }) => sum + quantity * price, 0);
        }

        return /* html */`
        
        <div x-data="{ cartOpen: false , isOpen: false }" class="bg-white">
            <header>
            <div class="container mx-auto px-6 py-3">
                <div class="flex items-center justify-between">
                <div class="hidden w-full text-gray-600 md:flex md:items-center">
                    <svg class="h-5 w-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M16.2721 10.2721C16.2721 12.4813 14.4813 14.2721 12.2721 14.2721C10.063 14.2721 8.27214 12.4813 8.27214 10.2721C8.27214 8.06298 10.063 6.27212 12.2721 6.27212C14.4813 6.27212 16.2721 8.06298 16.2721 10.2721ZM14.2721 10.2721C14.2721 11.3767 13.3767 12.2721 12.2721 12.2721C11.1676 12.2721 10.2721 11.3767 10.2721 10.2721C10.2721 9.16755 11.1676 8.27212 12.2721 8.27212C13.3767 8.27212 14.2721 9.16755 14.2721 10.2721Z"
                        fill="currentColor" />
                    <path fill-rule="evenodd" clip-rule="evenodd"
                        d="M5.79417 16.5183C2.19424 13.0909 2.05438 7.39409 5.48178 3.79417C8.90918 0.194243 14.6059 0.054383 18.2059 3.48178C21.8058 6.90918 21.9457 12.6059 18.5183 16.2059L12.3124 22.7241L5.79417 16.5183ZM17.0698 14.8268L12.243 19.8965L7.17324 15.0698C4.3733 12.404 4.26452 7.97318 6.93028 5.17324C9.59603 2.3733 14.0268 2.26452 16.8268 4.93028C19.6267 7.59603 19.7355 12.0268 17.0698 14.8268Z"
                        fill="currentColor" />
                    </svg>
                    <span class="mx-1 text-sm">My Dinh </span>
                </div>
                <div class="w-full text-gray-900 md:text-center text-2xl font-semibold lora ">
                    W-1914
                </div>

            <div class="flex items-center justify-end w-full gap-6">
                <div x-data="{ dropdownOpen: false }" class="relative">


                        ${user ? `
                        <button @click="dropdownOpen = ! dropdownOpen"
                        class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                            <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white mr-6" src="${user.avatar}" alt="">
                        </button>
                        

                        <div x-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
                        
                        ${user.role === 'admin' ? `
                        <div class="flex p-3 hover:bg-indigo-600 hover:text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        <button id="btn_admin" class="focus:outline-none mx-2">Admin</button>
                        </div>
                    `
                    : ``}

                            <div class="flex p-3 hover:bg-indigo-600 hover:text-white">
                                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
                                </svg>
                                <button class="focus:outline-none mx-2 " id="logout">Logout</button>
                            </div>
                        `
                : '<a href="#/login" class="font-thin text-md mr-6 hover:text-indigo-600">Log in</a>'} 
                </div>
                </div>

                
                <button @click="cartOpen = !cartOpen" id="btns_viewCart" class="font-thin text-md font-semibold mr-6 focus:outline-none flex">
                <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                </svg>
                (${cartArr ? cartArr.length : '0'})
                </button>
            
                <div class="w-3/12 h-auto border border-black bg-white absolute z-10 right-0 top-12 px-10 py-5 hidden" id="review_cart">
                <div class="absolute top-0 right-2">
                    <button class="focus:outline-none" id="cancel"><i class="fas fa-times text-xl"></i></button>
                </div>
                ${cartArr ? `
                <div class="flex text-sm">
                    <div class="flex-1 text-left">${cartArr ? `<b>${cartArr.length}</b>` : '0'} Items</div>
                    <div class="flex-1 text-right">Subtotal:<b>$ ${subtotal ? subtotal : ''}</b></div>
                </div>
                <a href="#/checkout"
                    class="flex justify-center px-6 py-2 text-sm uppercase bg-black border-none text-white w-full mt-5">
                    CHECKOUT</a>
                <hr class="my-3 text-gray-400">
                <table class="w-full ">
                    <tbody>
                    <tr>
                        ${cartArr.map(product => {
                    return `
                        <td class="flex my-1">
                        <img src='${product.image}' class="bg-cover bg-center w-3/12 mr-3 relative"/>
                        <div class="w-3/4">
                            <p class=" text-sm text-left font-semibold text-gray-500">${product.name}</p>
                            <p class="w-full text-sm text-left font-bold  text-gray-900 mt-1">$${product.price}</p>
                        </div>
                        </td>
                        `
                }).join('')
                }
                    </tr>
                    </tbody>
                </table>
                <hr class="my-3 text-gray-400">
                <a href="#/cart" class="flex justify-center px-6 py-2 uppercase bg-black border-none text-white w-full mt-5">VIEW CART</a>
                ` : '<p class="text-center text-sm">Bạn chưa có sản phẩm nào trong giỏ hàng !</p>'}
            </div>

                
                        
                    <div class="flex sm:hidden">
                        <button @click="isOpen = !isOpen" type="button"
                            class="text-gray-600 hover:text-gray-500 focus:outline-none focus:text-gray-500" aria-label="toggle menu">
                            <svg viewBox="0 0 24 24" class="h-6 w-6 fill-current">
                                <path fill-rule="evenodd"
                                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z">
                                </path>
                            </svg>
                        </button>
                    </div>
                </div>
            </div>

                <nav :class="isOpen ? '' : 'hidden'" class="sm:flex sm:justify-center sm:items-center mt-4">
                <div class="flex flex-col sm:flex-row font-semibold uppercase">
                    <a class="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600" href="#">Home</a>
                    <a class="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600" href="/#/shop">Shop</a>
                    <a class="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600" href="/#/blog">Blog</a>
                    <a class="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600"
                    href="/#/contacts">Contact</a>
                    <a class="mt-3 text-gray-600 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 hover:text-red-400 sm:mx-3 sm:mt-0 focus:text-red-600" href="/#/about">About</a>

                </div>
                </nav>
                <div class="relative mt-6 max-w-lg mx-auto">
                <button class="absolute inset-y-0 left-0 pl-3 flex items-center focus:outline-none" type="submit">
                    <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                    <path
                        d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" />
                    </svg>
                </button>


                <input
                    class="w-full border rounded-md pl-10 pr-4 py-2 focus:border-blue-500 focus:outline-none focus:shadow-outline"
                    type="text" placeholder="Search"> 
                </div>
            </div>
            </header>
        </div>

     
        `


    },
    async afterRender() {

        const review = $('#review_cart');
        const btn_review_cart = $('#btns_viewCart');
        btn_review_cart.onclick = () => {
            if (review.style.display === "none") {
                review.style.display = "block";
                $('#cancel').onclick = () => {
                    review.style.display = "none";
                }
            } else {
                review.style.display = "none";
            }
        }


        $('#logout').onclick = () => {
            console.log('oki');
            localStorage.removeItem('user');
            window.location.hash = '#/login';
        }
        $('#btn_admin').onclick = () => {
            window.location.hash = '#/admin';
        }
    }
}
export default Header;