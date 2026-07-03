<template>
  <ProjectPage :project="project" />
</template>

<script setup>
/**
 * Agent project page — component of the Stone-Age stack.
 */
import ProjectPage from '../../components/builton/ProjectPage.vue';

const project = {
  name: 'Agent',
  tagline: 'A lightweight system service for every device: telemetry, service control, and whitelisted commands — in under 50 MB of RAM.',
  status: { label: 'Production-Shaped', color: '#10b981' },
  github: 'https://github.com/stone-age-io/agent',
  description: [
    'The per-device daemon of the Stone-Age stack. Install it on a gateway, server, or industrial PC and it publishes heartbeats and system telemetry over NATS, controls local services, and executes whitelisted commands — all from a single static Go binary with no runtime dependencies.',
    'Built for the boxes you can’t easily reach: graceful shutdown, panic recovery in every handler, TLS 1.2+ enforced, and command output capped so a runaway process can’t take the agent down with it.',
  ],
  features: [
    {
      icon: 'pi-heart',
      color: '#ef4444',
      title: 'Heartbeats & Health',
      text: 'Regular liveness heartbeats plus a rich health endpoint: NATS stats, agent memory, goroutines, uptime, and OS info on request.',
    },
    {
      icon: 'pi-chart-line',
      color: '#3b82f6',
      title: 'System Telemetry',
      text: 'CPU, memory, disk, and service metrics via built-in collectors, or scrape existing Prometheus exporters and publish the result over NATS.',
    },
    {
      icon: 'pi-cog',
      color: '#8b5cf6',
      title: 'Service Control',
      text: 'Start, stop, and restart services through systemd, Windows SCM, or FreeBSD rc.d — the platform-specific code is behind clean build tags.',
    },
    {
      icon: 'pi-lock',
      color: '#f59e0b',
      title: 'Whitelisted Commands',
      text: 'Remote execution only from an explicit allowlist, with enforced timeouts and a 10 MB output cap. No shells, no surprises.',
    },
    {
      icon: 'pi-file',
      color: '#10b981',
      title: 'Log Retrieval',
      text: 'Fetch application logs over NATS from an allowlisted set of paths — no SSH session needed to see what a remote box is doing.',
    },
    {
      icon: 'pi-desktop',
      color: '#6366f1',
      title: 'Runs Anywhere',
      text: 'Linux, Windows, and FreeBSD from one codebase. Race-detected tests and lint gates keep it boring and dependable.',
    },
  ],
  stoneAge: {
    title: 'Role in the Stack',
    points: [
      'The observability and control arm at the device level — one agent per box, complementing the per-site leaf node.',
      'Bootstraps its NATS credentials from the platform control plane, then speaks only NATS.',
      'Heartbeats feed online/offline status; telemetry feeds dashboards and your time-series database of choice.',
      'Pairs with rule-router at the edge: the agent reports and acts, rules decide when.',
    ],
  },
};
</script>
