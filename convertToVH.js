
const args = process.argv.slice(2);

// デバイスの幅と高さを更新（この場合、1440x829を使用）
const deviceWidth = 430;
const deviceHeight = 923;
const vw = parseFloat(args[0]);

// 1vhのピクセル値を計算
const vhInPixels = deviceHeight / 100;

const vwInPixels = deviceWidth * (vw / 100);

// 60vwをvhに変換
const vwToVh = vwInPixels / vhInPixels;

console.log(`${vwToVh.toFixed(2)}vh`);
console.log(`max-width: ${vwToVh.toFixed(2)}vh;`);
console.log(`min(${vw}vw, ${vwToVh.toFixed(2)}vh);`);
console.log(`max(${vw}vw, ${vwToVh.toFixed(2)}vh);`);
