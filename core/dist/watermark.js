/**! 
 * @uiw/watermark.js v1.0.1 
 * JavaScript library for generating image watermarks using canvas. 
 * 
 * Copyright (c) 2024 kenny wang <wowohoo@qq.com> 
 * https://github.com/uiwjs/react-watermark.git 
 * 
 * @website: https://uiwjs.github.io/react-watermark
 
 * Licensed under the MIT license 
 */

(function (global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory() :
    typeof define === 'function' && define.amd ? define(factory) :
    (global = typeof globalThis !== 'undefined' ? globalThis : global || self, global.Watermark = factory());
})(this, (function () { 'use strict';

    /**
     * Returns the ratio of the current display device's physical pixel resolution to CSS pixel resolution
     * @param context
     * @returns
     */
    const getPixelRatio = (context) => {
        if (!context) {
            return 1;
        }
        const backingStore = context.backingStorePixelRatio ||
            context.webkitBackingStorePixelRatio ||
            context.mozBackingStorePixelRatio ||
            context.msBackingStorePixelRatio ||
            context.oBackingStorePixelRatio ||
            context.backingStorePixelRatio ||
            1;
        return (window.devicePixelRatio || 1) / backingStore;
    };
    class Watermark {
        constructor(options) {
            this.option = {
                gapX: 212,
                gapY: 222,
                width: 120,
                height: 64,
                rotate: -22,
                fontStyle: 'normal',
                fontWeight: 'normal',
                fontColor: 'rgba(0,0,0,.15)',
                fontSize: 16,
                fontFamily: 'sans-serif',
            };
            this.option = Object.assign(Object.assign({}, this.option), options);
        }
        async create() {
            const { image = '', content = '', gapX = 212, gapY = 222, width = 120, height = 64, rotate = -22, fontStyle = 'normal', fontWeight = 'normal', fontColor = 'rgba(0,0,0,.15)', fontSize = 16, fontFamily = 'sans-serif', offsetLeft, offsetTop, } = this.option;
            const canvas = document.createElement('canvas');
            const ctx = canvas.getContext('2d');
            const ratio = getPixelRatio(ctx);
            const canvasWidth = `${(gapX + width) * ratio}px`;
            const canvasHeight = `${(gapY + height) * ratio}px`;
            const canvasOffsetLeft = offsetLeft || gapX / 2;
            const canvasOffsetTop = offsetTop || gapY / 2;
            canvas.setAttribute('width', canvasWidth);
            canvas.setAttribute('height', canvasHeight);
            return new Promise(async (resolve, reject) => {
                if (ctx) {
                    ctx.translate(canvasOffsetLeft * ratio, canvasOffsetTop * ratio);
                    ctx.rotate((Math.PI / 180) * Number(rotate));
                    const markWidth = width * ratio;
                    const markHeight = height * ratio;
                    if (image) {
                        const img = new Image();
                        img.crossOrigin = 'anonymous';
                        img.referrerPolicy = 'no-referrer';
                        img.src = image;
                        img.onload = async () => {
                            ctx.drawImage(img, 0, 0, markWidth, markHeight);
                            return resolve(canvas.toDataURL());
                        };
                        img.onerror = (error) => {
                            return reject(error);
                        };
                    }
                    else if (content) {
                        const markSize = Number(fontSize) * ratio;
                        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
                        ctx.fillStyle = fontColor;
                        if (Array.isArray(content)) {
                            content === null || content === void 0 ? void 0 : content.forEach((item, index) => ctx.fillText(item, 0, index * 50));
                        }
                        else {
                            ctx.fillText(content, 0, 0);
                        }
                        return resolve(canvas.toDataURL());
                    }
                }
                else {
                    return reject('Error: Canvas is not supported in the current environment');
                }
            });
        }
    }

    return Watermark;

}));
//# sourceMappingURL=watermark.js.map
