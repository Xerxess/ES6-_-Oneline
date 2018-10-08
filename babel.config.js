module.exports = function () {
    const presets = [
        ["@babel/env", {
            useBuiltIns: "usage"
        }]
    ];
    const plugins = [
        ["@babel/plugin-proposal-decorators", { "legacy": true }],
      ]

    return {
        presets,
        plugins
    };
}();