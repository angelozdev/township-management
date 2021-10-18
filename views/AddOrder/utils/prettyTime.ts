const rtf = new Intl.RelativeTimeFormat("en", {
  style: "long",
  localeMatcher: "best fit",
});

function prettyTime(time: number) {
  let format: Intl.RelativeTimeFormatUnit = "seconds";
  let bestTime = time;

  if (time >= 60 && time < 60 * 60) {
    format = "minutes";
    bestTime = time / 60;
  } else if (time >= 60 * 60 && time < 60 * 60 * 24) {
    format = "hours";
    bestTime = time / (60 * 60);
  } else if (time >= 60 * 60 * 24 && time < 60 * 60 * 24 * 7) {
    format = "days";
    bestTime = time / (60 * 60 * 24);
  } else if (time >= 60 * 60 * 24 * 7 && time < 60 * 60 * 24 * 30) {
    format = "weeks";
    bestTime = time / (60 * 60 * 24 * 7);
  } else if (time >= 60 * 60 * 24 * 30) {
    format = "months";
    bestTime = time / (60 * 60 * 24 * 30);
  }

  return rtf.format(bestTime, format);
}

export default prettyTime;
