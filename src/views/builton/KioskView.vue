<template>
  <ProjectPage :project="project" />
</template>

<script setup>
/**
 * Kiosk project page — application built on Stone-Age.
 */
import ProjectPage from '../../components/builton/ProjectPage.vue';

const project = {
  name: 'Kiosk',
  tagline: 'Self-service checkout for tool cribs and storerooms. Scan a badge, scan items, walk away.',
  status: { label: 'In Development', color: '#f59e0b' },
  github: 'https://github.com/skeeeon/kiosk',
  description: [
    'A self-service checkout kiosk for tool cribs and consumable storerooms. One ~40 MB Go binary embeds PocketBase, SQLite, and a touch-friendly Vue UI — deployment is copying a file to the edge box. Workers identify by badge scan; no logins at the kiosk.',
    'The same binary has three personalities: a standalone kiosk, a central controller that aggregates a fleet of kiosks into one ledger, and a virtual timeclock where workers clock in and out from their phones.',
  ],
  features: [
    {
      icon: 'pi-id-card',
      color: '#3b82f6',
      title: 'Badge-Scan Checkout',
      text: 'The kiosk box is the trust boundary: scan a badge, scan items, done. Serialized tools and quantity-tracked consumables in the same flow.',
    },
    {
      icon: 'pi-book',
      color: '#8b5cf6',
      title: 'Append-Only Ledgers',
      text: 'Checkouts, returns, and time punches are immutable after commit. Open state is derived, auditable, and rebuildable — never edited in place.',
    },
    {
      icon: 'pi-sitemap',
      color: '#10b981',
      title: 'Fleet Mode',
      text: 'A central controller consumes every kiosk’s events via JetStream into one ledger and pushes catalog updates down through KV buckets.',
    },
    {
      icon: 'pi-clock',
      color: '#f59e0b',
      title: 'Virtual Timeclock',
      text: 'Workers punch in and out from their phones. Optional interlocks: require clock-in before checkout, block clock-out with tools still open.',
    },
    {
      icon: 'pi-wifi',
      color: '#ec4899',
      title: 'Offline-First',
      text: 'The local database is authoritative. NATS down? The kiosk keeps checking out; events buffer and sync when connectivity returns.',
    },
    {
      icon: 'pi-wrench',
      color: '#6366f1',
      title: 'Instance Lifecycle',
      text: 'Serialized units carry barcodes, RFID EPCs, or BLE IDs, with per-unit maintenance and retirement states. RFID enclosure reconciliation is in the works.',
    },
  ],
  stoneAge: {
    title: 'How It Uses Stone-Age',
    points: [
      'Embedded PocketBase per binary — kiosk, controller, and timeclock each own their schema via Go migrations.',
      'JetStream event streams with idempotency anchors, so controller projections survive redelivery as no-ops.',
      'KV buckets for per-kiosk catalog sync — the controller publishes, each kiosk watches its own slice.',
      'NATS request/reply for admin commands from the controller down to any kiosk in the fleet.',
    ],
  },
};
</script>
