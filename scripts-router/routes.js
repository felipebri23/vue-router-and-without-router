define([
  './home',
  './habitacion',
  './servicio'
], function (Home, Habitacion, Servicio) {
  return [
    {
      path: '/',
      component: Home
    },
    {
      path: '/habitacion',
      component: Habitacion
    },
    {
      path: '/servicio',
      component: Servicio
    }
  ]
});