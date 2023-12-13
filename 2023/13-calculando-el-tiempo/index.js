function calculateTime(deliveries) {
  const timeLimit = "07:00:00";

  const totalSeconds = deliveries.reduce((acc, time) => {
    return (
      acc +
      time
        .split(":")
        .reduce((sum, val, idx) => sum + parseInt(val) * [3600, 60, 1][idx], 0)
    );
  }, 0);

  const totalSecondLimit = timeLimit
    .split(":")
    .reduce((acc, val, idx) => acc + parseInt(val) * [3600, 60, 1][idx], 0);

  const secondsDifference = Math.abs(totalSecondLimit - totalSeconds);

  const h = Math.abs(Math.floor(secondsDifference / 3600));
  const m = Math.abs(Math.floor((secondsDifference % 3600) / 60));
  const s = Math.abs(Math.floor(secondsDifference % 60));

  const fHours = `${String(h).padStart(2, "0")}`;
  const fMinutes = `${String(m).padStart(2, "0")}`;
  const fSeconds = `${String(s).padStart(2, "0")}`;

  const formattedDifference = `${fHours}:${fMinutes}:${fSeconds}`;

  return totalSecondLimit < totalSeconds
    ? formattedDifference
    : totalSecondLimit === totalSeconds
    ? "00:00:00"
    : `-${formattedDifference}`;
}

const result = calculateTime(["00:10:00", "01:00:00", "03:30:00"]);
console.log(result);
