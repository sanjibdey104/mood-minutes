export const moodFrequencyData = (moodLogs, moodMojis) => {
  const frequencyData = {};
  moodLogs.forEach((log) => {
    frequencyData[log.mood]
      ? frequencyData[log.mood]++
      : (frequencyData[log.mood] = 1);
  });

  const moodFrequencyChartData = moodMojis.map((moji) => {
    if (frequencyData.hasOwnProperty(moji.mood))
      return {
        mood: moji.mood,
        frequency: frequencyData[moji.mood],
      };
    else return { mood: moji.mood, frequency: 0 };
  });

  const moodLabels = moodFrequencyChartData.map((data) => data.mood);
  const moodFrequency = moodFrequencyChartData.map((data) => data.frequency);
  return { moodLabels, moodFrequency };
};
