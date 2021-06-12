import productAPI from "../../api/productAPI"
import categoryAPI from '../../api/categoryAPI'
import footer from "../../components/website/Footer"
import Header from "../../components/website/Header"
import { add_cart } from '../../cart';
import { $ } from '../../until'


const shop = {

  async render() {
    window.scrollTo(0, 0);


    const { data: products } = await productAPI.getAll();
    const { data: categories } = await categoryAPI.getAll();
    const reverse = products.reverse();


    const cate = categories.map(cate => {
      return /* html */ `
                    <ul class="py-3 hind font-normal">
                        <li class="transition duration-500 ease-in-out transform hover:-translate-y-1  hover:text-red-400 text-md text-gray-900"><a href="/#/category/${cate.id}">${cate.name}</a></li>
                    </ul>
        `
    }).join("");

    /*********************/
    const product = products.map((prod) => {


      return /* html */ `

  
      <div class="w-full max-w-sm mx-auto overflow-hidden shadow-lg cursor-pointer">
          <a href="/#/products/${prod.id}">
            <img src="${prod.image}" alt="" class="rounded-t">
          </a>
          <div class="p-4">
                <a href="/#/products/${prod.id}">
                  <h2 class="font-bold hind uppercase text-center hover:text-red-400 transition duration-500">${prod.name}</h2>
                  <p class="font-light text-gray-500 text-lg my-2 text-center">${prod.price} &dollar;</p>
               </a>
          
                <button data-id='${prod.id}' class="inline-block w-full p-2 text-xs font-medium leading-6 text-center text-white uppercase transition duration-500 bg-red-400 hover:bg-white hover:border-gray-200 hover:text-gray-900 border focus:outline-none border-red-400 add-to-cart">
                  Add to cart
                </button>
               
          </div>
    </div>
  

             `;
      // }

    }).join("");

    /*********************/
    const feature = reverse.map((items) => {

      if (items.feature == 1) {

        return /* html */`
      <article class="sm:grid grid-cols-4 bg-white p-4 lg:col-span-2">
            <a href="/#/products/${items.id}" class="transform transition duration-500 hover:scale-125">
                <img src="${items.image}" class="w-full">
            </a>
            <div class="pt-5 self-center sm:pt-0 sm:pl-5 col-span-3">
              <p class="text-gray-900 hover:text-red-400 capitalize text-sm font-normal lora transition delay-150 else-in-out">
                <a href="/#/products/${items.id}">${items.name}</a>
              </p>              
              <p class="text-gray-500 text-xs pt-1">$ ${items.price}</p>
              <p class="text-gray-500 text-xs pt-1">on December 12, 2021</p>
            </div>
      </article>
        `;
      }
    }).join("");


    return /* html */ `

      ${Header.render()}

      

      <!--headline-->
      <div class="h-40" style="background-color: #F8EFEA;">
          <div class="h-24 min-h-full flex items-center justify-center">

            <div class=" self-center text-center">
              <h1 class="lora text-4xl mb-2">Shop</h1>
              <a href="#" class="font-bold text-gray-600 text-xs hover:text-black transition delay-300 else-in-out">HOME</a>
              <span class="text-gray-400 font-bold uppercase text-xs">/ SHOP</span>
            </div>
            
          </div>
      </div>
      
      <div class="container mx-auto px-6">

              <!-- title -->
              <div class="py-10">
                <p class="text-center font-light text-5xl text-black py-2 font-serif">New Arrivals</p>
                <p class="text-center text-gray-400 font-semibold text-sm">NEW LIMITED COLLECTION</p>
              </div> 

          <!-- All product -->
            <div class="container mx-auto py-6 px-20">
            
                <!-- Bộ lọc giá -->
                <div class="relative mx-4 inline-flex">
                  <svg class="w-2 h-2 absolute top-0 right-0 m-4 pointer-events-none" xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 412 232">
                      <path
                          d="M206 171.144L42.678 7.822c-9.763-9.763-25.592-9.763-35.355 0-9.763 9.764-9.763 25.592 0 35.355l181 181c4.88 4.882 11.279 7.323 17.677 7.323s12.796-2.441 17.678-7.322l181-181c9.763-9.764 9.763-25.592 0-35.355-9.763-9.763-25.592-9.763-35.355 0L206 171.144z"
                          fill="#648299" fill-rule="nonzero" />
                  </svg>
                  
                  <select
                      class="border border-gray-300 text-gray-600 h-10 pl-5 pr-10 bg-white hover:border-gray-400 focus:outline-none appearance-none hind font-semibold">
                      <option>Default sorting</option>
                      <option>Sort by popularity</option>
                      <option>Sort by average rating</option>
                      <option>Sort by latest</option>
                      <option>Sort by price : low to high</option>
                  </select>
                  
    
                </div>

                <!-- main-content -->
                <div class="md:flex no-wrap md:-mx-2">

                  <div class="xl:w-9/12 w-full mt-8 mx-4">
                      <div id="cart" class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3">
                      ${await product}
                      </div>

                      <!-- component -->
                      <ul class="flex my-8">
                          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-500 rounded-lg " id="prev">
                             Prev
                          </li>
                          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                              <a class="font-bold" href="#">1</a>
                          </li>
                          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                              <a class="font-bold" href="#">2</a>
                          </li>
                          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg">
                              <a class="font-bold" href="#">3</a>
                          </li>
                          <li class="mx-1 px-3 py-2 bg-gray-200 text-gray-700 hover:bg-gray-700 hover:text-gray-200 rounded-lg cursor-pointer next" id="">
                              Next
                          </li>
                      </ul>

                  </div>

                  <div class=" xl:w-3/12 w-full mt-8 mx-4">

                        <!--search products-->
                        <form class="mb-2">
                        <input class="p-2 w-full text-gray-800 border border-gray-200 focus:outline-none mb-2" type="text" id="search" placeholder=" Search products">

                        <button type="submit" class="inline-block w-full p-2 text-xs font-medium leading-6 text-center text-white uppercase transition duration-500 bg-red-400 hover:bg-white hover:border-gray-200 hover:text-gray-900 border focus:outline-none border-red-400">
                        search
                      </button>
                        
                        </form>

                        <!--categories-->
                        <div class="border border-gray-200">
                             <h4 class="hind uppercase font-semibold text-center py-4">Categories</h4>
                             <div class="divide-y divide-light-blue-400 px-6">${cate}</div>
                        </div>
                        <!--end-categories-->

                    <!-- featured products -->
                    <div class="mt-12 border border-gray-200">
                      <h3 class="uppercase lora font-semibold text-center p-3 text-sm">
                        featured products
                      </h3>
                      ${await feature}
                    </div>
                    <!-- end-featured products -->
                  </div>

                </div>
                <!--end-main-content -->

            </div>

            

      </div>


      ${footer.render()}


     `



  },
  async afterRender() {
    add_cart(shop);
    await Header.afterRender();

  }

};



export default shop;
