export const TopBar = () => {
    return <>
        <div className="topbar">
            <div className="container">

                <address className="topbar-item">
                    <div className="icon">
                        <ion-icon name="location-outline" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">
                        Restaurant Ganeshman Chowk, Dharan, NP
                    </span>
                </address>

                <div className="separator"></div>

                <div className="topbar-item item-2">
                    <div className="icon">
                        <ion-icon name="time-outline" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">Daily : 9.00 am to 10.00 pm</span>
                </div>

                <a href="tel:+11234567890" className="topbar-item link">
                    <div className="icon">
                        <ion-icon name="call-outline" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">+977-25-570068</span>
                </a>

                <div className="separator"></div>

                <a href="mailto:booking@restaurant.com" className="topbar-item link">
                    <div className="icon">
                        <ion-icon name="mail-outline" aria-hidden="true"></ion-icon>
                    </div>

                    <span className="span">gurunghotkitchen123@gmail.com</span>
                </a>

            </div>
        </div>
    </>;
}