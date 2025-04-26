const { defineConfig } = require("cypress");

module.exports = defineConfig({
  projectId: '33fsky',
  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
