/*---------------------------------------------------------------------------------------------
 *  Copyright (c) Microsoft Corporation. All rights reserved.
 *  Licensed under the Source EULA. See License.txt in the project root for license information.
 *--------------------------------------------------------------------------------------------*/
define(["require", "exports"], function (require) {
	const jquerylib = require.__$__nodeRequire('jquery');

	window['jQuery'] = jquerylib;
	window['$'] = jquerylib;

	require.__$__nodeRequire('jquery.event.drag');
	require.__$__nodeRequire('jquery-ui');
	const underscore = require.__$__nodeRequire('underscore');
	window['_'] = underscore;
	require.__$__nodeRequire('slickgrid/slick.core');
	require.__$__nodeRequire('slickgrid/slick.grid');
	require.__$__nodeRequire('slickgrid/slick.editors');
	require.__$__nodeRequire('slickgrid/slick.dataview');
	require.__$__nodeRequire('slickgrid/plugins/slick.cellrangedecorator');
	require.__$__nodeRequire('reflect-metadata');
	require.__$__nodeRequire('zone.js');
	require.__$__nodeRequire('chart.js');
});
