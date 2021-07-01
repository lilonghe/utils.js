/**
 * 清洗文字，保留中文，字母和数字 
 */
export function clearText(text) {
    return text.replace(/[^a-z\u4e00-\u9fbb\d]/ig, "");
}
