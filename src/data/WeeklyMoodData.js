import dayjs from "dayjs";

export const weeklyMoodData = (moodLogs) => {
  // set the last seven days
  let lastSevenDays = [];
  for (let i = 0; i < 7; i++) {
    let t = new Date();
    t.setDate(t.getDate() - i);
    lastSevenDays.push(t.getDate());
    // lastSevenDays.push(`${t.getDate()}th`);
  }
  lastSevenDays = lastSevenDays.sort();

  // update loggedAt timestamp with "DD" equivalent
  const updatedMoodLogs = moodLogs
    .map((log) => ({
      ...log,
      loggedAt: Number(dayjs(log.loggedAt.toDate()).format("DD")),
    }))
    .slice()
    .sort((a, b) => a.loggedAt - b.loggedAt);

  // match loggedAt day with the corresponding day in last seven days
  let rawMoodData = lastSevenDays.map((day) =>
    updatedMoodLogs.find((log) => log.loggedAt === day)
  );

  // filtered mood data for mood chart
  const filteredMoodData = rawMoodData.map((item) => {
    // days with no entries updated with null
    if (item === undefined) return null;
    // valid ones updated with emoji code
    else return item.code;
  });

  return { filteredMoodData, lastSevenDays };
};
