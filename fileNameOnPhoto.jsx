app.preferences.rulerUnits = Units.CM;

var doc = app.activeDocument;

var txtLayer = doc.artLayers.add();

txtLayer.kind = LayerKind.TEXT;

var colorSet = new SolidColor; with (colorSet.rgb) { red = 255; green = 255; blue = 255; }  //Цвет надписи

with (txtLayer.textItem)
{
font = "MyriadPro-Regular"; //Шрифт, важно правильное написание
position = Array(doc.width /2, doc.height *5/6); //Положение на холсте (относительное, для моей задачи), можно делать абсолютным
justification = Justification.CENTER; //Центрирование
size = doc.height/20; //Размер надписи (относительный, для моей задачи), можно делать абсолютным
color = colorSet;

antiAliasMethod = AntiAlias.STRONG;
fauxBold = true;
}

var imgName = doc.name.substring (0, doc.name.length - 4); //Убираю расширение файла, можно элегантней через функцию относительно "."

txtLayer.textItem.contents = imgName;

//txtLayer.name = "text" //Имя создаваемого слоя, по умолчанию не использовал

 doc.flatten(); //Функция схлопывания слоев
