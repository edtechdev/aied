/// <reference types="vite-plugin-pwa/client" />
// Service worker registration for the PWA.
// vite-plugin-pwa injects the virtual module at build time.
import { registerSW } from 'virtual:pwa-register';

registerSW({
  immediate: true,
  onOfflineReady() {
    // Installation alone does not save the whole knowledge base. Say what is
    // actually true: the fallback is ready, and some visited pages may work.
    console.log('AIEd KB offline fallback is ready; previously visited pages may be available offline');
  },
  onRegisteredSW(_swUrl: string, registration?: ServiceWorkerRegistration) {
    // If a newer SW is waiting, tell it to activate so the user always gets the
    // latest content on next load (registerType: 'autoUpdate').
    if (registration && registration.waiting) {
      registration.waiting.postMessage({ type: 'SKIP_WAITING' });
    }
  },
});
