

const blog_home = {
    render() {
        return  /*html*/`
        
        <div class="py-10">
        <p class="text-center font-light text-5xl text-black py-2 lora">Handmade Blog</p>
        <p class="text-center text-gray-400 font-semibold text-sm">INSPIRAITON AND TUTORIALS</p>
        </div>  

              <!--blog 1 -->
              <div class="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">
                <div class="subsec flex-none overflow-hidden max-h-96">
                 <a href="/#/blog/6">
                  <img class="w-full" src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2016/06/1-2.jpg" alt="" />
                  </a>
                </div>
                <div class="subsec my-auto p-8">
                  <div class="font-light text-3xl mb-5 lora lora hover:text-red-200 transition delay-150 else-in-out">
                  <a href="/#/blog/6">What is paleo pizza crust made out of?</a>
                  </div>
                  <div class="desc text-lg dance">
                  We've seen it all kinds of ways, with different types of flours, but we settled on almond flour for its nutty flavor. We also mix in spices—Italian seasoning and garlic powder—to give it more flavor. We skip yeast because it can be a pain and instead incorporate eggs and olive oil. The eggs help make the crust fluffy.
                  </div>
                </div>
              </div>

              <!--blog 2 -->
              <div class="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">

                  <div class="subsec my-auto p-8">
                  <div class="font-light text-3xl mb-5 lora hover:text-red-200 transition delay-150 else-in-out">
                  <a href="/#/blog/1">30 Homemade Food Gifts For The Holidays</a>
                  </div>
                  <div class="desc text-lg dance">
                  Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ullam, voluptatum? Nemo odit est iure at id eveniet? Illo ut illum quod minima quam quis beatae sunt! Accusantium pariatur laborum adipisci?
                  </div>
                </div>

                <div class="subsec flex-none overflow-hidden max-h-96">
                <a href="/#/blog/1">
                  <img class="w-full" src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2016/12/4-4-580x580.jpg" alt="" />
                  </a>
                </div>

                
              </div>

              <!--blog 3 -->
              <div class="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">
                <div class="subsec flex-none overflow-hidden max-h-96">
                <a href="/#/blog/5"> 
                
                <img class="w-full" src="https://handmade-shop.cmsmasters.net/wp-content/uploads/2016/06/3-2-580x580.jpg" alt="" />

                </a>
                </div>
                <div class="subsec my-auto p-8">
                  <div class="font-light text-3xl mb-5 lora hover:text-red-200 transition delay-150 else-in-out">
                  <a href="/#/blog/5"> Romantic Letters Decoration 5 Steps Tutorial</a>
                  </div>
                  <div class="desc text-lg dance">We've seen it all kinds of ways, with different types of flours, but we settled on almond flour for its nutty flavor. We also mix in spices—Italian seasoning and garlic powder—to give it more flavor. We skip yeast because it can be a pain and instead incorporate eggs and olive oil. The eggs help make the crust fluffy.</div>
                </div>
              </div>

              
                

            
        
        `
    }
}
export default blog_home;