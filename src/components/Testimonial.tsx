import Image from "next/image";
import { memo } from "react";

export const Testimonial = memo(() => (
    <section
        className="section testi text-center has-bg-image"
        style={{ "backgroundImage": "url('/images/testimonial-bg.jpg')" } as React.CSSProperties}
        aria-label="testimonials"
    >
        <div className="custom-container">
            <div className="quote">”</div>
            <p className="headline-2 testi-text">
                I wanted to thank you for inviting me down for that amazing dinner the other night. The food was
                extraordinary.
            </p>
            <div className="wrapper">

                {[...Array(3)].map((_, index) => (
                    <div
                        key={index}
                        className="separator"
                    />
                ))}

            </div>
            <div className="profile">

                <Image
                    src="/images/testi-avatar.jpg"
                    width={100}
                    height={100}
                    loading="lazy"
                    alt="Sam Jhonson"
                    className="img"
                />

                <p className="label-2 profile-name">Sam Jhonson</p>
            </div>
        </div>
    </section>
));