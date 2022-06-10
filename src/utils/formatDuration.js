export const formatDuration = (duration, didStart) => {
  const daysInflec = () => {
    if (duration.days === 1) {
      return 'den';
    } else if (duration.days < 1) {
      return `dní`;
    } else if (duration.days < 5) {
      return `dny`;
    } else {
      `dní`;
    }
  };

  const timeString = `${duration.days || 0} ${daysInflec()} ${
    duration.hours || 0
  } hodin ${duration.minutes || 0} minut ${duration.seconds || 0} sekund`;

  if (didStart) {
    return `Aukce skončí za ${timeString}`;
  } else {
    return `Aukce začne za ${timeString}`;
  }
};
