import { reactive } from "vue";

const state = reactive({
  usePageTransition: true,
});

const store = {
  state,
};

export default store;
