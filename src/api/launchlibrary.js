import axios from "axios";
export default axios.create({
  baseURL: "https://launchlibrary.net/1.4/launch",
  timeout: 2000,
  // headers: {'X-Custom-Header': 'foobar'}
});
