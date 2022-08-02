import axios, { AxiosInstance } from "axios";

const $axios: AxiosInstance = axios.create({
  baseURL: "https://test.qky.life/mcpedl"
  // baseURL: "https://jsonplaceholder.typicode.com"
});

export default $axios;
