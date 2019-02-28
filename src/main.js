// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import VModal from "vue-js-modal";
import VCalendar from "v-calendar";
import "v-calendar/lib/v-calendar.min.css";

Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VCalendar, { firstDayOfWeek: 2 });

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  template: "<App/>"
});
