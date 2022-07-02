# Air Quality in North Rhine-Westphalia (NRW)

## NO2 levels in NRW based on data from Sentinel-5P

Nitrogen dioxide (NO2) enters the atmosphere as a result of anthropogenic activities such as fossil fuel combustion and biomass burning, as well as natural processes including microbiological processes in soils, wildfires and lightning (Sentinel-5P Nitrogen Dioxide, Google Earth Engine Data Catalog).

The map below shows NO2 levels in April 2019, 2020, 2021 and 2022 in NRW. Especially the Ruhr area and densly populated cities like Cologne and Düsseldorf show higher NO2 levels. April 2021 also shows comparably higher NO2 levels compared to other years - what could be the reason?

![Sentinel-5P NO2 NRW April 2019, 2020, 2021 and 2022](sentinel_5p_no2_nrw_april_2019_2020_2021_2022.png 'Sentinel-5P NO2 NRW April 2019, 2020, 2021 and 2022')

Sentinel-5P NO2 data has a resolution of 1113.2 meters.

The map can be further explored in Earth Engine using [this](https://code.earthengine.google.com/63a4dd3871b99e7930808f36de741f64) link to the Code Editor. You can use the layer control to change the opacity of the NO2 layer to see which places exhibit particularily high NO2 levels.

## Further ideas

- add other air quality indicators, such as ozone, methane, formaldehyde, aerosol, carbon monoxide and sulphur dioxide
- add other German states
- make date range selection flexible
- understand how Sentinel-5P NO2 levels measured in mol/m^2 relate to official EU limits of 40 μg/m^3

## References

- https://developers.google.com/earth-engine/datasets/catalog/COPERNICUS_S5P_OFFL_L3_NO2
- https://www.suche-postleitzahl.org/nordrhein-westfalen.75
