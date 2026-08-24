document.addEventListener('DOMContentLoaded', () => {
  const lockscreen = document.getElementById('tablet-lockscreen');
  const lockTime = document.getElementById('lock-time');
  const lockDate = document.getElementById('lock-date');
  const lockBtn = document.getElementById('lock-tablet-btn');

  // Update Clock & Date
  function updateClock() {
    const now = new Date();
    if (lockTime) {
      lockTime.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
    if (lockDate) {
      lockDate.textContent = now.toLocaleDateString([], { weekday: 'long', month: 'long', day: 'numeric', year: 'numeric' });
    }
  }

  updateClock();
  setInterval(updateClock, 1000);

  // Check Session Lock State
  if (sessionStorage.getItem('tnhd_tablet_unlocked') === 'true') {
    if (lockscreen) {
      lockscreen.classList.add('unlocked');
    }
  }

  // Unlock Function with 3D transition
  function unlockTablet() {
    if (lockscreen && !lockscreen.classList.contains('unlocked')) {
      lockscreen.classList.add('unlocked');
      sessionStorage.setItem('tnhd_tablet_unlocked', 'true');
    }
  }

  // Lock Function
  function lockTablet() {
    if (lockscreen) {
      lockscreen.classList.remove('unlocked');
      sessionStorage.removeItem('tnhd_tablet_unlocked');
    }
  }

  // Event Listeners
  if (lockscreen) {
    lockscreen.addEventListener('click', unlockTablet);
  }

  if (lockBtn) {
    lockBtn.addEventListener('click', (e) => {
      e.stopPropagation();
      lockTablet();
    });
  }

  // Keyboard unlock trigger
  document.addEventListener('keydown', (e) => {
    if (lockscreen && !lockscreen.classList.contains('unlocked')) {
      unlockTablet();
    }
  });
});
