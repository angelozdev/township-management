const rtf = new Intl.RelativeTimeFormat("en", {
  style: "long",
  localeMatcher: "best fit",
});

function prettyTime(time: number) {
  const ONE_SECOND_IN_MILLISECONDS = 1 * 1000;
  const ONE_MINUTE_IN_MILLISECONDS = ONE_SECOND_IN_MILLISECONDS * 60;
  const ONE_HOUR_IN_MILLISECONDS = ONE_MINUTE_IN_MILLISECONDS * 60;
  const ONE_DAY_IN_MILLISECONDS = ONE_HOUR_IN_MILLISECONDS * 24;
  const ONE_WEEK_IN_MILLISECONDS = ONE_DAY_IN_MILLISECONDS * 7;
  const ONE_MONTH_IN_MILLISECONDS = ONE_DAY_IN_MILLISECONDS * 30;

  let format: Intl.RelativeTimeFormatUnit = "minutes";
  let bestTime = time / ONE_MINUTE_IN_MILLISECONDS;

  if (time >= ONE_MINUTE_IN_MILLISECONDS && time < ONE_HOUR_IN_MILLISECONDS) {
    format = "minutes";
    bestTime = time / ONE_MINUTE_IN_MILLISECONDS;
  } else if (
    time >= ONE_HOUR_IN_MILLISECONDS &&
    time < ONE_DAY_IN_MILLISECONDS
  ) {
    format = "hours";
    bestTime = time / ONE_HOUR_IN_MILLISECONDS;
  } else if (
    time >= ONE_DAY_IN_MILLISECONDS &&
    time < ONE_WEEK_IN_MILLISECONDS
  ) {
    format = "days";
    bestTime = time / ONE_DAY_IN_MILLISECONDS;
  } else if (
    time >= ONE_WEEK_IN_MILLISECONDS &&
    time < ONE_MONTH_IN_MILLISECONDS
  ) {
    format = "weeks";
    bestTime = time / ONE_WEEK_IN_MILLISECONDS;
  } else if (time >= ONE_MONTH_IN_MILLISECONDS) {
    format = "months";
    bestTime = time / ONE_MONTH_IN_MILLISECONDS;
  }

  return rtf.format(bestTime, format);
}

export default prettyTime;
