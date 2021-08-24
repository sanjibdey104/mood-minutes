import dayjs from "dayjs";

export const weeklyMoodData = (moodLogs) => {
  // grouping data by date
  const sameDayMoodLogs = {};
  moodLogs.forEach((log) => {
    const formattedLogDate = dayjs(log.loggedAt.toDate()).format("MMM DD");
    if (!sameDayMoodLogs[formattedLogDate]) {
      sameDayMoodLogs[formattedLogDate] = [log];
    } else {
      sameDayMoodLogs[formattedLogDate].push(log);
    }
  });

  // get the last seven days
  let lastSevenDays = [];
  for (let i = 0; i < 7; i++) {
    let t = new Date();
    t.setDate(t.getDate() - i);
    lastSevenDays.push(t.getDate());
  }

  // modify loggedAt timestamp with "DD" format to match dates in "lastSevenDays"
  const modifiedMoodLogs = moodLogs.map((log) => ({
    ...log,
    loggedAt: Number(dayjs(log.loggedAt.toDate()).format("DD")),
  }));

  // match loggedAt day with the corresponding day in "lastSevenDays"
  let rawMoodData = lastSevenDays
    .sort()
    .map((day) => modifiedMoodLogs.find((log) => log.loggedAt === day));

  // filtered mood data for mood chart
  const filteredMoodData = rawMoodData.map((item) => {
    // days with no entries updated with null
    if (item === undefined) return null;
    // valid ones updated with emoji code
    else return item.code;
  });

  return { filteredMoodData, lastSevenDays };
};
