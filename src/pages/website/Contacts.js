import Footer from "../../components/website/Footer";
import Header from "../../components/website/Header";
import contactAPI from '../../api/contactAPI'
import { $, reRender } from "../../until.js";
import swal from 'sweetalert';
const Contacts = {
    render() {

        return /* html */ `
            ${Header.render()}
            
            <!--headline-->
            <div class="h-40" style="background-color: #F8EFEA;">
                <div class="h-24 min-h-full flex items-center justify-center">

                  <div class=" self-center text-center">
                    <h1 class="  lora text-4xl mb-2">Contacts</h1>
                    <a href="#" class="font-bold text-gray-600 text-xs hover:text-black transition delay-300 else-in-out">HOME</a>

                    <span class="text-gray-400 font-bold uppercase text-xs">/ Contacts</span>
                  </div>
                  
                </div>
            </div>
            
            <div class="container mx-auto my-10 p-5">
                <div class="md:flex no-wrap md:-mx-2">
                  <!-- Left Side -->
                  <div class="w-full md:w-3/12 md:mx-2 mt-8 ">
                      <!-- Profile Card -->
                      <div class="p-5 border border-gray-300">
                            <h3 class="mb-3 text-center text-gray-900 uppercase font-bold lora">
                                About Author
                            </h3>
                            <div class="image overflow-hidden">
                                <img class="h-auto w-full mx-auto"
                                src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2015/04/1-380x292.jpg" />
                            </div>
                            <h1 class="text-gray-900 font-light lora text-center text-xl leading-8 my-1">Duy Dập Dờn</h1>
                                
                            <p class="text-sm text-gray-500 hover:text-gray-600 leading-6 text-center">
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Temporibus ex fuga ipsa in nemo consequuntur assumenda, saepe dolore eveniet quae doloremque omnis, ipsam officia harum tempora repellat pariatur debitis rerum!
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
                  </div>
                  <!-- Right Side -->
                  <div class="w-full md:w-9/12 mt-8">
                      <!-- Profile tab -->
                    
                          <h3 class="text-center font-light lora text-4xl pb-5">
                              Contact Me for Cooperation
                          </h3>
      
                          <form class="p-8" id="contacts" >
      
                              <div class="flex flex-col md:flex-row">
                                  <div class="w-full mx-2">
                                      <label for="comment" class="text-xs text-gray-700">Your Comment : <span class="text-red-600">*</span></label>
                                      <textarea class="w-full border border-gray-300 focus:outline-none" rows="10" id="comment"> </textarea>
                                      <span class="form-message text-red-600 hind text-xs"></span>
                                  </div>
                              </div>
      
                              <div class="flex flex-col md:flex-row mt-5">

                                <div class="w-full mx-2">
                                <label for="name" class="text-xs text-gray-700 mx-1">Name : </label>
                                <div class="my-2 p-1">
                                    <input type="text" placeholder="Name"
                                    class="p-2 px-2 w-full text-gray-800 border border-gray-300 focus:outline-none" id="name">
                                    <span class="form-message text-red-600 hind text-xs"></span>
                                </div>
                                </div>

                                <div class="w-full mx-2">
                                <label for="email" class="text-xs text-gray-700 mx-1">Email : </label>
                                <div class="my-2 p-1">
                                    <input type="email" placeholder="Example@gmail.com"
                                    class="p-2 px-2 w-full text-gray-800 border border-gray-300 focus:outline-none" id="email">
                                    <span class="form-message text-red-600 hind text-xs"></span>
                                </div>
                                </div>
                                 
                                <div class="w-full mx-2">
                                      <label class="text-xs text-gray-700 mx-1">Phone : </label>
                                      <div class="my-2 p-1">
                                          <input type="text" placeholder="Phone" 
                                              class="p-2 px-2 w-full text-gray-800 border border-gray-300 focus:outline-none" id="phone">
                                              <span class="form-message text-red-600 hind text-xs"></span>
                                      </div>
                                  </div>
                                </div>
      
                              <button type="submit" class="mx-3 mt-3 inline-block px-6 py-2 text-xs font-medium leading-6 text-center text-white uppercase transition bg-red-500 hover:bg-red-600 focus:outline-none ">
                                  submit comment
                                </button>
                          </form>
                  
                    </div>
                 </div>
             </div>  
           
            ${Footer.render()}
               `;



    },

    async afterRender() {
        
        await Header.afterRender();

        $('#contacts').addEventListener('submit', e => {
            e.preventDefault();

            const new_contact = {
                id: Math.random().toString(36).substr(2, 9),
                name: $('#name').value,
                email: $('#email').value,
                phone: $('#phone').value,
                comment: $('#comment').value
            }
            console.log(new_contact);
            contactAPI.add(new_contact);
            swal({
                title: "Success !",
                icon: "success",
                button: "Done",
            });
        })
    }
};
export default Contacts;