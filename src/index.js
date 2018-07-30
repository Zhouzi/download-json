export default function(json, filename = 'untitled') {
    const str = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(json, null, 2)
    )}`;
    const anchor = window.document.createElement('a');

    anchor.setAttribute('href', str);
    anchor.setAttribute('download', `${filename}.json`);
    anchor.click();
}
