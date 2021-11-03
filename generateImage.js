const getColorByName = (name) => {
    return '#' + (name.charCodeAt(0).toString().slice(0, 6).padEnd(6, '0'));
};

/**
 * 
 * @param {string} str 
 * @param {{w: number, h:number, brightness: number}} userOptions 
 * @returns 
 */
export function generateImageByString(str, userOptions = {}) {
    let options = {
        w: 64,
        h: 64,
        ...userOptions,
    }
    let name = str;
    let canvas = document.createElement('canvas');
    canvas.setAttribute('width', options.w);
    canvas.setAttribute('height', options.w);

    let ctx = canvas.getContext("2d");

    if (options.brightness) {
        ctx.filter = `brightness(${options.brightness * 100}%)`;
    }
    
    ctx.fillStyle = getColorByName(name);
    ctx.fillRect(0, 0, 64, 64);
    ctx.font = `${Math.min(options.w, options.h) * 0.7}px Arial`;
    ctx.textAlign = "center";
    ctx.textBaseline = "middle";
    ctx.fillStyle = '#FFF';
    ctx.fillText(name[0].toUpperCase(), options.w / 2, options.h / 2 + options.h * 0.07);

    let base64Img = canvas.toDataURL('image/png');
    return base64Img;
}

