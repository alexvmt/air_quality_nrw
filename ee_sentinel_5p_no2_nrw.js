// load polygon of region of interest
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/nrw');

// set visualization parameters
var visualization = {
	min: 0,
	max: 0.0002,
	palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
	};

// function to create monthly composite given date
function get_monthly_composite(date) {	
	var date = ee.Date(date);
	var image = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
		.select('tropospheric_NO2_column_number_density')
		.filterDate(date, date.advance(1, 'month').advance(-1, 'day'))
		.mean()
		.clip(roi);	
	return image.visualize(visualization);	
	}

// load and prepare Sentinel-5P NO2 data for 2019
var no2_jan_2019 = get_monthly_composite('2019-01-01');
var no2_feb_2019 = get_monthly_composite('2019-02-01');
var no2_mar_2019 = get_monthly_composite('2019-03-01');
var no2_apr_2019 = get_monthly_composite('2019-04-01');
var no2_may_2019 = get_monthly_composite('2019-05-01');
var no2_jun_2019 = get_monthly_composite('2019-06-01');
var no2_jul_2019 = get_monthly_composite('2019-07-01');
var no2_aug_2019 = get_monthly_composite('2019-08-01');
var no2_sep_2019 = get_monthly_composite('2019-09-01');
var no2_oct_2019 = get_monthly_composite('2019-10-01');
var no2_nov_2019 = get_monthly_composite('2019-11-01');
var no2_dec_2019 = get_monthly_composite('2019-12-01');

// load and prepare Sentinel-5P NO2 data for 2020
var no2_jan_2020 = get_monthly_composite('2020-01-01');
var no2_feb_2020 = get_monthly_composite('2020-02-01');
var no2_mar_2020 = get_monthly_composite('2020-03-01');
var no2_apr_2020 = get_monthly_composite('2020-04-01');
var no2_may_2020 = get_monthly_composite('2020-05-01');
var no2_jun_2020 = get_monthly_composite('2020-06-01');
var no2_jul_2020 = get_monthly_composite('2020-07-01');
var no2_aug_2020 = get_monthly_composite('2020-08-01');
var no2_sep_2020 = get_monthly_composite('2020-09-01');
var no2_oct_2020 = get_monthly_composite('2020-10-01');
var no2_nov_2020 = get_monthly_composite('2020-11-01');
var no2_dec_2020 = get_monthly_composite('2020-12-01');

// load and prepare Sentinel-5P NO2 data for 2021
var no2_jan_2021 = get_monthly_composite('2021-01-01');
var no2_feb_2021 = get_monthly_composite('2021-02-01');
var no2_mar_2021 = get_monthly_composite('2021-03-01');
var no2_apr_2021 = get_monthly_composite('2021-04-01');
var no2_may_2021 = get_monthly_composite('2021-05-01');
var no2_jun_2021 = get_monthly_composite('2021-06-01');
var no2_jul_2021 = get_monthly_composite('2021-07-01');
var no2_aug_2021 = get_monthly_composite('2021-08-01');
var no2_sep_2021 = get_monthly_composite('2021-09-01');
var no2_oct_2021 = get_monthly_composite('2021-10-01');
var no2_nov_2021 = get_monthly_composite('2021-11-01');
var no2_dec_2021 = get_monthly_composite('2021-12-01');

// load and prepare Sentinel-5P NO2 data for 2022
var no2_jan_2022 = get_monthly_composite('2022-01-01');
var no2_feb_2022 = get_monthly_composite('2022-02-01');
var no2_mar_2022 = get_monthly_composite('2022-03-01');
var no2_apr_2022 = get_monthly_composite('2022-04-01');
var no2_may_2022 = get_monthly_composite('2022-05-01');
var no2_jun_2022 = get_monthly_composite('2022-06-01');
/*var no2_jul_2022 = get_monthly_composite('2022-07-01');
var no2_aug_2022 = get_monthly_composite('2022-08-01');
var no2_sep_2022 = get_monthly_composite('2022-09-01');
var no2_oct_2022 = get_monthly_composite('2022-10-01');
var no2_nov_2022 = get_monthly_composite('2022-11-01');
var no2_dec_2022 = get_monthly_composite('2022-12-01');*/

