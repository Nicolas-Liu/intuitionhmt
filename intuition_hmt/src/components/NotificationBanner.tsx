import { FC, useState, useEffect } from "react";
import "./NotificationBanner.css";

const NotificationBanner: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  // Check if user has previously dismissed the banner
  // useEffect(() => {
  //   const isDismissed = localStorage.getItem("bannerDismissed");
  //   if (isDismissed === "true") {
  //     setIsVisible(false);
  //   }
  // }, []);

  const handleDismiss = () => {
    setIsExiting(true);
    // setTimeout(() => {
    //   setIsVisible(false);
    //   localStorage.setItem("bannerDismissed", "true");
    // }, 300); // Match the CSS transition duration
  };

  if (!isVisible) return null;

  return (
    <div className={`notification-banner ${isExiting ? "exiting" : ""}`}>
      <div className="banner-content">
        <div className="banner-message">
          {/* <span className="banner-icon">📋</span> */}
          <p>
            We are currently not accepting new clients. Thank you for your
            understanding.
          </p>
        </div>
        <button
          className="banner-close"
          onClick={handleDismiss}
          aria-label="Close notification"
        >
          &times;
        </button>
      </div>
    </div>
  );
};

export default NotificationBanner;
