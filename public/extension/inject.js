const loadData = async () => {
  console.log(`Rugo Developer > Load data`);

  const { active: isActive } = await chrome.storage.local.get(['active']);

  if (!isActive)
    return;

  const ws = new WebSocket('ws://localhost:8081');

  ws.onmessage = (event) => {
    if (event.data === 'changed') {
      location.reload();
    };
  }
};

chrome.runtime.onMessage.addListener(
  function({ command }) {
    if (command === 'loadData')
      loadData();
  }
);

loadData();