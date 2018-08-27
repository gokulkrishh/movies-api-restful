module.exports = {
  extends: "airbnb-base",
  rules: {
    "max-len": [1, 140, 2, { ignoreComments: true }],
    quotes: ["error", "double", { allowTemplateLiterals: true }],
  },
};
