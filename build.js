const { build } = require("electron-builder");

build({
    config: {
        appId: "local.test.app1",
        productName: "mama",
        files: ["./*"],
    },
});