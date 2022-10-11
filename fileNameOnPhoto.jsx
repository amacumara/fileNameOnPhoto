app.preferences.rulerUnits = Units.CM;

var doc = app.activeDocument;

var txt_layer = doc.artLayers.add();

txt_layer.kind = LayerKind.TEXT;

var colorSet = new SolidColor; with (colorSet.rgb) { red = 255; green = 255; blue = 255; }

with (txt_layer.textItem)
{
font = "MyriadPro-Regular";
position = Array(doc.width /2, doc.height *5/6);
justification = Justification.CENTER;
size = doc.height/20;
color = colorSet;

antiAliasMethod = AntiAlias.STRONG;
fauxBold = true;
}

var imgName = doc.name.substring (0, doc.name.length - 4);

txt_layer.textItem.contents = imgName;

txt_layer.name = "text"


// doc.flatten();
