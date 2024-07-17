import { useCallback, useEffect, useMemo, useRef, useState } from "react";

export function useMarquee(contentSize: number) {
    const [ frameWidth, setFrameWidth ] = useState<number>();
    const frameRef = useRef<HTMLDivElement>(null);

    const onResize = useCallback<ResizeObserverCallback>((entries) => {
        if (entries.length > 0) {
            const entry = entries[0];
            setFrameWidth(entry.contentRect.width - 32);
        }
    }, []);

    useEffect(() => {
        const frame = frameRef.current;
        const resizeObserver = new ResizeObserver(onResize);
        if (frame) resizeObserver.observe(frame);

        return () => {
            if (frame) {
                resizeObserver.unobserve(frame);
            }
            resizeObserver.disconnect();
        };
    }, [onResize]);

    const marqueeCount = useMemo(() => {
        const _count = (frameWidth??contentSize) / contentSize
        return Math.round(_count) + 1
    }, [frameWidth, contentSize])

    return {
        ref: frameRef,
        count: marqueeCount
    }
}