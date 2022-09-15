import React, { CSSProperties, ForwardedRef, forwardRef, useEffect, useState } from 'react';
import WatermarkJS, { WatermarkOptions } from '@uiw/watermark.js';

export interface WatermarkProps
  extends Omit<React.AllHTMLAttributes<HTMLDivElement>, 'width' | 'height' | 'content'>,
    WatermarkOptions {
  prefixCls?: string;
  /** watermark style */
  markStyle?: React.CSSProperties;
  /** watermark class name */
  markClassName?: string;
  /** watermark text content */
  text?: string;
}

function FancyWatermark(props: WatermarkProps, ref: ForwardedRef<HTMLDivElement>) {
  const {
    prefixCls = 'w-watermark',
    text,
    className,
    markClassName,
    markStyle,
    content,
    rotate,
    image,
    gapX = 212,
    gapY,
    width = 120,
    height,
    offsetLeft,
    offsetTop,
    fontSize,
    fontFamily,
    fontWeight,
    fontColor,
    fontStyle,
    ...other
  } = props;
  const style: CSSProperties = {
    ...props.style,
    position: 'relative',
  };
  const wrapperCls = [`${prefixCls}-wrapper`, className].filter(Boolean).join(' ');
  const waterMakrCls = [prefixCls, markClassName].filter(Boolean).join(' ');
  const [base64Url, setBase64Url] = useState('');

  useEffect(() => {
    const water = new WatermarkJS({
      content,
      rotate,
      image,
      gapX,
      gapY,
      width,
      height,
      offsetLeft,
      offsetTop,
      fontSize,
      fontFamily,
      fontWeight,
      fontColor,
      fontStyle,
    });
    water
      .create()
      .then((base64String) => setBase64Url(base64String))
      .catch(() => {});
  }, [
    content,
    rotate,
    image,
    gapX,
    gapY,
    width,
    height,
    offsetLeft,
    offsetTop,
    fontSize,
    fontFamily,
    fontWeight,
    fontColor,
    fontStyle,
  ]);
  const watermarkStyle: CSSProperties = {
    position: 'absolute',
    top: 0,
    left: 0,
    zIndex: 9,
    width: '100%',
    height: '100%',
    backgroundSize: `${gapX + width}px`,
    backgroundRepeat: 'repeat',
    ...markStyle,
    pointerEvents: 'none',
  };
  watermarkStyle.backgroundImage = `url(${base64Url})`;
  return (
    <div ref={ref} {...other} className={wrapperCls} style={style}>
      {props.children}
      <div style={watermarkStyle} className={waterMakrCls}></div>
    </div>
  );
}

const Watermark = forwardRef<HTMLDivElement, WatermarkProps>(FancyWatermark);

export default Watermark;
