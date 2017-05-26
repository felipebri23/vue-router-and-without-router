define(['vue'], function (Vue) {
    return Vue.extend({
        template: `
            <h1>{{ title }}</h1>
        `,
        data: function () {
            return {
                title: 'Habitaciones'
            }
        }
    })
});