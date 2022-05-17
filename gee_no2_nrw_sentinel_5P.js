// coordinates of NRW's center
// https://www.dortmund.de/de/leben_in_dortmund/stadtbezirke/stbzportal_aplerbeck/stadtbezirksmarketing_apl/mittelpunkt_nrw/index.html
var center_nrw = ee.Geometry.Point([7.3316, 51.2844]);

// Sentinel-5P NO2 data for 2019, 2020 and 2021
var no2_2019 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .select('tropospheric_NO2_column_number_density')
  .filterDate('2019-04-01', '2019-04-30')
  .filterBounds(center_nrw);

var no2_2020 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .select('tropospheric_NO2_column_number_density')
  .filterDate('2020-04-01', '2020-04-30')
  .filterBounds(center_nrw);

var no2_2021 = ee.ImageCollection('COPERNICUS/S5P/OFFL/L3_NO2')
  .select('tropospheric_NO2_column_number_density')
  .filterDate('2021-04-01', '2021-04-30')
  .filterBounds(center_nrw);

// visualization parameters
var band_viz = {
  min: 0,
  max: 0.0002,
  palette: ['black', 'blue', 'purple', 'cyan', 'green', 'yellow', 'red']
};

// create linked maps
var years = {
  '2019': no2_2019,
  '2020': no2_2020,
  '2021': no2_2021
}

var maps = [];

for (var year in years) {
  var map = ui.Map().setControlVisibility(false)
  map.addLayer(years[year].mean(), band_viz, 'S5P N02')
  map.add(ui.Label(year))
  maps.push(map);
}

ui.root.widgets().reset(maps);
var linker = ui.Map.Linker(maps);

maps[0].centerObject(center_nrw, 8)