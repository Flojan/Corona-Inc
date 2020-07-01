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
  }),
};

const curClicksModel = {
  click: 0,
  setCurClicks: action((state, clicks) => {
    state.clicks = clicks;
  }),
};

const curCPSModel = {
  cps: 0,
  setCurCPS: action((state, cps) => {
    state.cps = cps;
  }),
};

const storeModel = {
  user: userModel,
  curClicks: curClicksModel,
  curCPS: curCPSModel,
};

export default storeModel;
