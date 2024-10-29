import { useCallback, useEffect, useRef, useState } from 'react';
import { imageProps } from '../types';
import { useImageViewer } from '../context/image_viewer';
import styles from './image_viewer.module.scss';
import Image from "next/image";

export interface ImageViewerProps {
    images?: imageProps[]
    initialIndex?: number
}

export default function ImageViewer(props: ImageViewerProps) {
    const { images = [], initialIndex } = props;
    const [ imageIndex, setImageIndex ] = useState<number>(initialIndex ?? 0)
    const [ imageSize, setImageSize ] = useState({h: 0, w: 0});
    const [ frameSizeScroll, setFrameSizeScroll ] = useState({h: false, w: false});
    const [ scaleGap, setScaleGap ] = useState(0.5);
    const [ previewScale, setPreviewScale ] = useState(1);
    const { close: closeViewer } = useImageViewer();
    const activeImage = images[imageIndex]
    const canGoPrev = imageIndex > 0
    const canGoNext = imageIndex < images.length - 1
    const canZoomIn = previewScale < (1 + (scaleGap * 5))
    const canZoomOut = previewScale > scaleGap
    const frameRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const handleSideClick = useCallback((direction: 'next' | 'prev') => {
        if(canGoNext && direction === 'next') {
            setImageIndex((prevIndex) => prevIndex + 1)   
        } else if(canGoPrev && direction === 'prev') {
            setImageIndex((prevIndex) => prevIndex - 1)
        }
        handleZoomChange("reset")
    }, [canGoNext, canGoPrev])
    
    const handleZoomChange = useCallback((direction: "in" | "out" | "reset") => {
        if(direction == "in") {
            setPreviewScale(prev => { return prev + scaleGap});
        } else if(direction == "out") {
            setPreviewScale(prev => { return prev - scaleGap});
        } else if(direction == "reset") {
            setPreviewScale(1);
        }
    }, [scaleGap])

    const handleKeyDown = useCallback((event: KeyboardEvent) => {
        if (event.key === '+' || event.key === 'ArrowUp') {
            handleZoomChange("in");
        } else if (event.key === '-' || event.key === 'ArrowDown') {
            handleZoomChange("out");
        } else if(event.key == 'ArrowRight') {
            handleSideClick('next');
        } else if(event.key == 'ArrowLeft') {
            handleSideClick('prev');
        }

        if(event.key == 'Escape') {
            closeViewer('CANCEL')
        }
        
    }, [closeViewer, handleSideClick, handleZoomChange]);

    useEffect(() => {
        const viewer = frameRef.current;
        if (viewer) {
            viewer.addEventListener('keydown', handleKeyDown);
            viewer.tabIndex = -1;
            viewer.focus();
            return () => {
                viewer.removeEventListener('keydown', handleKeyDown);
            };
        }
    }, [handleKeyDown]);

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        const frame = frameRef.current;
        if (entries.length > 0 && frame) {
            const image = entries[0];
            const frameDimensions = frame.getBoundingClientRect();
            const imageDimensions = image.contentRect;
            setImageSize({h: imageDimensions.height, w: imageDimensions.width});
            const scaleX = imageDimensions.width / frameDimensions.width;
            const scale = (scaleX);
            setScaleGap((1 / scale) / 5);
        }
    }, []);

    useEffect(() => {
        const frame = imageRef.current;
        const resizeObserver = new ResizeObserver(onResize);
        if (frame) resizeObserver.observe(frame);

        return () => {
            if (frame) {
                resizeObserver.unobserve(frame);
            }
            resizeObserver.disconnect();
        };
    }, [onResize]);

    useEffect(() => {
        const viewer = frameRef.current;
        if(viewer) {
            setFrameSizeScroll({h: viewer.clientHeight < viewer.scrollHeight, w: viewer.clientWidth < viewer.scrollWidth});
        }
    }, [previewScale])

    return (
        <div className={styles.wrapper} ref={frameRef}>
            <Image  
                src={activeImage?.link}
                alt = {activeImage?.alt}
                ref={imageRef}
                unoptimized={true}
                className='h-auto w-auto max-h-full max-w-full object-contain transition-none duration-100 ease-in-out'
                height={10000}
                width={10000}
                style={{
                    transform: `scale(${previewScale / 1})`,
                    transformOrigin: `${frameSizeScroll.h ? 'top' : 'center'} ${frameSizeScroll.w ? 'left' : 'center'}`, 
                    margin: `${frameSizeScroll.h ? '0' : 'auto'} ${frameSizeScroll.w ? '0' : 'auto'}`,
                }}/>

            <button 
                className={`${styles.close}`}
                onClick={() => closeViewer('CANCEL')}>
                <i className= {`material-symbols-outlined`}>{"\ue5cd"}</i>
            </button> 

            <button 
                className={`${styles.next} ${canGoNext ? '' : styles.disabled} ${styles.navigation}`}
                disabled={!canGoNext}
                onClick={() => handleSideClick('next')}>
                <i className= {`material-symbols-outlined`}>{"\ue5cc"}</i>
            </button> 

            <button 
                className={`${styles.back} ${canGoPrev ? '' : styles.disabled} ${styles.navigation}`}
                disabled={!canGoPrev}
                onClick={() => handleSideClick('prev')}>
                <i className= {`material-symbols-outlined`}>{"\ue5cb"}</i>
            </button>

            <div className={styles.menu}>
                <button 
                    className={`${canZoomOut ? '' : styles.disabled}`}
                    disabled={!canZoomOut}
                    onClick={() => handleZoomChange("out")}>
                    <i className= {`material-symbols-outlined`}>{"\ue15b"}</i>
                </button> 
                <button onClick={() => handleZoomChange("reset")}>
                    <i className= {`material-symbols-outlined`}>{"\ueb2d"}</i>
                </button> 
                <button
                    className={`${canZoomIn ? '' : styles.disabled}`}
                    disabled={!canZoomIn}
                    onClick={() => handleZoomChange("in")}>
                    <i className= {`material-symbols-outlined`}>{"\ue145"}</i>
                </button> 
            </div>
        </div>
    )
}