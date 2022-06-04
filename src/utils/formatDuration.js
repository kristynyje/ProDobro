export const formatDuration = (duration, didStart) => {
  const timeString = `${duration.days || 0} dní ${duration.hours || 0} hodin ${
    duration.minutes || 0
  } minut ${duration.seconds || 0} sekund`;

  if (didStart) {
    return `Aukce skončí za ${timeString}`;
  } else {
    return `Aukce začne za ${timeString}`;
  }
};
