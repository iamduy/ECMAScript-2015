
import footer from '../../components/website/Footer';
import blogAPI from '../../api/blogAPI';
import {parseRequestUrl} from '../../until';
import Header from "../../components/website/Header";
const detail_blog = {
   async render(){
        window.scrollTo(0,0);

        const {id} = parseRequestUrl();

        //lay theo id
        const {data : blog } = await blogAPI.get(id);

        //lay tat ca data 
        const { data : blg } = await blogAPI.getAll();

        const res = blg.map( (items) => {

            return /* html */ `
            <article class="sm:grid grid-cols-4 bg-white p-4 lg:col-span-2">
                  <a href="/#/blog/${items.id}">
                      <img src="${items.image}" class="w-full">
                  </a>
                  <div class="pt-5 self-center sm:pt-0 sm:pl-5 col-span-3">
                  <p class="text-gray-900 hover:text-gray-400 capitalize text-sm font-normal lora transition delay-150 else-in-out">
                    <a href="/#/blog/${items.id}">
                      ${items.title}
                    </a>
                  </p>
                  <p class="text-gray-500 text-xs pt-1">on December 12, 2016</p>
                  </div>
              </article>
            `

        }).join("")

        return /* html */ `
        ${Header.render()}


  <div class="container mx-auto my-10 p-5 px-20">
        <div class="md:flex no-wrap md:-mx-2">

            <!-- Left Side -->
            <div class="w-full md:w-8/12 mt-8 mx-4">

                <!-- Profile tab -->
                <div class="md:p-12 p-6 border border-gray-200">
                <h3 class="mb-3 text-center text-gray-900 uppercase font-normal md:text-2xl lora w-13">
                    ${blog.title}
                </h3>
                <div class=" overflow-hidden">
                    <img class="h-auto w-full mx-auto"
                    src="${blog.image}" />
                </div>
                
                <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 text-justify mt-6 hind">${blog.content}</p>
   
                </div>
                <!--End-Profile tab -->

                <div class="mt-12">
                <h3 class="font-light lora text-xl pb-2">Leave a Reply</h3>
                <p class="font-light text-gray-600 hind">Your email address will not be published.</p>

                <form class="pt-8">

                    <div class="flex flex-col md:flex-row">
                    <div class="w-full">
                        <label class="text-xs text-gray-700">Your Comment : <span class="text-red-600">*</span></label>
                        <textarea class="w-full border border-gray-200 focus:outline-none" rows="6"></textarea>
                    </div>
                    </div>

                    <div class="flex flex-col md:flex-row mt-5">

                    <div class="w-full flex-1">
                        <label class="text-xs text-gray-700 mx-1">Name : <span class="text-red-600">*</span></label>
                        <div class="my-2 p-1 flex ">
                        <input class="p-2  w-full text-gray-800 border border-gray-200 focus:outline-none" />
                        </div>
                    </div>

                    <div class="w-full flex-1">
                        <label class="text-xs text-gray-700 mx-1">Email : <span class="text-red-600">*</span></label>
                        <div class="my-2 p-1 flex ">
                        <input type="email" class="p-2 w-full text-gray-800 border border-gray-200 focus:outline-none" />
                        </div>
                    </div>

                    </div>

                    <button
                    class="mx-1 mt-3 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 hover:bg-red-600 focus:outline-none ">
                    add comment
                    </button>
                </form>

                </div>
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
                    <input type="text" class="py-2.5 w-full md:w-6/12 text-grey-dark text-xs focus:outline-none border border-gray-200 m-0 p-0"
                    placeholder=" your@example.com">
                    <button
                    class="focus:outline-none w-full md:w-5/12 text-white text-xs p-2.5 bg-red-400 hover:bg-red-600 transition delay-150 ease-in-out">SUBCRIBE!</button>
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
        `
    },
    async afterRender() {
        await Header.afterRender();
      }
}
export default detail_blog;