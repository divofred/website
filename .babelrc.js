module.exports = {
    plugins: [
        ["@babel/plugin-proposal-decorators", { legacy: true }, "@babel/plugin-transform-classes"],
    ],
    presets: [
        [
            "babel-preset-gatsby",
            {
                targets: {
                    browsers: [">0.25%", "not dead"],
                },
            },
        ],
    ],
};
