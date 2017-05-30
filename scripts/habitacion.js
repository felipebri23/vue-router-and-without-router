var Habitacion = {
    mixins: [Mixin],
    name: 'Habitacion',
    template: `
        <h1>{{ title }}</h1>
    `,
    data: function () {
        return {
            title: 'Habitaciones'
        }
    }
}
