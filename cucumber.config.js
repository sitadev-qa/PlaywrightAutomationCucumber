export default {
  paths: [
    "tests/features/*.feature"
  ],
  require: [
    "tests/support/hooks.js",
    "tests/support/*.js",
    "tests/stepDefinitions/*.js"
  ],
  publishQuiet: true,
  format: [
    "progress",
    "html:reports/report.html"
  ],
  requireModule: []
}