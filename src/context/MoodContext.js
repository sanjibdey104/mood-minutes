import { createContext } from "react";
import { FetchMoodLogs } from "../data/MoodLogsData";

export const MoodDataContext = createContext(null);

export const MoodDataProvider = ({ children }) => {
  const moodLogs = FetchMoodLogs();
  const moodMojis = [
    {
      mood: "sad",
      code: 0,
    },
    {
      mood: "nervous",
      code: 1,
    },
    {
      mood: "angry",
      code: 2,
    },
    {
      mood: "confused",
      code: 3,
    },
    {
      mood: "neutral",
      code: 4,
    },
    {
      mood: "happy",
      code: 5,
    },
    {
      mood: "cool",
      code: 6,
    },
  ];
  return (
    <MoodDataContext.Provider value={{ moodLogs, moodMojis }}>
      {children}
    </MoodDataContext.Provider>
  );
};
