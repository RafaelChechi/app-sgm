import axios, { AxiosInstance } from "axios";
import { messageService } from "../MessageService";

class Service {
  service: AxiosInstance;

  constructor() {
    const service = axios.create({
      baseURL: process.env.VUE_APP_ROOT_API,
    });
    service.interceptors.response.use(this.handleSuccess, this.handleError);
    service.interceptors.request.use(function (config) {
      //const token = `Bearer ${AuthorizationService.getToken()}`;
      //config.headers.Authorization = token;

      return config;
    });
    this.service = service;
  }

  handleSuccess(response: any) {
    return response;
  }

  handleError = (ex: any) => {
    switch (ex.response.status) {
      case 401:
        messageService.error("Falha na autenticação, Tenten novamente");
        //AuthorizationService.removeToken();
        break;
      case 404:
        break;
      case 409:
        messageService.error(ex.response.data.message);
        break;
      case 422:
        this.showMessageErrors(ex);
        break;
      default:
        break;
    }

    return Promise.reject(ex);
  };

  showMessageErrors(ex: any) {
    const item = Object.values(ex.response.data.errors);
    item.forEach((element: any) => {
      messageService.error(element[0]);
    });
  }

  redirectTo = (document: any, path: any) => {
    document.location = path;
  };

  async get(path: any, callback: any = undefined): Promise<any> {
    return await this.service
      .get(path)
      .then((response: any) =>
        callback == undefined
          ? this.resolve(response.status, response.data)
          : callback(response.status, response.data)
      );
  }

  async patch(path: any, payload: any, callback: any = undefined) {
    return await this.service
      .request({
        method: "PATCH",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response: any) => callback(response.status, response.data));
  }

  async put(path: any, payload: any, callback: any = undefined) {
    return await this.service
      .request({
        method: "PUT",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response: any) =>
        callback == undefined
          ? this.resolve(response.status, response.data)
          : callback(response.status, response.data)
      );
  }

  async delete(path: any, callback: any = undefined) {
    return await this.service
      .delete(path)
      .then((response: any) =>
        callback == undefined
          ? this.resolve(response.status, response.data)
          : callback(response.status, response.data)
      );
  }

  async post(path: any, payload: any, callback: any = undefined): Promise<any> {
    return await this.service
      .request({
        method: "POST",
        url: path,
        responseType: "json",
        data: payload,
      })
      .then((response: any) =>
        callback == undefined
          ? this.resolve(response.status, response.data)
          : callback(response.status, response.data)
      );
  }

  resolve(status: any, data: any) {
    return { status, data };
  }
}

export default new Service();
