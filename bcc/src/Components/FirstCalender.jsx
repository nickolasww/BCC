import React from "react";

import FullCalender from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid";
import timeGridPlugin from "@fullcalendar/timegrid";
import interactionPlugin from "@fullcalendar/interaction";

function FirstCalender() {
  return (
    <>
      <div className="h-screen- w-screen"></div>
      <div className="h-[100px]">
        <FullCalender
          plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
          initialView={"dayGridMonth"}
          headerToolbar={{
            start: "title",
            center: "",
            end: "today prev,next",
          }}
        />
      </div>
    </>
  );
}
export default FirstCalender;
