<template>
  <ProjectPage :project="project" />
</template>

<script setup>
/**
 * Helpdesk project page — application built on Stone-Age.
 */
import ProjectPage from '../../components/builton/ProjectPage.vue';

const project = {
  name: 'Helpdesk',
  tagline: 'A service desk for people who run other people’s infrastructure: reactive support tickets and proactive field work in one binary.',
  status: { label: 'In Development', color: '#f59e0b' },
  github: 'https://github.com/stone-age-io/helpdesk',
  description: [
    'A service desk for MSPs and platform operators. It handles reactive support tickets and the proactive side of running infrastructure: projects, installations, and on-site field work. One Go binary embeds PocketBase and a Vue SPA with two front doors — a staff app for agents and a self-service portal for requesters — so deployment is copying a file to the box.',
    'The signature feature is machine-generated tickets. Customer devices and automation publish over NATS and tickets appear with unforgeable, subject-based provenance; humans file through the portal, the staff app, or an authenticated webhook. Every on-site visit, logged hour, and project rolls up to the ticket, which stays the canonical ledger.',
  ],
  features: [
    {
      icon: 'pi-bolt',
      color: '#14b8a6',
      title: 'Machine-Generated Tickets',
      text: 'Devices publish to NATS and tickets appear automatically. The customer org is parsed from the operator-signed subject, so provenance is unforgeable and redelivery is a harmless no-op.',
    },
    {
      icon: 'pi-users',
      color: '#3b82f6',
      title: 'Two Front Doors',
      text: 'One binary serves a staff app for agents and a customer-scoped requester portal. Collection rules keep each requester to their own org’s tickets and hide internal comments and the MSP roster.',
    },
    {
      icon: 'pi-map-marker',
      color: '#f59e0b',
      title: 'Visits & Lite Dispatch',
      text: 'Promote any ticket to on-site work: schedule a tech, drive a mobile Arrive → timer → Complete work view, and track a trustworthy who-went-when history without touching the ticket schema.',
    },
    {
      icon: 'pi-clock',
      color: '#8b5cf6',
      title: 'Time Tracking',
      text: 'Agents log minutes by hand or run a start/stop timer that resolves into the ticket’s time ledger. Totals are exposed per customer only when the MSP opts to show them.',
    },
    {
      icon: 'pi-sitemap',
      color: '#ec4899',
      title: 'Projects & Locations',
      text: 'A planning layer above the ledger groups tickets at a customer location over a target window. Crew and total time are derived at read time, never stored — drop the layer and the app still works.',
    },
    {
      icon: 'pi-bell',
      color: '#10b981',
      title: 'Audit Trail & Notifications',
      text: 'Every workflow change writes a forge-proof timeline. Templated email and an optional versioned NATS event channel fire on real transitions, with suppression rules so nobody is mailed about their own change.',
    },
  ],
  stoneAge: {
    title: 'How It Uses Stone-Age',
    points: [
      'Embedded PocketBase as the system of record: collections, access rules, and an admin UI compiled into one binary.',
      'Two auth collections — staff and requesters — with customer-scoped rules enforced in the database, not the UI.',
      'JetStream ingestion of machine-generated tickets, with org identity read from the operator-signed subject and idempotency anchors that absorb redelivery.',
      'A second, disjoint JetStream channel publishes versioned event envelopes for MSP-internal automation, independent of the email channel.',
    ],
  },
};
</script>
