Module.register("background", {
    defaults: {
    },

    getDom: function() {
        var wrapper = document.createElement("div");
        var img = document.createElement("img");
        img.src = "modules/background/photo1.jpg";
        wrapper.appendChild(img);
        return wrapper;
    },
})