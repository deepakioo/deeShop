import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import "bootstrap";
import Jquery from "jquery";
window.$  = Jquery
import "popper.js";
import "./assets/app.scss";
import {fb} from './firebase'


let app = ''
fb.auth().onAuthStateChanged(() => {
  if(!app) {
    createApp(App)
    .use(router)
    .mount("#app");
  }
});


