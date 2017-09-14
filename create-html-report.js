var path = require('path');
var reporter = require('cucumber-html-reporter');
var fs = require('fs-extra');
var find = require('find');


var currentTime = new Date();

var theme = {
    hierarchy: 'hierarchy',
    bootstrap: 'bootstrap',
    foundation: 'foundation',
    simple: 'simple'
};

/*var metadata = {
    'App Version': navigator.appVersion,
    'Browser': navigator.appCodeName,
    'Test Environment': location.host,
    'Platform': navigator.platform,
    'Parallel': 'Scenarios',
    'Executed': 'Remote'

}*/

var outputDirectory = 'reports/htmlreports';
var jsonFile = 'reports/cucumber/cucumber-report.json';

function getOptions(theme) {
    return {
        name: 'automated html report ' + currentTime , //this tests for the sanitized hyperlinks on report, otherwise this should be plain text english
        theme: theme,
        output: path.join(outputDirectory, 'cucumber_report_' + theme + '.html'),
        reportSuiteAsScenarios: true,
        launchReport: true,
        storeScreenshots: true,
        screenshotsDirectory: 'screenshots/',
        metadata:{}
    };
}

function getJsonFileOptions(theme) {
    var options = getOptions(theme);
    options.jsonFile = jsonFile;
    return options;
}

function assertJsonFile() {
    //Generate Hierarchy theme report
    reporter.generate(getJsonFileOptions(theme.bootstrap));
    //assert reports
    // assertHtmlReports(outputDirectory);
}

assertJsonFile();
