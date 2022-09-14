export interface WatermarkOptions {
    /** watermark text content */
    content?: string;
    /**
     * When the watermark is drawn, the rotation angle, in `°`. @default `-22`
     */
    rotate?: number;
    /**
     * High-definition print image source, for high-definition screen display,
     * it is recommended to use 2x or 3x image, and priority to use image rendering watermark.
     */
    image?: string;
    /** Horizontal spacing between watermarks. @default `212` */
    gapX?: number;
    /** vertical spacing between watermarks. @default `222` */
    gapY?: number;
    /** width of watermark. @default `120` */
    width?: number;
    /** height of watermark @default `64` */
    height?: number;
    /**
     * The vertical offset of the watermark drawn on the canvas.
     * Normally, the watermark is drawn in the middle position, ie `offsetTop = gapY / 2`
     */
    offsetLeft?: number;
    /**
     * The horizontal offset of the watermark drawn on the canvas, under normal circumstances,
     * the watermark is drawn in the middle position, ie `offsetTop = gapX / 2`
     */
    offsetTop?: number;
    /** text size @default `16` */
    fontSize?: number;
    /** text family @default `sans-serif` */
    fontFamily?: string;
    /** text weight @default `normal` */
    fontWeight?: 'normal' | 'light' | 'weight' | number;
    /** text color @default `rgba(0,0,0,.15)` */
    fontColor?: string;
    /** text style */
    fontStyle?: CanvasFillStrokeStyles['fillStyle'];
}
export default class Watermark {
    option: WatermarkOptions;
    constructor(options: WatermarkOptions);
    create(): Promise<string>;
}
