const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '1edtsc',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
    experimentalRunAllSpecs: true,
    baseUrl: "https://front.serverest.dev/",
  },
});
