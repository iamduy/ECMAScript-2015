const service = {
    render(){
        return /* html */`
        
        <div>      
            <style>
                .bannerFondo{
                    height: 400px;
                }
            </style>
            <div class="bannerFondo w-full bg-left-top bg-auto bg-repeat-x" style="background-image: url(https://www.wallpaperup.com/uploads/wallpapers/2013/12/14/195248/3068c7f3ac18868f32bc50bbf3773454-700.jpg)">
            </div>

              <div class="-mt-64 mx-auto hind">
                <div class="w-full text-center">
                  <p class="text-sm tracking-widest text-white font-bold text-gray-200">SHOP UNIQUE HAND MADE ITEMS</p>
                  <h3 class="font-extralight text-3xl text-white ">
                    Exclusive Items Created With Love
                  </h3>

              </div>
                      
              <div class="grid grid-cols-1 gap-4 sm:grid-cols-3 hind  ">

                  <div class="p-2 sm:p-10 text-center  mx-auto">
                      <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                          <div class="space-y-10 text-gray-900">
                      
                              <svg class="w-16 h-16 mx-auto text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                              </svg>

                              <div class="px-6 py-4">
                                  <div class="space-y-5">
                                      <div class="font-bold text-xl mb-2">SPECIAL DISCOUNT</div>
                                      <p class="text-base font-semibold ">
                                      Get attracttive offers day by day
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="p-2 sm:p-10 text-center  text-white mx-auto"> 
                      <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-yellow-200 ">
                          <div class="space-y-10 ">
                            <svg class="w-16 h-16 mx-auto text-white" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M8 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM15 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z" />
                                <path d="M3 4a1 1 0 00-1 1v10a1 1 0 001 1h1.05a2.5 2.5 0 014.9 0H10a1 1 0 001-1V5a1 1 0 00-1-1H3zM14 7a1 1 0 00-1 1v6.05A2.5 2.5 0 0115.95 16H17a1 1 0 001-1v-5a1 1 0 00-.293-.707l-2-2A1 1 0 0015 7h-1z" />
                              </svg>
                              <div class="px-6 py-4">
                                  <div class="space-y-5">
                                      <div class="font-bold text-xl mb-2">FAST DELIVERY</div>
                                      <p class="text-base font-semibold">
                                        Same day delivery as soon as possible
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                  <div class="p-2 sm:p-10 text-center  mx-auto">
                      <div class="py-16 max-w-sm rounded overflow-hidden shadow-lg bg-white">
                          <div class="space-y-10 ">
                            <svg class="w-16 h-16 mx-auto text-red-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                              </svg>
                              
                              <div class="px-6 py-4">
                                  <div class="space-y-5">
                                      <div class="font-bold text-xl mb-2">100% MONEY BACK</div>
                                      <p class="text-base font-semibold">
                                        We care about our customers
                                      </p>
                                  </div>
                              </div>
                          </div>
                      </div>
                  </div>

                   </div>
            </div>
        
        `
    }
}
export default service;