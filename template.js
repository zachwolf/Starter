/*
 * Starter
 * https://github.com/zachwolf/Starter
 *
 * Copyright (c) 2014 Zach Wolf
 * Licensed under the MIT license.
 */

// Basic template description.
exports.description = 'Starting point for a project using Require.js, Jasmine/Karma, SCSS & HAML';

// Template-specific notes to be displayed before question prompts.
// exports.notes = '';

// Template-specific notes to be displayed after question prompts.
exports.after = 'You should now install project dependencies with _npm ' +
  'install_. After that, you may execute project tasks with _grunt_. For ' +
  'more information about installing and configuring Grunt, please see ' +
  'the Getting Started guide:' +
  '\n\n' +
  'http://gruntjs.com/getting-started';

// Any existing file or directory matching this wildcard will cause a warning.
exports.warnOn = '*';

// The actual init template.
exports.template = function(grunt, init, done) {

  "use strict";

  init.process({}, [
    // Prompt for these values.
    init.prompt('name'),
    init.prompt('title'),
    init.prompt('description'),
    init.prompt('version'),
    init.prompt('repository'),
    init.prompt('author_name'),
    init.prompt('author_email'),
    init.prompt('author_url'),
    init.prompt('primary_route_name', "post"),
  ], function(err, props) {
    // A few additional properties.
    // props.jqueryjson = props.name + '.jquery.json';
    // props.dependencies = {jquery: props.jquery_version || '>= 1'};

    // props.keywords = [];

    console.log("-------------------------------------------------");
    console.log("props", props);

    // Files to copy (and process).
    var files = init.filesToCopy(props);

    console.log("files", files);
    console.log("done");
    console.log("-------------------------------------------------");
    // Add properly-named license files.
    // init.addLicenseFiles(files, props.licenses);

    // Actually copy (and process) files.
    init.copyAndProcess(files, props, {noProcess: 'source/js/lib/**'});

    // All done!
    done();
  });

};
