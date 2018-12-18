let urlId = document.getElementById('name');
let imgSize = document.getElementById('imgSize');
let qrCodeImg = document.getElementById('qrCodeImg');
let btnQrCode = document.getElementById('btn-QrCode');

//確保網頁內容載入在執行
window.onload = () => {
    localQr()
}

//獲取上一次QRCode紀錄
function localQr() {
    let str = '';
    const strLocal = localStorage.getItem('qrCodeImg') || [];
    const strText = '<h1>這是您上一次生成的QrCode</h1>';
    str += strText + localStorage.getItem('qrCodeImg') || [];
    if (strLocal != '' && strLocal != null) {
        qrCodeImg.innerHTML = str;
    }
}
//生成QRCode
function qrCodeBuild(e) {
    e.preventDefault();
    let urlValue = urlId.value;
    let imgSizeValue = imgSize.value;
    const qrCodeLang = 'UTF-8';
    const chtType = 'qr';
    const imgSizeSm = '120x120';
    const imgSizeMd = '200x200';
    const imgSizeLg = '400x400';
    const googleUrl = 'http://chart.apis.google.com/chart';
    const nowDateTime = new Date();
    let str = '';
    switch (imgSizeValue) {
        case "0":
            str += `
            <h1>生成時間:${nowDateTime}</h1>
            <img src="${googleUrl}?cht=${chtType}&chl=${urlValue}&chs=${imgSizeSm}&choe=${qrCodeLang}">
            `;
            break;
        case "1":
            str += `
            <h1>生成時間:${nowDateTime}</h1>
            <img src="${googleUrl}?cht=${chtType}&chl=${urlValue}&chs=${imgSizeMd}&choe=${qrCodeLang}">
            `;
            break;
        case "2":
            str += `
            <h1>生成時間:${nowDateTime}</h1>
            <img src="${googleUrl}?cht=${chtType}&chl=${urlValue}&chs=${imgSizeLg}&choe=${qrCodeLang}">
            `;
            break;
        default:
            str += `
            <h1>生成時間:${nowDateTime}</h1>
            <img src="${googleUrl}?cht=${chtType}&chl=${urlValue}&chs=${imgSizeSm}&choe=${qrCodeLang}">
            `;
    }
    //儲存至localStorage
    localStorage.setItem('qrCodeImg', str);
    qrCodeImg.innerHTML = str;
}

btnQrCode.addEventListener('click', qrCodeBuild, false)
