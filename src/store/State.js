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

const curGeneratorModel = {
  details: [],
  setCurGenerator: action((state, details) => {
    state.details = details;
    console.log("Genreator DETAILS", details[0].amount);
  }),
};

const curUpgradesModel = {
  details: [],
  setCurUpgrades: action((state, details) => {
    state.details = details;
    console.log("Upgrade DETAILS", details);
  }),
};

const curCPSModel = {
  cps: 0,
  setCurCPS: action((state, cps) => {
    state.cps = cps;
    // console.log("CPS", cps);
  }),
};

/**
 * in storeModel sind alle Storemodels gespeichert.
 */
const storeModel = {
  user: userModel,
  curGenerators: curGeneratorModel,
  curUpgrades: curUpgradesModel,
  curCPS: curCPSModel,
};

export default storeModel;
