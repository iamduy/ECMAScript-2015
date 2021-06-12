const footer = {
    render(){
        return /* html */`
        <!-- footer -->
        
            <footer class="bg-gray-200 mt-0.5 pt-10">
                <div class="max-w-6xl m-auto text-gray-800 flex flex-wrap justify-left">
                    <!-- Col-1 -->
                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <!-- Col Title -->
                        <div class="text-xs uppercase text-gray-900 font-medium mb-6">
                            Useful links
                        </div>

                        <!-- Links -->
                        <a href="/" class="my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                            Home
                        </a>
                        <a href="/#/blog" class="my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            Blog
                        </a>
                        <a href="/#/shop" class="my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                        Shop 
                        </a>
                        <a href="/#/contacts" class="my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                        Contacts
                        </a>
                    </div>

                

                    <!-- Col-3 -->
                    <div class="p-5 w-1/2 sm:w-4/12 md:w-3/12">
                        <!-- Col Title -->
                        <div class="text-xs uppercase text-gray-900 font-medium mb-6">
                            Community
                        </div>

                        <!-- Links -->
                        <a href="#" class="my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            GitHub
                        </a>
                        <a href="#" class="my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            Discord
                        </a>
                        <a href="#" class="my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 ">
                            Twitter
                        </a>
                        <a href="#" class="my-3 block text-gray-400 hover:text-gray-600 text-sm font-medium transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
                            YouTube
                        </a>
                    </div>

                    <!-- Col-4 -->
                    <div class="p-5  w:1/2  sm:w-4/12 md:w-3/12">
                        <!-- Col Title -->
                        <div class="text-xs uppercase text-gray-900 font-medium mb-6">About us</div>
                        
                        

                        <!-- Links -->
                        <p class="my-3 block text-gray-400 text-sm font-medium duration-700">
                        Apparently we had reached a great height in the atmosphere, for the sky was a dead black,
                        and the stars had ceased to twinkle. By the same illusion which lifts</p>
                        <div class="mt-4">  

                        <form action="/#">                        
                            <input type="email" class="p-2 text-grey-dark text-sm h-auto "
                                placeholder="you@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" req>
                            <button type="submit" class="bg-red-400 text-white h-auto text-xs p-2.5 mx-auto">SUBCRIBE</button>
                        </form>
                        </div>
                    </div>
                
                </div>

                <!-- Copyright Bar -->
                <div class="pt-2">
                    <div class="flex pb-5 px-3 m-auto pt-5 
                        border-t border-gray-500 text-gray-400 text-sm 
                        flex-col md:flex-row max-w-6xl">
                        <div class="mt-2">
                            © Copyright 1998-year. All Rights Reserved.
                        </div>

                        <!-- Required Unicons (if you want) -->
                        <div class="md:flex-auto md:flex-row-reverse mt-2 flex-row flex">
                            <a href="#" class="w-6 mx-1 hover:text-red-400">
                                <i class="uil uil-facebook-f"></i>
                            </a>
                            <a href="#" class="w-6 mx-1 hover:text-red-400">
                                <i class="uil uil-twitter-alt"></i>
                            </a>
                            <a href="#" class="w-6 mx-1 hover:text-red-400">
                                <i class="uil uil-youtube"></i>
                            </a>
                            <a href="#" class="w-6 mx-1 hover:text-red-400">
                                <i class="uil uil-linkedin"></i>
                            </a>
                            <a href="#" class="w-6 mx-1 hover:text-red-400">
                                <i class="uil uil-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        `
    }
}
export default footer;