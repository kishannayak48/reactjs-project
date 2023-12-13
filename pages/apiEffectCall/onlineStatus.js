import React, { useState, useEffect } from "react";

function OnlineStatus() {
  const [isOnline, setIsOnline] = useState(true);
  useEffect(() => {
    const handleOnline = () => {
      setIsOnline(true);
      console.log("I am connected to the internet");
    };
    const handleOffline = () => {
      setIsOnline(false);
      console.log("Disconnected....So Happy!!!");
    };

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return (
    <div className="text-black-dark text-3xl">
      {isOnline ? "you are Online" : "you are offline"}
    </div>
  );
}

export default OnlineStatus;
