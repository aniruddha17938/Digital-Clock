function updateTime() {
    const timeDisplay = document.getElementById('timeDisplay');
    const now = new Date();
  
    let hours = now.getHours();
    let minutes = now.getMinutes();
    let seconds = now.getSeconds();
    const ampm = hours >= 12 ? 'pm' : 'am';
  
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
  
    // Add leading zeros
    hours = String(hours).padStart(2, '0');
    minutes = String(minutes).padStart(2, '0');
    seconds = String(seconds).padStart(2, '0');
  
    timeDisplay.textContent = `${hours}:${minutes}:${seconds} ${ampm}`;
  }
  
  // Update every second
  setInterval(updateTime, 1000);
  updateTime(); // initial call
  