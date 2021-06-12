import { axiosClient } from './axiosClient.js';
const OrderDetail = {
    getAll(){
        const url = `/orderdetail`;
        return axiosClient.get(url);
    },
    getId(id){
        const url = `/orderdetail/${id}`;
        return axiosClient.get(url);
    },
    add(order_detail){
        const url = `/orderdetail`;
        return axiosClient.post(url,order_detail);
    },
    remove(id){
        const url = `/orderdetail/${id}`;
        return axiosClient.delete(url);
    }
}
export default OrderDetail;
