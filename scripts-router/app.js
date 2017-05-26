require.config({
  baseUrl: "scripts-router",
  paths: {
    'vue': '../node_modules/vue/dist/vue',
    'vue_router': '../node_modules/vue-router/dist/vue-router'
  },
  shim: {
    vue: {
      exports: 'Vue'
    },
    vue_router: {
      exports: 'VueRouter'
    }
  }
});

require([
  'vue',
  'vue_router',
  'routes'
], function (Vue, VueRouter, AppRoutes) {

  Vue.use(VueRouter);

  var router = new VueRouter({
    mode: 'hash',
    routes: AppRoutes
  });

  new Vue({
    el: '#app',
    router: router,
    data: {
      title: 'Vuejs - Hoteles con Router'
    }
  });

});