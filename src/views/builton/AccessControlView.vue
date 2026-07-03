<template>
  <ProjectPage :project="project" />
</template>

<script setup>
/**
 * Access Control project page — application built on Stone-Age.
 */
import ProjectPage from '../../components/builton/ProjectPage.vue';

const project = {
  name: 'Access Control',
  tagline: 'Badge-in access control where every door keeps deciding locally, even when the internet dies.',
  status: { label: 'In Development', color: '#f59e0b' },
  github: 'https://github.com/stone-age-io/access-control',
  description: [
    'A NATS-native physical access control system. A central control plane is the system of record for cardholders, roles, access groups, schedules, and doors. Policy is mirrored to NATS KV, and edge controllers make every grant/deny decision locally with a pure, table-tested function. No network round-trip per badge tap.',
    'Controllers drive real hardware: OSDP badge readers over RS485, relay-driven locks and door inputs via GPIO or I2C expanders. Every event, from badge taps to door alarms, flows back through JetStream into a complete, rebuildable audit trail.',
  ],
  features: [
    {
      icon: 'pi-bolt',
      color: '#f59e0b',
      title: 'Edge-Autonomous Decisions',
      text: 'The grant/deny decision is a pure function over in-memory policy. Internet down? Doors keep working. Controllers converge automatically on reconnect.',
    },
    {
      icon: 'pi-ban',
      color: '#ef4444',
      title: 'Deny-First Policy',
      text: 'Lockdown, disabled cardholders, revoked or expired credentials are checked before any grant. Schedules, holidays, and per-area postures included.',
    },
    {
      icon: 'pi-microchip',
      color: '#3b82f6',
      title: 'Real Hardware Drivers',
      text: 'OSDP readers over RS485, GPIO relays and door inputs (Linux char device), MCP23017 I2C expanders. Simulated drivers for development without hardware.',
    },
    {
      icon: 'pi-history',
      color: '#8b5cf6',
      title: 'Complete Audit Trail',
      text: 'Every tap and door event lands in JetStream, the system of record, and is projected into the UI as a searchable, rebuildable timeline.',
    },
    {
      icon: 'pi-shield',
      color: '#10b981',
      title: 'Intrusion-Lite',
      text: 'Area arm states, forced-door and held-open alarms, entry-disarm on valid badge, and opt-in email notifications for alarm events.',
    },
    {
      icon: 'pi-map',
      color: '#ec4899',
      title: 'Operational Console',
      text: 'Embedded management UI: portals, credentials, schedules, floor plans, and a live monitor, all compiled into the binary. Nothing extra to deploy.',
    },
  ],
  stoneAge: {
    title: 'How It Uses Stone-Age',
    points: [
      'Embedded PocketBase as the system of record: collections, rules, and an admin UI in one binary.',
      'Policy mirrored one-record-per-key into NATS KV with natural keys; controllers watch and converge, fail-safe on parse errors.',
      'JetStream as the durable event ledger, with independent consumers for audit projection, notifications, and entry-disarm.',
      'Liveness heartbeats and subject-per-thing conventions shared with the rest of the platform.',
    ],
  },
};
</script>
