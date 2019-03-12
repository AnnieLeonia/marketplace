// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from "vue";
import App from "./App";
import ElementUI from "element-ui";
import VModal from "vue-js-modal";
import VCalendar from "v-calendar";
import { Store } from "./store";

import "element-ui/lib/theme-chalk/index.css";
import "v-calendar/lib/v-calendar.min.css";

Vue.use(ElementUI);
Vue.use(VModal, { dynamic: true, injectModalsContainer: true });
Vue.use(VCalendar, {
  firstDayOfWeek: 2,
  paneWidth: 400,
  datePickerShowDayPopover: false
});

Vue.config.productionTip = false;

/* eslint-disable no-new */
new Vue({
  el: "#app",
  components: { App },
  store: Store,
  template: "<App/>"
});
