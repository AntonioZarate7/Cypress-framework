const { defineConfig } = require('cypress');
const createBuilder = require('@bahmutov/cypress-esbuild-preprocessor');
const preprocessor = require('@badeball/cypress-cucumber-preprocessor');
const createEsbuildPlugin = require('@badeball/cypress-cucumber-preprocessor/esbuild');
const allureWriter = require('@shelex/cypress-allure-plugin/writer');

async function setupNodeEvents(on, config){
    await preprocessor.addCucumberPreprocessorPlugin(on, config);

    on("file:preprocessor", createBuilder({
        plugins: [createEsbuildPlugin.default(config)]
    }));

    allureWriter(on, config);
  require('cypress-mochawesome-reporter/plugin')(on);
 
  on('before:browser:launch', (browser = {}, launchOptions) => {
    if (browser.name === 'chrome') {
      launchOptions.args.push('--disable-gpu');
      launchOptions.args.push('--disable-extensions');
      launchOptions.args.push('--disable-popup-blocking');
      launchOptions.args.push('--enable-managed-downloads');
      launchOptions.preferences = {
        'download': {
          'default_directory': 'output/cypress/downloads',
          'prompt_for_download': false,
          'directory_upgrade': true
        },
        'plugins': {
          'always_open_pdf_externally': true
        }
      };
    }
    return launchOptions;
  });
 
  return config;
}

module.exports = defineConfig({
    numTestsKeptInMemory: 1,
    experimentalMemoryManagement: true,
    defaultCommandTimeout: 50000,
    pageLoadTimeout: 120000,
    downloadsFolder: './output/cypress/downloads',
    fileServerFolder: './',
    fixturesFolder: './cypress/fixtures',
    screenshotsFolder: './output/cypress/screenshots',
    screenshotOnRunFailure: true,
    trashAssetsBeforeRuns: true,
    videosFolder: './output/cypress/videos',
    video: true,
    reporter: 'cypress-mochawesome-reporter',
    reporterOptions: {
      reportDir: 'output/cypress/results',
      charts: true,
      reportPageTitle: 'Demo report',
      embeddedScreenshots: true,
      embeddedVideos: true,
      inlineAssets: true,
      saveAllAttempts: true
    },
    userAgent: 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/88.0.4324.190 Safari/537.36',
    viewportHeight: 768,
    viewportWidth: 1266,
    e2e: {
      setupNodeEvents,
      specPattern: ['test/features/**/*.feature'],
      screenshotsFolder: 'cypress/screenshots',
      trashAssetsBeforeRuns: true,
      retries: {
        runMode: 0,
        openMode: 0
      },
      chromeWebSecurity: false,
      screenshotOnEveryTest: false
    }
  });