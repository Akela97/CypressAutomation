const { defineConfig } = require("cypress");

const browserify = require("@cypress/browserify-preprocessor");
const { addCucumberPreprocessorPlugin } = require("@badeball/cypress-cucumber-preprocessor");
const { preprocessor } = require("@badeball/cypress-cucumber-preprocessor/browserify");

async function setupNodeEvents(on, config) {
  // HTML report
  require('cypress-mochawesome-reporter/plugin')(on);

  // This is required for the preprocessor to be able to generate JSON reports after each run, and more
  await addCucumberPreprocessorPlugin(on, config);

  // Ensure the browserify preprocessor is used
  const options = browserify.defaultOptions;

  on("file:preprocessor", browserify(options));

  // Make sure to return the config object as it might have been modified by the plugin
  return config;
}

module.exports = defineConfig({
  defaultCommandTimeout: 6000,
  reporter: 'cypress-mochawesome-reporter',
  env: {
    url: "https://rahulshettyacademy.com"
  },
  retries: {
    runMode: 0,
  },
  projectId: "2an7dd",
  
  e2e: {
    setupNodeEvents,
    specPattern: [
      'cypress/integration/example/*.js',
      'cypress/integration/framework/*.js'
    ]
  },
});
