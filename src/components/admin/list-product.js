import productAPI from "../../api/productAPI";
import { reRender , $ } from "../../until";
import swal from 'sweetalert';
const listProd = {
   async render(){

    const {data : products } = await productAPI.getAll();

  
    return /* html */`

          

        <table class="min-w-full">
              <thead>
                      <tr>
                        <th
                          class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          #</th>
                        <th
                          class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Images</th>
                     
                        <th
                          class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Name</th>
                      
                        <th
                           class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Status</th>
                        <th
                          class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">
                          Price</th>
                        <th 
                          class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">
                           action
                          </th>
                      </tr>
              </thead>

              <tbody class="bg-white">
                
              ${products.map((product , index) => {

                return /* html */`
              <tr>
              <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                  ${index}
                </td>
                  <td class="px-6 py-4 whitespace-nowrap">
                    <div class="flex items-center">
                      <div class="flex-shrink-0 h-16 w-16 transform transition duration-500 hover:scale-125">
                      <img class="h-15 w-15 rounded-full" src="${product.image}" alt="">
                      </div>
                      
                    </div>
                  </td>
                  
                <td class="px-6 py-4 whitespace-nowrap">
                  <div class="text-sm text-gray-900 font-semibold">${product.name}</div>
                </td>

                <td class="px-6 py-4 whitespace-nowrap">
                  
                    ${product.status ? '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-green-100 text-green-800">còn hàng</span>' : '<span class="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">hết hàng</span>'}
                
                </td>
                <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500">
                  $ ${product.price} 
                </td>

                <td class="px-6 py-4 whitespace-nowrap text-center text-sm grid grid-cols-2 md:gap-2 gap-4">

                    <div>
                        <a href="#/products-edit/${product.id}">
                        <svg class="text-green-800 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:w-7 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
                        </svg>
                        </a>
                    </div>
                    <div>
                        <button class="btn focus:outline-none" data-id="${product.id}">
                        <svg class=" text-red-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:w-7 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                        </svg>
                        </button>
                    </div>
                 
                </td>
            </tr>
                `
            }).join("")}

              </tbody>
        </table>

       

    `
  },

  async afterRender(){

    // tạo 1 biến để gọi đến các button trong bảng 
    const btns = $('#list-products .btn');
    // console.log(btns);

    btns.forEach(btn => {
      const id = btn.dataset.id;
     
      btn.addEventListener('click', async ()=> {
        swal({
          title: "Are you sure?",
          text: "Once deleted, you will not be able to recover this image file!",
          icon: "warning",
          buttons: true,
          dangerMode: true,
        })
        .then( async (willDelete) => {
          if (willDelete) {
            await  productAPI.remove(id);
            await  reRender(listProd , '#list-products');
            swal("Your images file has been deleted!", {
              icon: "success",
            });
          } else {
            swal("Your image file is safe!");
          }
        });

        // let res = confirm('Delete this product?');
        // if(res){
        //   await  productAPI.remove(id);
        //   await  reRender(listProd , '#list-products');
        // }

      })
    })
  }


}
export default listProd;