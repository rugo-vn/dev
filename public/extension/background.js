// const rules = [
//   {
//     id: 1,
//     priority: 1,
//     action: {
//       type: 'modifyHeaders',
//       requestHeaders: [
//         { header: 'v1', operation: 'set', value: 'v2' },
//       ],
//     },
//     condition: {
//       urlFilter: 'localhost',
//       resourceTypes: ['main_frame'],
//     },
//   },
// ];

// ;(async () => {
//   const currentRules = await chrome.declarativeNetRequest.getDynamicRules();
  
//   await chrome.declarativeNetRequest.setExtensionActionOptions({
//     displayActionCountAsBadgeText: true,
//   });

//   await chrome.declarativeNetRequest.updateDynamicRules({
//     removeRuleIds: rules.map((rule) => rule.id), // remove existing rules
//     addRules: rules
//   });
// })();

chrome.runtime.onInstalled.addListener(() => {
  // default values
  chrome.storage.local.set({
    active: false,
  });

  // display badge text
  chrome.declarativeNetRequest.setExtensionActionOptions({
    displayActionCountAsBadgeText: true,
  });
});