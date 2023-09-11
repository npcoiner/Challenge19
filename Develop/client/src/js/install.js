const butInstall = document.getElementById('buttonInstall');

// Logic for installing the PWA
window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.toggle('hidden', false);
});

butInstall.addEventListener('click', async () => {
  butInstall.style.display = 'none';
  window.deferredPrompt.prompt();
  const choiceResult = await deferredPrompt.userChoice;
  if (choiceResult.outcome === 'accepted') {
    console.log('User accepted the PWA installation');
  } else {
    console.log('User declined the PWA installation');
  }
  window.deferredPrompt = null;
});

window.addEventListener('appinstalled', (event) => {
    console.log("INstalled")
});
