import createPersistedState from "vuex-persistedstate";

export default ({app, store, isHMR}) => {

  if (isHMR) return;
  if (process.client) {
    window.onNuxtReady((nuxt) => {
      createPersistedState({
          key: 'Login_User',
          paths: ['CURRENT_USER']
      })(store)
    });
  }
};
