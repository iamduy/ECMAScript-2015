import {$} from '../../until'
const header_admin_prod = {
    render(){
        const user = JSON.parse(localStorage.getItem('user'));
        return/* html */ `
        
        <!-- header -->
        <header class="flex justify-between items-center py-4 px-6 bg-white border-b-4 border-indigo-600">
        <div class="flex items-center">
            <button @click="sidebarOpen = true" class="text-gray-500 focus:outline-none lg:hidden">
                <svg class="h-6 w-6" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M4 6H20M4 12H20M4 18H11" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                        stroke-linejoin="round">
                        </path>
                </svg>
            </button>

            <div class="relative mx-4 lg:mx-0">
                <span class="absolute inset-y-0 left-0 pl-3 flex items-center">
                    <svg class="h-5 w-5 text-gray-500" viewBox="0 0 24 24" fill="none">
                        <path
                            d="M21 21L15 15M17 10C17 13.866 13.866 17 10 17C6.13401 17 3 13.866 3 10C3 6.13401 6.13401 3 10 3C13.866 3 17 6.13401 17 10Z"
                            stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                        </path>
                    </svg>
                </span>

                <input class="form-input w-32 py-2 bg-gray-300 sm:w-64 rounded-md pl-10 pr-4" type="text"
                    placeholder="Search">
            </div>
        </div>

        <div class="flex items-center">
            
            <div x-data="{ dropdownOpen: false }" class="relative">
            ${user ? `
            <button @click="dropdownOpen = ! dropdownOpen"
            class="relative block h-8 w-8 rounded-full overflow-hidden shadow focus:outline-none">
                <img class="inline-block h-9 w-9 rounded-full ring-2 ring-white mr-6" src="${user.avatar}" alt="">
            </button>

            <div x-show="dropdownOpen" class="absolute right-0 mt-2 w-48 bg-white rounded-md overflow-hidden shadow-xl z-10">
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
    </header>
        
        `
    },
    afterRender(){
        $('#logout').onclick = () => {
            localStorage.removeItem('user');
            window.location.hash = '#/login';
        }
    }
    
}
export default header_admin_prod;