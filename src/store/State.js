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
    })
};

const curGeneratorModel = {
    details: null,
    setCurGenerator: action((state, details) => {
        state.details = details;
        console.log("Genreator DETAILS", details);
    })
}
/**
 * in storeModel sind alle Storemodels gespeichert. 
 */
const storeModel = {
    user: userModel,
    curGenerators: curGeneratorModel
};

export default storeModel;