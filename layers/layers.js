var wms_layers = [];


        var lyr_GoogleMaps_0 = new ol.layer.Tile({
            'title': 'Google Maps',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=m&x={x}&y={y}&z={z}'
            })
        });
var format_Departments_1 = new ol.format.GeoJSON();
var features_Departments_1 = format_Departments_1.readFeatures(json_Departments_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Departments_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Departments_1.addFeatures(features_Departments_1);
var lyr_Departments_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Departments_1, 
                style: style_Departments_1,
                popuplayertitle: 'Departments',
                interactive: true,
                title: '<img src="styles/legend/Departments_1.png" /> Departments'
            });
var format_Activestations_2 = new ol.format.GeoJSON();
var features_Activestations_2 = format_Activestations_2.readFeatures(json_Activestations_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Activestations_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Activestations_2.addFeatures(features_Activestations_2);
var lyr_Activestations_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Activestations_2, 
                style: style_Activestations_2,
                popuplayertitle: 'Active stations',
                interactive: true,
                title: '<img src="styles/legend/Activestations_2.png" /> Active stations'
            });
var group_Distancematrix = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Distance matrix'});
var group_Scenarion1 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Scenarion 1'});
var group_Scenario2 = new ol.layer.Group({
                                layers: [],
                                fold: 'open',
                                title: 'Scenario 2'});
var group_Baselayers = new ol.layer.Group({
                                layers: [],
                                fold: 'close',
                                title: 'Base layers'});

lyr_GoogleMaps_0.setVisible(true);lyr_Departments_1.setVisible(true);lyr_Activestations_2.setVisible(true);
var layersList = [lyr_GoogleMaps_0,lyr_Departments_1,lyr_Activestations_2];
lyr_Departments_1.set('fieldAliases', {'fid': 'fid', 'adm1_name': 'adm1_name', 'area_sqkm': 'area_sqkm', 'center_lat': 'center_lat', 'center_lon': 'center_lon', 'Bikes_con': 'Bikes concentration', 'Percentage': 'Percentage', });
lyr_Activestations_2.set('fieldAliases', {'Station code': 'Station code', 'Region': 'Region', 'City': 'City', 'Station': 'Station', 'Statut': 'Statut', 'Latitude': 'Latitude', 'Longitude': 'Longitude', });
lyr_Departments_1.set('fieldImages', {'fid': 'TextEdit', 'adm1_name': 'TextEdit', 'area_sqkm': 'TextEdit', 'center_lat': 'TextEdit', 'center_lon': 'TextEdit', 'Bikes_con': 'Range', 'Percentage': 'TextEdit', });
lyr_Activestations_2.set('fieldImages', {'Station code': 'TextEdit', 'Region': 'TextEdit', 'City': 'TextEdit', 'Station': 'TextEdit', 'Statut': 'TextEdit', 'Latitude': 'TextEdit', 'Longitude': 'TextEdit', });
lyr_Departments_1.set('fieldLabels', {'fid': 'hidden field', 'adm1_name': 'inline label - always visible', 'area_sqkm': 'hidden field', 'center_lat': 'hidden field', 'center_lon': 'hidden field', 'Bikes_con': 'hidden field', 'Percentage': 'hidden field', });
lyr_Activestations_2.set('fieldLabels', {'Station code': 'inline label - always visible', 'Region': 'inline label - always visible', 'City': 'inline label - always visible', 'Station': 'inline label - always visible', 'Statut': 'inline label - always visible', 'Latitude': 'inline label - always visible', 'Longitude': 'inline label - always visible', });
lyr_Activestations_2.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});