var images = {
	'January 2019': no2_jan_2019,
	'February 2019': no2_feb_2019,
	'March 2019': no2_mar_2019,
	'April 2019': no2_apr_2019,
	'May 2019': no2_may_2019,
	'June 2019': no2_jun_2019,
	'July 2019': no2_jul_2019,
	'August 2019': no2_aug_2019,
	'September 2019': no2_sep_2019,
	'October 2019': no2_oct_2019,
	'November 2019': no2_nov_2019,
	'December 2019': no2_dec_2019,
	'January 2020': no2_jan_2020,
	'February 2020': no2_feb_2020,
	'March 2020': no2_mar_2020,
	'April 2020': no2_apr_2020,
	'May 2020': no2_may_2020,
	'June 2020': no2_jun_2020,
	'July 2020': no2_jul_2020,
	'August 2020': no2_aug_2020,
	'September 2020': no2_sep_2020,
	'October 2020': no2_oct_2020,
	'November 2020': no2_nov_2020,
	'December 2020': no2_dec_2020,
	'January 2021': no2_jan_2021,
	'February 2021': no2_feb_2021,
	'March 2021': no2_mar_2021,
	'April 2021': no2_apr_2021,
	'May 2021': no2_may_2021,
	'June 2021': no2_jun_2021,
	'July 2021': no2_jul_2021,
	'August 2021': no2_aug_2021,
	'September 2021': no2_sep_2021,
	'October 2021': no2_oct_2021,
	'November 2021': no2_nov_2021,
	'December 2021': no2_dec_2021,
	'January 2022': no2_jan_2022,
	'February 2022': no2_feb_2022,
	'March 2022': no2_mar_2022,
	'April 2022': no2_apr_2022,
	'May 2022': no2_may_2022,
	'June 2022': no2_jun_2022,
	/*'July 2022': no2_jul_2022,
	'August 2022': no2_aug_2022,
	'September 2022': no2_sep_2022,
	'October 2022': no2_oct_2022,
	'November 2022': no2_nov_2022,
	'December 2022': no2_dec_2022*/
	};

// create color bar thumbnail image for legend
function makeColorBarParams(palette) {
	return {
		bbox: [0, 0, 1, 0.1],
		dimensions: '100x10',
		format: 'png',
		min: 0,
		max: 1,
		palette: palette
		};
	};

// create color bar for legend
var colorBar = ui.Thumbnail({
	image: ee.Image.pixelLonLat().select(0),
	params: makeColorBarParams(visualization.palette),
	style: {stretch: 'horizontal', margin: '0px 8px', maxHeight: '24px'}
	});

// create legend panel
var legendLabels = ui.Panel({
	widgets: [
		ui.Label(visualization.min, {margin: '4px 8px', fontSize: '10px'}),
		ui.Label(
			((visualization.max - visualization.min) / 2 + visualization.min),
			{margin: '4px 8px', fontSize: '10px', textAlign: 'center', stretch: 'horizontal'}),
		ui.Label(visualization.max, {margin: '4px 8px', fontSize: '10px'})
		],
	layout: ui.Panel.Layout.flow('horizontal')
	});

// create legend title
var legendTitle = ui.Label({
	value: 'Tropospheric vertical column of NO2 (mol/m^2)',
	style: {fontWeight: 'bold', fontSize: '12px'}
	});

// assemble legend
var legendPanel = ui.Panel({style: {position: 'bottom-left', padding: '8px 15px'}});
legendPanel.add(legendTitle);
legendPanel.add(colorBar);
legendPanel.add(legendLabels);

// create linked maps
var years = {
	'April 2019': no2_apr_2019,
	'April 2020': no2_apr_2020,
	'April 2021': no2_apr_2021,
	'April 2022': no2_apr_2022
	};

var maps = [];

for (var year in years) {
	var map = ui.Map().setControlVisibility({mapTypeControl: false})
	map.addLayer(years[year], visualization, 'S5P N02')
	maps.push(map);
	};

// function to update map based on selection of month from drop-down list
function add_layer_selector(map_to_change, default_value, position) {
	
	var label = ui.Label('Choose a month');

	function update_map(selection) {
		map_to_change.layers().set(0, ui.Map.Layer(images[selection]));
	}

	var select = ui.Select({items: Object.keys(images), onChange: update_map});
	
	select.setValue(Object.keys(images)[default_value], true);

	var control_panel = ui.Panel({widgets: [label, select], style: {position: position}});

	map_to_change.add(control_panel);
	
	}

// add layer selector
var top_left_selector = add_layer_selector(maps[0], 3, 'bottom-right');
var top_right_selector = add_layer_selector(maps[1], 27, 'bottom-right');
var bottom_left_selector = add_layer_selector(maps[2], 15, 'bottom-right');
var bottom_right_selector = add_layer_selector(maps[3], 39, 'bottom-right');

var linker = ui.Map.Linker(maps);

// create map grid
var mapGrid = ui.Panel(
    [
		ui.Panel([maps[0], maps[1]], null, {stretch: 'both'}),
		ui.Panel([maps[2], maps[3]], null, {stretch: 'both'})
    ],
    ui.Panel.Layout.Flow('horizontal'), {stretch: 'both'});

// set map center to roi center
var center = roi.geometry().centroid();
maps[0].centerObject(center, 7);

// add legend to bottom left map
maps[1].add(legendPanel);

// add title
var title = ui.Label('Monthly mean nitrogen dioxide levels in NRW based on Sentinel-5P data', {
	stretch: 'horizontal',
	textAlign: 'center',
	fontWeight: 'bold',
	fontSize: '24px'
	});

ui.root.widgets().reset([title, mapGrid]);
ui.root.setLayout(ui.Panel.Layout.Flow('vertical'));