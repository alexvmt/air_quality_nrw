# convert polygon of NRW from klm to shapefile format
# first, download NRW polygon from https://www.suche-postleitzahl.org/nordrhein-westfalen.75

# import libraries
import geopandas as gpd
import fiona

# set driver
gpd.io.file.fiona.drvsupport.supported_drivers['KML'] = 'rw'

# read kml
file = gpd.read_file('data/nrw.kml', driver='KML')

# save kml to shapefile format
file.to_file('data/nrw.shp')
