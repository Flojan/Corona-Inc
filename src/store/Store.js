import storeModel from "./State"; 
import { createStore } from "easy-peasy";

const store = createStore(storeModel);

export default store;