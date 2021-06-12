import blog_home from '../../components/website/Blog-home';
import service from '../../components/website/Service';
import footer from "../../components/website/Footer";
import Header from "../../components/website/Header";



const homepage = {
  render() {


    return /* html */` 

      <!-- header-->
      ${Header.render()}


      <div class="container my-12 mx-auto px-4 md:px-12">

      <!--categories-->
      <!-- title -->
      <div class="py-10">
        <p class="text-center font-light text-5xl text-black py-2 lora tracking-widest">Categories</p>
      </div>
      <div class="md:flex mt-8 md:-mx-4">
  
        <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
          style="background-image: url('https://firebasestorage.googleapis.com/v0/b/shop-ea818.appspot.com/o/images%2Fhome-decor-4.jpg?alt=media&token=81d60847-103d-4ec2-9d78-b1a65bd471b8')">
          <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-normal tracking-widest lora">HOME DECOR</h2>
              <p class="mt-2 text-gray-300">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
              </p>
              <button
                class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded  focus:outline-none hover:text-gray-300 transition duration-500">
  
                <span><a href="/#/category/1">View now</a></span>
                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
  
              </button>
            </div>
          </div>
        </div>
  
        <div class="w-full h-64 md:mx-4 rounded-md overflow-hidden bg-cover bg-center md:w-1/2"
          style="background-image: url('https://firebasestorage.googleapis.com/v0/b/shop-ea818.appspot.com/o/images%2Faccessories-6.jpg?alt=media&token=b0f27fa4-e63b-4503-94c8-443892fd73ac')">
          <div class="bg-gray-900 bg-opacity-50 flex items-center h-full">
            <div class="px-10 max-w-xl">
              <h2 class="text-2xl text-white font-normal tracking-widest lora">ACCESSORIES</h2>
              <p class="mt-2 text-gray-300">
                Fam locavore kickstarter distillery. Mixtape chillwave tumeric sriracha taximy chia microdosing tilde DIY.
                XOXO fam indxgo juiceramps cornhole raw denim forage brooklyn.
              </p>
              <button
                class="flex items-center mt-4 text-white text-sm uppercase font-medium rounded  focus:outline-none hover:text-gray-300 transition duration-500">
  
                <span> <a href="/#/category/2">View now</a></span>
                <svg class="h-5 w-5 mx-2" fill="none" stroke-linecap="round" stroke-linejoin="round" stroke-width="2"
                  viewBox="0 0 24 24" stroke="currentColor">
                  <path d="M17 8l4 4m0 0l-4 4m4-4H3"></path>
                </svg>
  
              </button>
            </div>
          </div>
        </div>
  
  
  
      </div>
  
  
      <!-- title -->
      <div class="py-10">
        <p class="text-center font-light text-5xl text-black py-2 font-serif">New Arrivals</p>
        <p class="text-center text-gray-400 font-semibold text-sm">NEW LIMITED COLLECTION</p>
      </div>
  
  
      <!-- button -->
      <div class="flex justify-center">
        <a href="/#/shop/"
          class=" hover:border-gray-900 hover:bg-white border border-red-400 font-normal hover:text-gray-900 px-5 py-2 transition duration-500 ease-in-out bg-red-400 text-white uppercase hind">more
          products</a>
      </div>
  
      <!-- review product -->
      <div class="flex flex-wrap -mx-1 lg:-mx-4 my-8">
  
  
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
          <article class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
  
            <a href="/#/products/1">
              <img class="block h-auto w-full"
                src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2015/05/14-540x540.jpg">
            </a>
          </article>
        </div>
  
  
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
          <article class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
  
            <a href="/#/products/2">
              <img alt="Placeholder"
                class="block h-auto w-full"
                src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2015/05/13-540x540.jpg">
            </a>
  
          </article>
        </div>
  
  
  
        <div class="my-1 px-1 w-full md:w-1/2 lg:my-4 lg:px-4 lg:w-1/3">
  
          <article class="overflow-hidden shadow-lg transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110">
  
            <a href="/#/products/3">
              <img class="block h-auto w-full"
                src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2016/12/17-540x540.jpg">
            </a>
  
          </article>
  
        </div>
  
      </div>
  
      <!-- service 1 -->
      ${service.render()}
  
      <!-- blog-home -->
      ${blog_home.render()}
  
      </div>
    </div>
    <!-- End container -->
  
    <div class="w-full bg-no-repeat" style="
        background-position: center center;
        background-image: url('https://cdn.shopify.com/s/files/1/1405/7026/products/DSC_4861.jpg?v=1522730663');">
      <div class=" p-10  py-20  flex  flex-col  flex-wrap  justify-center  content-center">
        <button class=" py-2  w-1/5  text-gray-900 bg-white font-semibold uppercase text-sm">
          <a href="https://www.instagram.com/khanhs_duyy/">
            <i class="uil uil-instagram"></i> Follow @khanhs_duyy
          </a>
        </button>
      </div>
    </div>


    

          <!-- Footer -->
          ${footer.render()}
    `


  },
  afterRender(){
     Header.afterRender();
  }

}
export default homepage;

