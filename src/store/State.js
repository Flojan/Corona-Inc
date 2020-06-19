import { action } from "easy-peasy";

/**
 * userModel ist der State. setToken ist die Methode mit der man den State ändern
 * kann. Hier kann man noch weitere Details wie Username hineingeben um den User
 * zB zu begrüßen auf der Gamepage. 
 */
const userModel = {
    token: "",
    setToken: action((state, token) => {
        state.token = token;
        console.log("Der nice TOKEN: ", token);
    })
};
/**
 * in storeModel sind alle Storemodels gespeichert. 
 */
const storeModel = {
    user: userModel
};

export default storeModel;