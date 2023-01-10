window.onload = function () {

function backgroundColorPage (color) {
    document.getElementsByTagName('body')[0].style.backgroundColor = color;
    localStorage.setItem('backgroundColor', color)

} backgroundColorPage('salmon');

function textColor (colorText) {
    document.getElementsByTagName('p')[0].style.color = colorText;
    localStorage.setItem('textColor', colorText)
} textColor ('grey');

function fontSize (sizeFontpixel) {
    document.getElementsByTagName('p')[0].style.fontSize = sizeFontpixel; //numberpx
    localStorage.setItem('fontSize', sizeFontpixel)
} fontSize ('50px');

function lineHeight (heightLine) {
    document.getElementsByTagName('p')[0].style.lineHeight = heightLine; // 1.0 = 100%
    localStorage.setItem('lineHeight', heightLine)
} lineHeight (1.3);

function fontType (typeFont) {
    document.getElementsByTagName('p')[0].style.fontFamily = typeFont;
    localStorage.setItem('fontType', typeFont)
} fontType ('arial');

}