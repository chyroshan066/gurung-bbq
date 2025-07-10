import Image from "next/image";
import { memo } from "react";

interface Event {
    imgSrc: string;
}

const EVENT_LIST: Event[] = [
    {
        imgSrc: "/images/event-1.jpg",
    },
    {
        imgSrc: "/images/event-2.jpg",
    },
    {
        imgSrc: "/images/event-3.jpg",
    },
];

const EventCard = memo(({
    imgSrc
}: Event) => (
    <li>
        <div className="event-card has-before hover:shine">
            <div
                className="card-banner img-holder"
                style={{ "--width": "350", "--height": "450" } as React.CSSProperties}
            >

                <Image
                    src={imgSrc}
                    width={350}
                    height={450}
                    loading="lazy"
                    alt="Flavour so good you’ll try to eat with your eyes."
                    className="img-cover"
                />

            </div>
        </div>
    </li>
));

EventCard.displayName = "EventCard";

export const EventHall = memo(() => (
    <section
        className="section event bg-black-10"
        aria-label="event-label"
        id="event"
    >
        <div className="custom-container">
            <p className="section-subtitle label-2 text-center">New Event Hall</p>
            <h2 className="section-title headline-1 text-center">Book For An Event</h2>
            <ul className="grid-list">

                {EVENT_LIST.map(event => (
                    <EventCard
                        key={event.imgSrc}
                        imgSrc={event.imgSrc}
                    />
                ))}

            </ul>

        </div>
    </section>
));

EventHall.displayName = "EventHall";