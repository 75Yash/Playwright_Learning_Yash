const config = {
  default: {
    paths: ['features/*.feature'],
    require: [
      'ts-node/register',
      'features/step-definitions/*.ts',
      'features/support/*.ts'
    ],
    format: ['progress', 'html:reports/cucumber-report.html'],
    publishQuiet: true
  }
};

export default config;
