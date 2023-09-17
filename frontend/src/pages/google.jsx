import React, { useEffect } from "react";

function GoogleMap({ dataDetails }) {
  useEffect(() => {
    const iframeData = document.getElementById("iframeId");

    if (dataDetails) {
      // Assuming rideDetails has properties lat and lon
      const lat = dataDetails.lat;
      const lon = dataDetails.lon;
      iframeData.src = `https://maps.google.com/maps?q=${lat},${lon}&hl=es;&output=embed`;
    }
  }, [dataDetails]);

  return (
    <div>
      <iframe id="iframeId" height="500px" width="100%"></iframe>
    </div>
  );
}

export default GoogleMap;