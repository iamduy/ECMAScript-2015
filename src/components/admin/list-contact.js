import contactAPI from '../../api/contactAPI'
import {$ , reRender} from '../../until.js'
import swal from 'sweetalert';


const listContacts = {
   async render(){
        const {data : contacts } = await contactAPI.getAll();
        return /* html */`
        <table class="min-w-full">
            <thead>
              <tr>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">#</th>
                    <th
                    class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Customer</th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Email</th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Phone</th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider">Comment</th>
                    <th class="px-6 py-3 border-b border-gray-200 bg-gray-50 text-left text-xs leading-4 font-medium text-gray-500 uppercase tracking-wider text-center">Action</th>
              </tr>
            </thead>

            <tbody class="bg-white">
            ${
                contacts.map((items , index) => {
                   return /* html */ `
                    <tr> 
                        <td class="px-6 py-4 whitespace-nowrap text-sm text-gray-500 font-semibold">
                         ${index}
                        </td>

                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900 font-semibold hind">${items.name}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900 font-semibold hind">${items.email}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900 font-semibold hind">${items.phone}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900 font-semibold hind">${items.comment}</div>
                        </td>
                        <td class="px-6 py-4 whitespace-nowrap">
                            <div class="text-sm text-gray-900 font-semibold hind">
                            <button class="btn focus:outline-none" data-id="${items.id}">
                                <svg class=" text-red-400 transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 md:w-7 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                                </svg>
                                </button>
                            </div>
                        </td>
                    </tr>
                   `
                }).join("")
            }
               
            </tbody>
          
        </table>
        `
    },
    async afterRender(){
        const btns = $('#list-contacts .btn');

        btns.forEach( items => {
            const id = items.dataset.id;
            items.addEventListener('click' , async () => {

                swal({
                    title: "Are you sure?",
                    icon: "warning",
                    buttons: true,
                    dangerMode: true,
                  })
                  .then( async (willDelete) => {
                    if (willDelete) {
                        await contactAPI.remove(id);
                        await reRender(listContacts , '#list-contacts');
                        swal("Deleted!", {
                            icon: "success",
                          });
                    } else {
                      swal("This comment is safe!");
                    }
                  });

            })
        })
    }
}
export default listContacts;