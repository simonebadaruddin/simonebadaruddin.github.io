function updateTimestamp() {
    const timestampElement = document.getElementById("timestamp");
    const now = new Date();
  
    // Convert to Los Angeles time
    const options = {
      timeZone: "America/Los_Angeles",
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
      hour: "numeric",
      minute: "2-digit",
      hour12: true,
    };
  
    const laTime = now.toLocaleString("en-US", options);

    // Remove the comma after the date
    const formattedTime = laTime.replace(/, /, ' ').replace(/\s([AP]M)$/, (_, ampm) => ampm.toLowerCase());
  
    timestampElement.textContent = `${formattedTime} LA`;
}
  
// Update the timestamp initially and every second
updateTimestamp();
setInterval(updateTimestamp, 1000);
