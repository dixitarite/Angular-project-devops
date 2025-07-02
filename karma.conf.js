module.exports = function (config) {
  config.set({
    basePath: '',
    frameworks: ['jasmine', '@angular-devkit/build-angular'],
    plugins: [
      require('karma-jasmine'),
      require('karma-chrome-launcher'),
      require('karma-jasmine-html-reporter'),
      require('karma-coverage'),
      require('karma-junit-reporter'), // Add this plugin for JUnit XML report
      require('@angular-devkit/build-angular/plugins/karma')
    ],
    client: {
      clearContext: false // Leave Jasmine Spec Runner output visible in browser
    },
    coverageReporter: {
      dir: require('path').join(__dirname, './coverage'),
      subdir: '.',
      reporters: [
        { type: 'html' },  // Generates ./coverage/angular.io-example/coverage/index.html
        { type: 'text-summary' },
        { type: 'lcovonly' },
        { type: 'json-summary' }  // Needed for GitHub Actions to enforce coverage thresholds
      ]
    },
    reporters: ['progress', 'kjhtml', 'coverage', 'junit'], // Add 'junit' here
    junitReporter: {
      outputDir: './test-results',  // Directory where XML report will be saved
      outputFile: 'test-results.xml',  // Name of the XML file
      useBrowserName: false  // Optionally, include the browser name in the XML file name
    },
    port: 9876,
    colors: true,
    logLevel: config.LOG_INFO,
    autoWatch: true,
    browsers: ['ChromeHeadless'],
    singleRun: true,
    restartOnFileChange: true
  });
};
