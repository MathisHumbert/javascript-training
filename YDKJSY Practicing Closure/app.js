// This is my solution for YDKJSY practice

const dayStart = '7:30';
const dayEnd = '17:45';

function scheduleMeeting(startTime, durationMinutes) {
  startTime = startTime.split(':').map((time) => parseInt(time));
  if (parseInt(dayStart.split(':')[0]) > startTime[0]) return false;

  if (
    parseInt(dayStart.split(':')[0]) == startTime[0] &&
    parseInt(dayStart.split(':')[1]) > startTime[1]
  )
    return false;

  if (startTime[1] + durationMinutes > 60) {
    startTime[0]++;
    startTime[1] + durationMinutes - 60;
  } else {
    startTime[1] += durationMinutes;
  }

  console.log(parseInt(dayEnd.split(':')[1]));

  if (parseInt(dayEnd.split(':')[0]) < startTime[0]) {
    return false;
  } else if (parseInt(dayEnd.split(':')[0]) == startTime[0]) {
    if (parseInt(dayEnd.split(':')[1]) >= startTime[1]) return true;
    else return false;
  } else return true;
}

console.log(scheduleMeeting('18:00', 15));
