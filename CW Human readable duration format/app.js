function formatDuration(seconds) {
  if (seconds <= 0) return 'now';

  const years = Math.floor(seconds / 31536000);
  seconds = seconds - years * 31536000;
  const days = Math.floor(seconds / 86400);
  const hours = Math.floor((seconds - days * 86400) / 3600);
  const minutes = Math.floor((seconds - days * 86400 - hours * 3600) / 60);
  seconds = seconds - (hours * 3600 + minutes * 60 + days * 86400);

  let result = [];

  if (years !== 0) {
    result.push(`${years !== 0 ? `${years} year${years > 1 ? 's' : ''}` : ''}`);
  }
  if (days !== 0) {
    result.push(`${days !== 0 ? `${days} day${days > 1 ? 's' : ''}` : ''}`);
  }
  if (hours !== 0) {
    result.push(`${hours !== 0 ? `${hours} hour${hours > 1 ? 's' : ''}` : ''}`);
  }
  if (minutes !== 0) {
    result.push(
      `${minutes !== 0 ? `${minutes} minute${minutes > 1 ? 's' : ''}` : ''}`
    );
  }
  if (seconds !== 0) {
    result.push(
      `${seconds !== 0 ? `${seconds} second${seconds > 1 ? 's' : ''}` : ''}`
    );
  }

  if (result.length === 1) return result.join('');

  if (result.length === 2) return result.join(' and ');

  if (result.length === 3) return `${result[0]}, ${result[1]} and ${result[2]}`;
  if (result.length === 4)
    return `${result[0]}, ${result[1]}, ${result[2]} and ${result[3]}`;

  if (result.length === 5)
    return `${result[0]}, ${result[1]}, ${result[2]}, ${result[3]} and ${result[4]}`;
}

console.log(formatDuration(937493662));
