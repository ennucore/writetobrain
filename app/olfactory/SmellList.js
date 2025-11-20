import React from 'react';

export default function SmellList() {
    const smells = [
        {
            src: "/icons/fresh.webm",
            text: "The sensation of fresh air, with a lot of oxygen",
            isVideo: true
        },
        {
            src: "/icons/garbage.webm",
            text: "The smell of garbage, like few-day-old fruit peels",
            isVideo: true
        },
        {
            src: "/icons/ozone-ezgif.com-gif-maker.gif",
            text: "An ozone-like sensation, like you're next to an air ionizer",
            isVideo: false
        },
        {
            src: "/icons/burning-ezgif.com-gif-maker.gif",
            text: "A campfire smell of burning wood",
            isVideo: false
        },
    ];

    return (
        <div className="flex flex-col gap-4 my-6">
            {smells.map((item, i) => (
                <div key={i} className="flex items-center gap-4">
                    <div style={{ width: '1.2rem', height: '1.2rem', 'marginRight': '0.3rem', flexShrink: 0 }}>
                        {item.isVideo ? (
                            <video
                                src={item.src}
                                autoPlay
                                loop
                                muted
                                playsInline
                                style={{ width: '100%', height: '100%', objectFit: 'contain', margin: 0 }}
                            />
                        ) : (
                            <img
                                src={item.src}
                                alt=""
                                style={{ width: '100%', height: '100%', objectFit: 'contain', margin: 0 }}
                            />
                        )}
                    </div>
                    <span className="text-lg">{item.text}</span>
                </div>
            ))}
        </div>
    );
}
