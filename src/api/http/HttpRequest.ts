import { AxiosInstance } from "axios";

type ApiUrlType = "/overall" | "/platform" | "/campaign";

export class HttpRequest {
  private service: AxiosInstance;

  constructor(service: AxiosInstance) {
    this.service = service;
  }

  get(url: ApiUrlType, queryString = "") {
    return this.service.get(`${url}?${queryString}`).catch((error) => {
      console.log("error: ", error);
    });
  }

  post<T>(url: ApiUrlType, data: T) {
    return this.service.post(`${url}`, data).catch(console.log);
  }

  patch<T>(id: number, data: T) {
    return this.service.patch(`/${id}`, data);
  }

  // delete(url: ApiUrlType, id: number) {
  //   return this.service.delete(`${url}`, id);
  // }
}
