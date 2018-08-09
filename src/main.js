import Vue from "vue";
import App from "./App.vue";
import ElementUI from "element-ui";
import routes from "./routes";
import VueRouter from "vue-router";
import locale from "element-ui/lib/locale/lang/en";

Vue.use(ElementUI, { locale });
Vue.use(VueRouter);
Vue.config.productionTip = false;

const router = new VueRouter({ mode: "history", routes });

new Vue({
  render: h => h(App),
  router
}).$mount("#app");
