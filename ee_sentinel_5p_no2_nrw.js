// load polygon of region of interest
var roi = ee.FeatureCollection('projects/ee-alexvmt/assets/nrw');

// load and prepare Sentinel-5P NO2 data for 2019, 2020, 2021 and 2022
var no2_2019 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
	.select('tropospheric_NO2_column_number_density')
	.filterDate('2019-04-01', '2019-04-30')
	.mean()
	.clip(roi);

var no2_2020 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
	.select('tropospheric_NO2_column_number_density')
	.filterDate('2020-04-01', '2020-04-30')
	.mean()
	.clip(roi);

var no2_2021 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
	.select('tropospheric_NO2_column_number_density')
	.filterDate('2021-04-01', '2021-04-30')
	.mean()
	.clip(roi);

var no2_2022 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
	.select('tropospheric_NO2_column_number_density')
	.filterDate('2022-04-01', '2022-04-30')
	.mean()
	.clip(roi);

// set visualization parameters
var visualization = {
	min: 0,
	max: 0.0002,
	palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
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
	'2019': no2_2019,
	'2020': no2_2020,
	'2021': no2_2021,
	'2022': no2_2022
	};

var maps = [];

for (var year in years) {
	var map = ui.Map().setControlVisibility({mapTypeControl: false})
	map.addLayer(years[year], visualization, 'S5P N02')
	map.add(ui.Label(year))
	maps.push(map);
	};

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
var title = ui.Label('Sentinel-5P NO2 NRW April 2019, 2020, 2021 and 2022', {
	stretch: 'horizontal',
	textAlign: 'center',
	fontWeight: 'bold',
	fontSize: '24px'
	});

ui.root.widgets().reset([title, mapGrid]);
ui.root.setLayout(ui.Panel.Layout.Flow('vertical'));