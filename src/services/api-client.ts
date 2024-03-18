import axios from "axios";

export default axios.create({
    baseURL:"https://api.rawg.io/api",
    params:{
        key: "bd8396d9061942629f50b586bf571a8c"
    }
})