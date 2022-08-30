Module.register("background", {
    defaults: {
    },

    getStyles: function() {
    },
    
    start: function() {
    },

    getDom: function() {
        var wrapper = document.createElement("img");
        wrapper.src = "modules/background/photos/photo1.jpg";
        return wrapper;
    },
})