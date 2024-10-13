var wms_layers = [];

var lyr_240911_ortho_3m_0 = new ol.layer.Image({
                            opacity: 1,
                            title: "240911_ortho_3m",
                            
                            
                            source: new ol.source.ImageStatic({
                               url: "./layers/240911_ortho_3m_0.png",
    attributions: ' ',
                                projection: 'EPSG:3857',
                                alwaysInRange: true,
                                imageExtent: [11024582.859469, 160910.653746, 11031374.263033, 173384.477534]
                            })
                        });
var format_digblocks_3275_1 = new ol.format.GeoJSON();
var features_digblocks_3275_1 = format_digblocks_3275_1.readFeatures(json_digblocks_3275_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_digblocks_3275_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_digblocks_3275_1.addFeatures(features_digblocks_3275_1);
var lyr_digblocks_3275_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_digblocks_3275_1, 
                style: style_digblocks_3275_1,
                popuplayertitle: "digblocks_327·5",
                interactive: true,
    title: 'digblocks_327·5<br />\
    <img src="styles/legend/digblocks_3275_1_0.png" /> 513<br />\
    <img src="styles/legend/digblocks_3275_1_1.png" /> 514<br />\
    <img src="styles/legend/digblocks_3275_1_2.png" /> 521<br />\
    <img src="styles/legend/digblocks_3275_1_3.png" /> 531<br />\
    <img src="styles/legend/digblocks_3275_1_4.png" /> <br />'
        });

lyr_240911_ortho_3m_0.setVisible(true);lyr_digblocks_3275_1.setVisible(true);
var layersList = [lyr_240911_ortho_3m_0,lyr_digblocks_3275_1];
lyr_digblocks_3275_1.set('fieldAliases', {'fid': 'fid', 'Layer': 'Layer', 'PaperSpace': 'PaperSpace', 'SubClasses': 'SubClasses', 'Linetype': 'Linetype', 'EntityHand': 'EntityHand', 'Text': 'Text', 'Keterangan': 'Keterangan', });
lyr_digblocks_3275_1.set('fieldImages', {'fid': '', 'Layer': 'TextEdit', 'PaperSpace': 'Range', 'SubClasses': 'TextEdit', 'Linetype': 'TextEdit', 'EntityHand': 'TextEdit', 'Text': 'TextEdit', 'Keterangan': '', });
lyr_digblocks_3275_1.set('fieldLabels', {'fid': 'hidden field', 'Layer': 'hidden field', 'PaperSpace': 'hidden field', 'SubClasses': 'hidden field', 'Linetype': 'hidden field', 'EntityHand': 'hidden field', 'Text': 'hidden field', 'Keterangan': 'header label - always visible', });
lyr_digblocks_3275_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});
