import { FC, useState } from "react";
import "./NotificationBanner.css";
import { useTranslation } from "react-i18next";

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
            Place is limited. I will be operating until December 18th, then off
            for 6 weeks. Availability may be limited on the booking site. Please
            email or text me to make an appointment. Thank you for your
            understanding 🙏🏽 Happy holidays!
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
