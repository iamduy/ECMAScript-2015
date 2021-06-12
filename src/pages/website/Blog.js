import blogAPI from "../../api/blogAPI";
import footer from "../../components/website/Footer";
import Header from "../../components/website/Header";

const Blog = {
    async render() {
      window.scrollTo(0,0);
      try {
        const { data : blog } = await blogAPI.getAll();
        const res = blog.map((items) => {
            return /* html */ `
  
              <article class="sm:grid grid-cols-4 bg-white p-4 lg:col-span-2">
                  <a href="/#/blog/${items.id}" class="transform transition duration-500 hover:scale-125">
                      <img src="${items.image}" class="w-full">
                  </a>
                  <div class="pt-5 self-center sm:pt-0 sm:pl-5 col-span-3">
                  <p class="text-gray-900 hover:text-red-400 capitalize text-sm font-normal lora transition duration-500 else-in-out">
                    <a href="/#/blog/${items.id}">
                      ${items.title}
                    </a>
                  </p>
                  <p class="text-gray-500 text-xs pt-1">on December 12, 2016</p>
                  </div>
              </article>
               `;
          }).join("");


          const main = blog.map((blg) => {
            return /* html */ ` 
          <div class="mb-6">
                <div class=" overflow-hidden border border-gray-200 p-8">
                  <a href="/#/blog/${blg.id}">
                    <img class="h-auto w-full mx-auto" src="${blg.image}" />
                  </a>
                </div>

                <h3 class="my-4 text-justify text-gray-900 hover:text-red-400 transition duration-500 else-in-out font-normal md:text-2xl  lora capitalize">
                  <a href="/#/blog/${blg.id}"> ${blg.title}</a>
                </h3>

                <p class=" text-md font-normal text-gray-500 hind my-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam ipsam explicabo impedit quidem error aut nam similique vero et excepturi quo unde, iure sunt aperiam tenetur earum expedita enim sint...
                </p>
                <span class="uppercase font-semibold text-xs text-gray-900 hover:text-gray-400 transition delay-150 else-in-out">
                <a href="/#/blog/${blg.id}">read more</a>
                </span>
          </div>
          
            `
           
          }).join("");
  
        return /* html */ `

        ${Header.render()}
      
        <!--headline-->
        <div class="h-40" style="background-color: #F8EFEA;">
            <div class="h-24 min-h-full flex items-center justify-center">

              <div class=" self-center text-center">
                <h1 class="  lora text-4xl mb-2">Blogs</h1>
                <a href="#" class="font-bold text-gray-600 text-xs hover:text-black transition delay-300 else-in-out">HOME</a>

                <span class="text-gray-400 font-bold uppercase text-xs">/ Blogs</span>
              </div>
              
            </div>
        </div>
  
       
        
        <div class="container mx-auto my-10 p-5 px-20">

            <!-- title -->
            <div class="py-10">
                <p class="text-center font-light text-5xl text-black py-2 lora">Handmade Blog</p>
                <p class="text-center text-gray-400 font-semibold text-sm">INSPIRAITON AND TUTORIALS</p>
            </div> 

        <div class="md:flex no-wrap md:-mx-2">

            <!-- Left Side -->
            <div class="w-full md:w-8/12 mt-8 mx-4">

                <!-- Profile tab -->
               ${main}
                <!--End-Profile tab -->
            </div>
            <!-- end-left-side -->


            <!-- Right Side -->
            <div class="w-full md:w-4/12  mt-8 mx-4">

                <!-- Profile Card -->
                <div class="p-5 border border-gray-200 ">
                <h3 class="mb-3 text-center text-gray-900 uppercase font-bold lora">
                    About Author
                </h3>
                <div class="image overflow-hidden">
                    <img class="h-auto w-full mx-auto"
                    src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2015/04/1-380x292.jpg" />
                </div>
                <h1 class="text-gray-900 font-light lora text-center text-xl leading-8 my-1">Duy Dập Dờn</h1>

                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 text-center">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci quaerat consequuntur laudantium facilis voluptatibus! At quidem illo obcaecati molestiae quis.
                </p>
                <div class="md:flex-auto mt-2 flex justify-center">
                    <a href="#" class="w-6 mx-1 hover:text-yellow-600 transition delay-150 else-in-out">
                    <i class="uil uil-facebook-f"></i>
                    </a>
                    <a href="#" class="w-6 mx-1 hover:text-yellow-600 transition delay-150 else-in-out">
                    <i class="uil uil-twitter-alt"></i>
                    </a>
                    <a href="#" class="w-6 mx-1 hover:text-yellow-600 transition delay-150 else-in-out">
                    <i class="uil uil-youtube"></i>
                    </a>
                    <a href="#" class="w-6 mx-1 hover:text-yellow-600 transition delay-150 else-in-out">
                    <i class="uil uil-linkedin"></i>
                    </a>
                    <a href="#" class="w-6 mx-1 hover:text-yellow-600 transition delay-150 else-in-out">
                    <i class="uil uil-instagram"></i>
                    </a>
                </div>
                </div>
                <!-- End of profile card -->

                <!-- Find out -->
                <div class="p-6 mt-12 hidden w-full text-gray-600 md:flex md:flex-col font-light bg-red-100">

                <div class="p-2">
                    <p class="text-center col-span-2 flex lora">
                    Find out about exciting & exclusive updates before anyone else
                    </p>
                </div>

                <div class="py-3">
                <form action="/#/blog">
                    <input type="email" class="py-2.5 w-full md:w-6/12 text-grey-dark text-xs focus:outline-none border border-gray-200 m-0 p-0"
                    placeholder=" your@example.com" pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$" Required>
                    <button type="submit"
                    class="focus:outline-none w-full md:w-5/12 text-white text-xs p-2.5 bg-red-400 hover:bg-red-600 transition delay-150 ease-in-out">SUBCRIBE!</button>
                </form>
                </div>

                </div>
                <!-- end-find-out -->

                <!-- img -->
                <div class=" border border-gray-200 p-6 mt-12 hidden w-full md:flex">
                <img src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2016/12/banner.jpg" alt="">
                </div>
                <!--end img -->


                <!-- latest-post -->
                <div class="mt-12 border border-gray-200">
                <h3 class="uppercase lora font-semibold text-center p-3 text-sm">latest post</h3>

                 ${res}
                


                </div>
                <!-- end-latest-post -->

            </div>
            <!-- end-right-side -->

        </div>
  </div>

        ${footer.render()}
       `;
      } catch (error) {
        console.log(error);
      }
    },
    async afterRender() {
      await Header.afterRender();
    }
  };
  export default Blog;