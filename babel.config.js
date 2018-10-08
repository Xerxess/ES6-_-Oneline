module.exports = function () {
    const presets = [
        ["@babel/env", {
            useBuiltIns: "usage"
        }]
    ];
    const plugins = ["transform-decorators"];

    return {
        presets,
        plugins
    };
}();