Module.register("background", {
    defaults: {
    },

    getStyles: function() {
        return ["background.css"]
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        var img = document.createElement("img");
        img.src = "modules/background/photo1.jpg";
        wrapper.appendChild(img);
        return wrapper;
    },
})