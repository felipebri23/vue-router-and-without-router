var app = new Vue({
  mixins: [Mixin],
  name: 'App',
  el: '#app',
  data: {
    title: 'Vuejs - Hoteles',
    currentView: { name: 'Home', component: Home},
    views: [
      { name: 'Home', component: Home },
      { name: 'Habitacion', component: Habitacion },
      { name: 'Servicio', component: Servicio }
    ]
  },
  methods: {
    currentChange: function (newView) {
      let index = this.views.map(x => x.name).indexOf(newView);
      this.currentView = this.views[index];
    }
  }
})
