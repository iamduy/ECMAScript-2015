import Footer from "../../components/website/Footer";
import Header from "../../components/website/Header";
const About = {
  render() {

    return /* html */ `
            ${Header.render()}

             <!--headline-->
            <div class="h-40" style="background-color: #F8EFEA;">
                <div class="h-24 min-h-full flex items-center justify-center">

                  <div class=" self-center text-center">
                    <h1 class=" lora text-4xl mb-2">About Me</h1>
                    <a href="#" class="font-bold text-gray-600 text-xs hover:text-black transition delay-300 else-in-out">HOME</a>

                    <span class="text-gray-400 font-bold uppercase text-xs">/ About Me</span>
                  </div>
                  
                </div>
            </div>
            
            
            <div class="container mx-auto px-20 py-20">

                <h3 class="text-center font-light lora text-3xl">Hello, I am Khanh Duy </h3>

                <!--blog 1 -->
                <div class="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">
                  <div class="subsec flex-none overflow-hidden max-h-96">
                  
                    <img class="w-full" src="https://i.pinimg.com/564x/05/20/6f/05206f314f292589b520eb8286409611.jpg" alt="" />
                    
                  </div>
                  <div class="subsec my-auto p-8">
                    <div class="font-light text-3xl mb-5 lora">
                    I’m Blogger, Handmade, Hipster
                    </div>
                    <div class="desc text-lg dance">
                      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat. Lorem ipsum dolor sit amet, cosectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat.Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </div>
                  </div>
                </div>

                <!--blog 2 -->
                <div class="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">

                    <div class="subsec my-auto p-8">
                    <div class="font-light text-3xl mb-5 lora">
                      I live and work in New York
                    </div>
                    <div class="desc text-lg dance">
                      Duis autem vel eum iriure dolor in hendrerit in vulputate velit esse molestie consequat, vel illum dolore eu feugiat. Lorem ipsum dolor sit amet, cosectetuer adipiscing elit, sed diam nonummy nibh euismod tincidunt ut laoreet dolore magna aliquam erat volutpat. Ut wisi enim ad minim veniam, quis nostrud exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea commodo consequat.
                    </div>
                  </div>

                  <div class="subsec flex-none overflow-hidden max-h-96">
                    <img class="w-full" src="https://i.pinimg.com/564x/15/e0/15/15e015d2aec7f5c12529a6256597446d.jpg" alt="" />
                  </div>

                  
                </div>

                <!--blog 3 -->
                <div class="section py-16 w-full scree font- grid md:grid-cols-2 text-gray-800">
                  <div class="subsec flex-none overflow-hidden max-h-96">
                
                  <img class="w-full" src="https://i.pinimg.com/564x/ac/07/6b/ac076b50bc1ab0479fabd983d83c6db3.jpg" alt="" />

                  </div>
                  <div class="subsec my-auto p-8">
                    <div class="font-light text-3xl mb-5 lora">
                    Watch my personal blog on youtube
                    </div>
                    <div class="desc text-lg dance">We've seen it all kinds of ways, with different types of flours, but we settled on almond flour for its nutty flavor. We also mix in spices—Italian seasoning and garlic powder—to give it more flavor. We skip yeast because it can be a pain and instead incorporate eggs and olive oil. The eggs help make the crust fluffy.</div>
                  </div>
                </div>
            
            </div>

            ${Footer.render()}
               `;


  },
  async afterRender() {
    await Header.afterRender();
  }
};
export default About;