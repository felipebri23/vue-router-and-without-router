var Servicio = {
    mixins: [Mixin],
    name: 'Servicio',
    template: `
        <h1>{{ title }}</h1>
    `,
    data: function () {
        return {
            title: 'Servicios'
        }
    }
}
