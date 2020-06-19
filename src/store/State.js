import { action } from "easy-peasy";

const userModel = {
    token: "",
    setToken: action((state, token) => {
        state.token = token;
        console.log("Der nice TOKEN: ", token);
    })
};

const storeModel = {
    user: userModel
};

export default storeModel;