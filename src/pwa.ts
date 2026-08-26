/// <reference types="vite-plugin-pwa/client" />
// Service worker registration for the PWA.
// vite-plugin-pwa injects the virtual module at build time.
import { registerSW } from 'virtual:pwa-register';

registerSW({
  immediate: true,
  onOfflineReady() {
    console.log('AI Ed Wiki is ready to work offline');
  },
  onRegisteredSW(_swUrl: string, registration?: ServiceWorkerRegistration) {
    // If a newer SW is waiting, tell it to activate so the user always gets the
    // latest content on next load (registerType: 'autoUpdate').
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
