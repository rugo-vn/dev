<script setup>
import { ref } from 'vue';

// const TYPES = [null, 'redirect', 'modifyHeaders']
// const REDIRECT = 1;
// const MODIFY_HEADERS = 2;

const isActive = ref(false);

const load = async () => {
  const storage = await chrome.storage.local.get(['active']);  
  isActive.value = storage.active;
}

// const addRule = async (typeNumber, raw) => {
//   const type = TYPES[typeNumber];
//   const data = {};

//   switch (typeNumber) {
//     case REDIRECT:
//       data.redirect = { url: raw };
//       break;
//   }

//   const rule = {
//     id: type,
//     priority: 1,
//     action: {
//       type,
//       ...data,
//     }
//   }

//   // const currentRules = await chrome.declarativeNetRequest.getDynamicRules();

//   const rules = [
//     {
//       id: 1,
//       priority: 1,
//       action: {
//         type: 'modifyHeaders',
//         requestHeaders: [
//           { header: 'v1', operation: 'set', value: 'v2' },
//         ],
//       },
//       condition: {
//         urlFilter: 'localhost',
//         resourceTypes: ['main_frame'],
//       },
//     },
//   ];

//   const currentRules = await chrome.declarativeNetRequest.getDynamicRules();

//   console.log(currentRules);
    
//   await chrome.declarativeNetRequest.setExtensionActionOptions({
//     displayActionCountAsBadgeText: true,
//   });

//   await chrome.declarativeNetRequest.updateDynamicRules({
//     removeRuleIds: rules.map((rule) => rule.id), // remove existing rules
//     addRules: rules
//   });
// }

const toggleActive = async () => {
  isActive.value = !isActive.value;
  await chrome.storage?.local.set({ active: isActive.value });

  if (!isActive.value)
    return;

  const [tab] = await chrome.tabs.query({active: true, lastFocusedWindow: true});
  await chrome.tabs.sendMessage(tab.id, { command: "loadData" });
}

load();
</script>

<template>
  <div class="p-4 w-full">
    <RButton
      @click="toggleActive"
      :variant="isActive ? 'primary' : 'secondary'"
    >
      {{ isActive ? 'Activated' : 'Disabled' }}
    </RButton>

    <!-- <RInput label="Host" /> -->
  </div>
</template>