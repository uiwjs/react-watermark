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

/**
 * Returns the ratio of the current display device's physical pixel resolution to CSS pixel resolution
 * @param context
 * @returns
 */
const getPixelRatio = (context: any) => {
  if (!context) {
    return 1;
  }
  const backingStore =
    context.backingStorePixelRatio ||
    context.webkitBackingStorePixelRatio ||
    context.mozBackingStorePixelRatio ||
    context.msBackingStorePixelRatio ||
    context.oBackingStorePixelRatio ||
    context.backingStorePixelRatio ||
    1;
  return (window.devicePixelRatio || 1) / backingStore;
};

export default class Watermark {
  option: WatermarkOptions = {
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
  constructor(options: WatermarkOptions) {
    this.option = { ...this.option, ...options };
  }
  async create(): Promise<string> {
    const {
      image = '',
      content = '',
      gapX = 212,
      gapY = 222,
      width = 120,
      height = 64,
      rotate = -22,
      fontStyle = 'normal',
      fontWeight = 'normal',
      fontColor = 'rgba(0,0,0,.15)',
      fontSize = 16,
      fontFamily = 'sans-serif',
      offsetLeft,
      offsetTop,
    } = this.option;
    const canvas = document.createElement('canvas');
    const ctx = canvas.getContext('2d');
    const ratio = getPixelRatio(ctx);
    const canvasWidth = `${(gapX + width) * ratio}px`;
    const canvasHeight = `${(gapY + height) * ratio}px`;
    const canvasOffsetLeft = offsetLeft || gapX / 2;
    const canvasOffsetTop = offsetTop || gapY / 2;
    canvas.setAttribute('width', canvasWidth);
    canvas.setAttribute('height', canvasHeight);
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
        img.onload = () => {
          ctx.drawImage(img, 0, 0, markWidth, markHeight);
          return Promise.resolve(canvas.toDataURL());
        };
        img.onerror = (error) => {
          return Promise.reject(error);
        };
      } else if (content) {
        const markSize = Number(fontSize) * ratio;
        ctx.font = `${fontStyle} normal ${fontWeight} ${markSize}px/${markHeight}px ${fontFamily}`;
        ctx.fillStyle = fontColor;
        if (Array.isArray(content)) {
          content?.forEach((item: string, index: number) => ctx.fillText(item, 0, index * 50));
        } else {
          ctx.fillText(content, 0, 0);
        }
        return Promise.resolve(canvas.toDataURL());
      }
    } else {
      return Promise.reject('Error: Canvas is not supported in the current environment');
    }
  }
}
