import React, { useEffect, useState } from "react";
// Removed custom-cursor-react imports
import { useTheme } from "next-themes";

const Cursor = () => {
  const theme = useTheme();
  const [mount, setMount] = useState();

  const getCusomColor = () => {
    if (theme.theme === "dark") {
      return "#fff";
    } else if (theme.theme === "light") {
      return "#000";
    }
  };

  useEffect(() => {
    setMount(true);
  }, []);
  // CustomCursor removed. Optionally, you can return null or a placeholder.
  return null;
};

export default Cursor;
