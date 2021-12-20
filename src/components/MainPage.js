import Ticketing from "./MainPageComponents/Ticketing";
import ComingSoon from "./MainPageComponents/ComingSoon";
import React from "react";

import "../style/MainPage.css";

function MainPage() {
  return (
    <div>
      <Ticketing></Ticketing>
      <ComingSoon></ComingSoon>
    </div>
  );
}
export default MainPage;
