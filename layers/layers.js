var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var lyr_Coberturadespusdelmantenimiento_1 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cobertura después del mantenimiento",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Coberturadespusdelmantenimiento_1.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11041058.793237, 2193207.999899, -11040703.465071, 2193677.694732]
                            })
                        });
var lyr_Coberturaantesdelmantenimiento_2 = new ol.layer.Image({
                            opacity: 1,
                            title: "Cobertura antes del mantenimiento",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Coberturaantesdelmantenimiento_2.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11041058.793237, 2193207.999899, -11040703.465071, 2193677.694732]
                            })
                        });
var lyr_Gananciasyprdidasdered_3 = new ol.layer.Image({
                            opacity: 1,
                            title: "Ganancias y pérdidas de red",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/Gananciasyprdidasdered_3.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [-11041058.793237, 2193207.999899, -11040703.465071, 2193677.694732]
                            })
                        });
var format_readeEstudio_4 = new ol.format.GeoJSON();
var features_readeEstudio_4 = format_readeEstudio_4.readFeatures(json_readeEstudio_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_readeEstudio_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_readeEstudio_4.addFeatures(features_readeEstudio_4);
var lyr_readeEstudio_4 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_readeEstudio_4, 
                style: style_readeEstudio_4,
                interactive: false,
                title: '<img src="styles/legend/readeEstudio_4.png" /> Área de Estudio'
            });
var format_EdificiosAnexoFI_5 = new ol.format.GeoJSON();
var features_EdificiosAnexoFI_5 = format_EdificiosAnexoFI_5.readFeatures(json_EdificiosAnexoFI_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_EdificiosAnexoFI_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_EdificiosAnexoFI_5.addFeatures(features_EdificiosAnexoFI_5);
var lyr_EdificiosAnexoFI_5 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_EdificiosAnexoFI_5, 
                style: style_EdificiosAnexoFI_5,
                interactive: true,
                title: '<img src="styles/legend/EdificiosAnexoFI_5.png" /> Edificios Anexo FI'
            });
var format_Puntosdemuestreo_6 = new ol.format.GeoJSON();
var features_Puntosdemuestreo_6 = format_Puntosdemuestreo_6.readFeatures(json_Puntosdemuestreo_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Puntosdemuestreo_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Puntosdemuestreo_6.addFeatures(features_Puntosdemuestreo_6);
var lyr_Puntosdemuestreo_6 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_Puntosdemuestreo_6, 
                style: style_Puntosdemuestreo_6,
                interactive: false,
                title: '<img src="styles/legend/Puntosdemuestreo_6.png" /> Puntos de muestreo'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_Coberturadespusdelmantenimiento_1.setVisible(true);lyr_Coberturaantesdelmantenimiento_2.setVisible(true);lyr_Gananciasyprdidasdered_3.setVisible(true);lyr_readeEstudio_4.setVisible(true);lyr_EdificiosAnexoFI_5.setVisible(true);lyr_Puntosdemuestreo_6.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_Coberturadespusdelmantenimiento_1,lyr_Coberturaantesdelmantenimiento_2,lyr_Gananciasyprdidasdered_3,lyr_readeEstudio_4,lyr_EdificiosAnexoFI_5,lyr_Puntosdemuestreo_6];
lyr_readeEstudio_4.set('fieldAliases', {'id': 'id', 'Area': 'Area', });
lyr_EdificiosAnexoFI_5.set('fieldAliases', {'id': 'id', 'Nombre': 'Nombre', 'Descrip': 'Descrip', 'Area': 'Area', });
lyr_Puntosdemuestreo_6.set('fieldAliases', {'Name': 'Name', 'Intensidad': 'Intensidad', });
lyr_readeEstudio_4.set('fieldImages', {'id': '', 'Area': '', });
lyr_EdificiosAnexoFI_5.set('fieldImages', {'id': 'TextEdit', 'Nombre': 'TextEdit', 'Descrip': 'TextEdit', 'Area': 'TextEdit', });
lyr_Puntosdemuestreo_6.set('fieldImages', {'Name': 'TextEdit', 'Intensidad': 'Range', });
lyr_readeEstudio_4.set('fieldLabels', {'id': 'no label', 'Area': 'no label', });
lyr_EdificiosAnexoFI_5.set('fieldLabels', {'id': 'no label', 'Nombre': 'no label', 'Descrip': 'no label', 'Area': 'no label', });
lyr_Puntosdemuestreo_6.set('fieldLabels', {'Name': 'no label', 'Intensidad': 'no label', });
lyr_Puntosdemuestreo_6.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});