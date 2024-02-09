import React from "react";
import LiveCursors from "./cursor/LiveCursors";
import { useOthers } from "@/liveblocks.config";
import Cursor from "./cursor/Cursor";
import { COLORS } from "@/constants";

const Live = () => {
  const others = useOthers();

  others.map(({ connectionId, presence }) => {
    if (!presence) return null;
    return (
      <Cursor
        key={connectionId}
        color={COLORS[Number(connectionId) % COLORS.length]}
        x={presence.cursor.x}
        y={presence.cursor.y}
        message={presence.message}
      />
    );
  });
  //   return (
  //     <div>
  //       <LiveCursors others={others} />
  //     </div>
  //   );
};

export default Live;
