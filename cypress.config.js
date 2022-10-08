const { defineConfig } = require("cypress");
const {
  initPlugin,
} = require("@frsource/cypress-plugin-visual-regression-diff/plugins");

module.exports = defineConfig({
  component: {
    devServer: {
      framework: "angular",
      bundler: "webpack",
    },
    specPattern: "**/*.cy.ts",
    setupNodeEvents(on, config) {
      initPlugin(on, config);
    },
  },
});
