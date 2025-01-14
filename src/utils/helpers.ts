export const convertToEasternTime = (date: Date): string => {
  return new Date(date).toLocaleString('en-US', {
    timeZone: 'America/New_York',
    hour: '2-digit',
    minute: '2-digit',
    hour12: false,
  });
};

export const roundToNearestTick = (value: number): number => {
  const tickSize = 0.25;
  return Math.round(value / tickSize) * tickSize;
};
