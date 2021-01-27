import axios, { AxiosRequestConfig } from "axios";

import { loadingController } from '@ionic/vue';

const ApiService = {
    _requestInterceptor: 0,
    _401interceptor: 0,

    init(baseUrl: string | undefined) {
        axios.defaults.baseURL = baseUrl;
    },

    get(ressource: string) {
        return axios.get(ressource);
    },

    post(ressource: string, data: any) {
        return axios.post(ressource, data)
    },

    customRequest(data: AxiosRequestConfig) {
        return axios(data);
    },

    mountRequestInterceptor() {
        this._requestInterceptor = axios.interceptors.request.use(async config => {
            console.log("show loading");
            const loading = await loadingController.create({
                message: 'Please wait...'
            });
            await loading.present();
            return config;
        });
    }

}

export default ApiService;
