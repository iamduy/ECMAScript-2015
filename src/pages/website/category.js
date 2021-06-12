import { parseRequestUrl } from '../../until'
import productAPI from '../../api/productAPI'
import Header from '../../components/website/Header'
import Footer from '../../components/website/Footer'
import categoryAPI from '../../api/categoryAPI'
import { add_cart } from '../../cart'
const categoryPage = {
  async render() {
    window.scrollTo(0, 0);
    const { id } = parseRequestUrl();
    const { data: products } = await productAPI.getAll();
    const { data: categories } = await categoryAPI.getAll();
    const { data: category } = await categoryAPI.get(id);
    const slide = products.slice(0, 10);

    // list ra danh mục sản phẩm
    const cate = categories.map(cate => {
      return /* html */ `
             <ul class="py-3 hind font-semibold">
                 <li class="transition duration-500 ease-in-out transform hover:scale-110 hover:text-red-400 text-sm text-gray-900">
                 <a href="/#/category/${cate.id}">${cate.name}</a>
                 </li>
             </ul>
             `
    }).join("");

    //list ra sản phẩm thuộc danh mục 
    const res = products.filter(product => product.category == id).map(prod => {
      return /* html */`
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
        `
    }).join("");

    /*********************/
    const feature = slide.map((items) => {

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

    return /* html */`
        ${Header.render()}
 
        
        <!--headline-->
        <div class="h-60" style="background-image: url('${category.images}')">
            <div class="h-24 min-h-full flex items-center justify-center bg-gray-900 bg-opacity-25">

              <div class="self-center text-center text-white">
                <h1 class="lora text-4xl mb-2 ">Categories</h1>
                <a href="#" class="font-bold text-xs hover:text-red-400 transition duration-500 else-in-out">HOME</a>

                <span class="font-bold uppercase text-xs">/ ${category.name}</span>
              </div>
              
            </div>
        </div>

       <!-- Nội dung chính -->
        <div class="container mx-auto py-6 px-20">
            <div class="md:flex no-wrap md:-mx-2">

              

              <div class="xl:w-9/12 w-full mt-8 mx-4">
                  <!--Tiêu đề danh mục-->
                  <h3 class="text-center lora text-2xl font-normal">${category.name}</h3>
                  <div class="grid gap-4 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 mt-6">${await res}</div>
              </div>
              <div class=" xl:w-3/12 w-full mt-8 mx-4">

                    <!--search products-->
                    <form class="mb-2 mt-14">
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

                    <!-- featured products -->
                    <div class="mt-12 border border-gray-200">
                      <h3 class="uppercase lora font-semibold text-center p-3 text-sm">
                        featured products
                      </h3>
                      ${await feature}
                    </div>
              </div>

            </div>
        </div>
        ${Footer.render()}
        `;

  },
  async afterRender() {
    await Header.afterRender();
    add_cart(categoryPage);
  }
}
export default categoryPage;