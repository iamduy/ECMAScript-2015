import {axiosClient} from './axiosClient';

const contactAPI = {
      
    getAll(){
        const url = '/contacts';
        return axiosClient.get(url);
    },
    get(id){
        const url = `/contacts/${id}`;
        return axiosClient.get(url);
    },
    remove(id){
        const url = `/contacts/${id}`;
        return axiosClient.delete(url);
    },
    add(product){
        const url = `/contacts`;
        return axiosClient.post(url , product);
    }

}
export default contactAPI;




