var Mixin = {
    beforeCreate: function () {
        var name = this.$options.name;
        if (name) {
            console.log(name + ' ' + 'beforeCreate component');
        }
    },
    created: function () {
        var name = this.$options.name;
        if (name) {
            console.log(name + ' created component');
        }
    },
    beforeMount: function () {
        var name = this.$options.name;
        if (name) {
            console.log(name + ' beforeMount component');
        }
    },
    mounted: function () {
        var name = this.$options.name;
        if (name) {
            console.log(name + ' mounted component');
        }
    },
    beforeDestroy: function () {
        var name = this.$options.name;
        if (name) {
            console.log(name + ' beforeDestroy component');
        }
    },
    destroyed: function () {
        var name = this.$options.name;
        if (name) {
            console.log(name + ' destroyed component');
        }
    },
    beforeUpdate: function () {
        var name = this.$options.name;
        if (name) {
            console.log(name + ' beforeUpdate component');
        }
    },
    updated: function () {
        var name = this.$options.name;
        if (name) {
            console.log(name + ' updated component');
        }
    }
}

