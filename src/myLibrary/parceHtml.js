export default function parceFromHtml(htmlText) {
    htmlText = htmlText.replace(/<p>/g, '')
    htmlText = htmlText.replace(/<\/p>/g, '')
    htmlText = htmlText.replace(/<h1>/g, '')
    htmlText = htmlText.replace(/<\/h1>/g, '')
    htmlText = htmlText.replace(/<span>/g, '')
    htmlText = htmlText.replace(/<\/span>/g, '')
    return htmlText
}