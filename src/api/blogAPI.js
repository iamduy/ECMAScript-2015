import {axiosClient} from './axiosClient';
const blogAPI = {
    getAll(){
        const url = '/blog';
        return axiosClient.get(url);

    },
    get(id){
        const url = `/blog/${id}`;
        return axiosClient.get(url);
    }
}
export default blogAPI;