// load NRW polygon
var nrw = ee.FeatureCollection('projects/ee-alexvmt/assets/nrw');

// load and prepare Sentinel-5P NO2 data for 2019, 2020, 2021 and 2022
var no2_2019 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .select('tropospheric_NO2_column_number_density')
  .filterDate('2019-04-01', '2019-04-30')
  .mean()
  .clip(nrw);

var no2_2020 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .select('tropospheric_NO2_column_number_density')
  .filterDate('2020-04-01', '2020-04-30')
  .mean()
  .clip(nrw);

var no2_2021 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .select('tropospheric_NO2_column_number_density')
  .filterDate('2021-04-01', '2021-04-30')
  .mean()
  .clip(nrw);

var no2_2022 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .select('tropospheric_NO2_column_number_density')
  .filterDate('2022-04-01', '2022-04-30')
  .mean()
  .clip(nrw);

// set visualization parameters
var visualization = {
  min: 0,
  max: 0.0002,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};

// create linked maps
var years = {
  '2019': no2_2019,
  '2020': no2_2020,
  '2021': no2_2021,
  '2022': no2_2022
}

var maps = [];

for (var year in years) {
  var map = ui.Map()
  map.addLayer(years[year], visualization, 'S5P N02')
  map.add(ui.Label(year))
  maps.push(map);
}

var linker = ui.Map.Linker(maps);

// create map grid
var mapGrid = ui.Panel(
    [
      ui.Panel([maps[0], maps[1]], null, {stretch: 'both'}),
      ui.Panel([maps[2], maps[3]], null, {stretch: 'both'})
    ],
    ui.Panel.Layout.Flow('horizontal'), {stretch: 'both'});

// set map center to coordinates of NRW's center
// https://www.dortmund.de/de/leben_in_dortmund/stadtbezirke/stbzportal_aplerbeck/stadtbezirksmarketing_apl/mittelpunkt_nrw/index.html
maps[0].setCenter(7.3316, 51.2844, 7);

// add title
var title = ui.Label('Sentinel-5P NO2 NRW April 2019, 2020, 2021 and 2022', {
  stretch: 'horizontal',
  textAlign: 'center',
  fontWeight: 'bold',
  fontSize: '24px'
});

ui.root.widgets().reset([title, mapGrid]);
ui.root.setLayout(ui.Panel.Layout.Flow('vertical'));