import { FC, useState } from "react";
import "./NotificationBanner.css";

const NotificationBanner: FC = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isExiting, setIsExiting] = useState(false);

  const handleDismiss = () => {
    setIsExiting(true);
  };

  if (!isVisible) return null;

  return (
    <div className={`notification-banner ${isExiting ? "exiting" : ""}`}>
      <div className="banner-content">
        <div className="banner-message">
          {/* <span className="banner-icon">📋</span> */}
          <p>
            Due to unforeseen events, I will not be seeing any clients until
            October 26th. Thank you for understanding.
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
