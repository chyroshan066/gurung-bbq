import { IonIcon } from "./utility/IonIcon";

export const TopBar = () => {
    return <>
        <div className="topbar">
            <div className="custom-container">

                <address className="topbar-item">
                    <div className="icon">
                        <IonIcon
                            name="location-outline"
                            aria-hidden="true"
                        />
                    </div>
                    <span className="span">
                        Ganeshman Chowk, Dharan, Nepal
                    </span>
                </address>

                <div className="separator"></div>

                <div className="topbar-item item-2">
                    <div className="icon">
                        <IonIcon
                            name="time-outline"
                            aria-hidden="true"
                        />
                    </div>
                    <span className="span">Daily : 9.00 am to 10.00 pm</span>
                </div>

                <a
                    href="tel:+977-25-570068"
                    className="topbar-item link"
                >
                    <div className="icon">
                        <IonIcon
                            name="call-outline"
                            aria-hidden="true"
                        />
                    </div>
                    <span className="span">+977-25-570068</span>
                </a>

                <div className="separator"></div>

                <a
                    href="mailto:gurunghotkitchen123@gmail.com"
                    className="topbar-item link"
                >
                    <div className="icon">
                        <IonIcon
                            name="mail-outline"
                            aria-hidden="true"
                        />
                    </div>
                    <span className="span">gurunghotkitchen123@gmail.com</span>
                </a>

            </div>
        </div>
    </>;
}