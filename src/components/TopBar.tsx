import { memo } from "react";
import { IonIcon } from "./utility/IonIcon";

interface TopBarDetails {
    icon_name: string;
    span_details: string;
}

const Details = memo(({
    icon_name, span_details
}: TopBarDetails) => (
    <>
        <div className="icon">
            <IonIcon
                name={icon_name}
                aria-hidden="true"
            />
        </div>
        <span className="span">
            {span_details}
        </span>
    </>
));

Details.displayName = "Details";

export const TopBar = memo(() => {
    return <>
        <div className="topbar">

            <div className="custom-container">

                <address className="topbar-item">
                    <Details
                        icon_name={"location-outline"}
                        span_details={"Ganeshman Chowk, Dharan, Nepal"}
                    />
                </address>

                <div className="separator"></div>

                <div className="topbar-item item-2">
                    <Details
                        icon_name={"time-outline"}
                        span_details={"Daily : 9.00 am to 10.00 pm"}
                    />
                </div>

                <a
                    href="tel:+977-25-570068"
                    className="topbar-item link"
                >
                    <Details
                        icon_name={"call-outline"}
                        span_details={"+977-25-570068"}
                    />
                </a>

                <div className="separator"></div>

                <a
                    href="mailto:gurunghotkitchen123@gmail.com"
                    className="topbar-item link"
                >
                    <Details
                        icon_name={"mail-outline"}
                        span_details={"gurunghotkitchen123@gmail.com"}
                    />
                </a>

            </div>

        </div>
    </>;
});

TopBar.displayName = "TopBar";