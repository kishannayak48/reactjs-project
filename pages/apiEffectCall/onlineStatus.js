import useOnlineStatus from "@/hook/useOnlineStatus";
import React from "react";

function StatusBar() {
  const isOnline = useOnlineStatus();

  return (
    <>
      <div>
        {isOnline ? (
          <h3 className="text-white dark:bg-green-600">✅ Online</h3>
        ) : (
          <h3 className="text-white dark:bg-red-600 ">❌offline</h3>
        )}
      </div>
      {/* <div>
        <button>Save Progress</button>
      </div> */}
    </>
  );
}
export default StatusBar;
