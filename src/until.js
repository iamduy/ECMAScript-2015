export const parseRequestUrl = () => {
    const url = document.location.hash.toLowerCase();// => /#/product/2
    const request = url.split("/"); // => {"#" , "product" , "2"}
    return {
        resource: request[1],
        id: request[2],
        action: request[3]
    }
}

export const $ = (selector) => {
    let elements = document.querySelectorAll(selector);
    return elements.length == 1 ? elements[0] : [...elements];
}

export const reRender = async (component , position = "") => {
    if(position){
        $(position).innerHTML = await component.render(); 
    }else{
        $('#main-content').innerHTML = await component.render();
    }

    await component.afterRender();
}

export const CheckLogin = (URL) => {
    const user = JSON.parse(localStorage.getItem('user'));
    if (user) {
        if (user.role === 'admin') {
            return user;
        } else {
            if (URL === 'checkout') {
                return user;
            } else {
                window.location.hash = '#/';
                return user;
            }
        }
    } else {
        window.location.hash = '#/login';
    }
}