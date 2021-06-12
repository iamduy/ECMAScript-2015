
import { $, reRender } from '../../until'
import { up_cart, down_cart } from '../../cart.js'
import ShowCart from '../../components/website/Showcart.js'
import Header from '../../components/website/Header'
import Footer from '../../components/website/Footer'
const CartPage = {
    async render() {
        const arr_product_cart = JSON.parse(localStorage.getItem('arr_product_cart'));
        
        if (arr_product_cart != null) {
            return `
        ${Header.render()}
        ${await ShowCart.render()}
        ${Footer.render()}
      `
        } else {
            return `
        ${Header.render()}
        <div class="flex w-full px-24 h-auto my-10">
          <div class="w-full h-auto flex-col ">
              <p class="text-center text-md tracking-widest font-bold uppercase py-4">Bạn chưa có sản phẩm nào trong giỏ hàng !</p>
              <a href="#/shop" class="text-center"> < CONTINUE SHOPPING</a>
          </div>
        </div>
        ${Footer.render()}
        `
        }

    },
    async afterRender() {
        const arr_product_cart = JSON.parse(localStorage.getItem('arr_product_cart'));
        // xóa cart 
        const btns_remove = $('#cart .remove-product-cart');
        if (btns_remove.length) {
            btns_remove.forEach(btn => {
                btn.onclick = async () => {
                    const id = btn.dataset.id;
                    const question = confirm('Bạn có chắc chắn muốn xóa ?');
                    if (question) {
                        const new_arr = arr_product_cart.filter(product => product.id != id);
                        localStorage.setItem('arr_product_cart', JSON.stringify(new_arr));
                        await reRender(CartPage, '#main-content');
                    }
                }
            });
        } else {
            btns_remove.onclick = async () => {
                const question = confirm('Bạn có chắc chắn muốn xóa ?');
                if (question) {
                    localStorage.removeItem('arr_product_cart');
                    await reRender(CartPage, '#main-content');
                }
            }
        }
        //  up qty
        up_cart(CartPage);
        //  down qty 
        down_cart(CartPage);

        await Header.afterRender();
    }
}
export default CartPage;




