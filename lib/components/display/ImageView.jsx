import Image from 'next/image';
import { useEffect, useState } from 'react';

export default function ImageView({
    width = 100,
    height = 50,
    src: source,
    alt = "Image",
    objectFit = "cover",
    imageStyle = "w-14 h-14 rounded-full object-cover"
}) {
    const [src, setSrc] = useState('/assets/images/common/default-image.png');

    useEffect(() => {
        if (source) setSrc(source)
    }, [source])

    return (
        <div
        >
            <Image
                alt={alt}
                src={src}
                width={width}
                height={height}
                objectFit={objectFit}
                className={imageStyle}
                onErrorCapture={() => setSrc('/assets/images/common/default-image.png')}
                blurDataURL={'/assets/images/common/default-image.png'}
            />
        </div>
    );
}
