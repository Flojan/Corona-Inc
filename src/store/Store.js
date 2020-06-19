import storeModel from "./State"; 
import { createStore } from "easy-peasy";

// Wird später in Index erstellt. 
const store = createStore(storeModel);

export default store;