"use client"

import { createContext, useContext, useEffect, useRef, useState } from "react";
import { useBlockPageScroll } from "../hooks/block_scroll";
import ImageViewer, { ImageViewerProps } from "../image_viewer";

type ImageViewerReturnType = 'CANCEL' | 'OK';

export type ImageViewerContext = ImageViewerProps & {
    promise?: { resolve: (value: ImageViewerReturnType | PromiseLike<ImageViewerReturnType>) => void, reject: (reason?: any) => void },
    returnCode?: ImageViewerReturnType,
    show?: boolean,
};

export const ImageViewerContext = createContext<{state: ImageViewerContext, setState: React.Dispatch<React.SetStateAction<ImageViewerContext>>}>({state: {}, setState: ()=>{}});

export const ImageViewerProvider: React.FC<React.PropsWithChildren<{}>> = ({ children }) => {
    const [state, setState] = useState<ImageViewerContext>({});
    useBlockPageScroll(state.show)

    const { show, promise, returnCode } = state;

    useEffect(()=>{
        if (!show)
            promise?.resolve(returnCode??'CANCEL');
    }, [show, promise, returnCode]);

    return (
        <ImageViewerContext.Provider value={{state, setState}}>
            { 
                show ? 
                <ImageViewer
                    images={state.images}
                    initialIndex={state.initialIndex}
                /> : null
            }
            { children }
        </ImageViewerContext.Provider>
    )
  }

export const useImageViewer = () => {
    const { setState, state } = useContext(ImageViewerContext);
    return {
        open: (options: ImageViewerContext) =>
            new Promise<ImageViewerReturnType>((resolve, reject) => {
                setState({...options, show: true, promise: { resolve: resolve, reject: reject }});
            }),
        close: (code?: ImageViewerReturnType) => setState(p=>({...p, show: false, returnCode: code})),

        isOpen: state.show,
    }
}