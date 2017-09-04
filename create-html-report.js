var reporter = require('cucumber-html-reporter');
//var outputDirectory = './reports/htmlreports';
//var jsonFile = 'reports/cucumber/cucumber-report.json';

var options = {
        theme: 'bootstrap',
        jsonFile: 'reports/cucumber/cucumber-report.json',
        output: 'reports/htmlreports/cucumber-report.html',
        reportSuiteAsScenarios: true,
        launchReport: true,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
    };

    reporter.generate(options);
