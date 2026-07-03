<template>
  <ProjectPage :project="project" />
</template>

<script setup>
/**
 * Rule-Router project page — component of the Stone-Age stack.
 */
import ProjectPage from '../../components/builton/ProjectPage.vue';

const project = {
  name: 'Rule-Router',
  tagline: 'A NATS-native rule engine. Router, HTTP gateway, and cron scheduler in one binary, with one YAML syntax.',
  status: { label: 'Released', color: '#10b981' },
  github: 'https://github.com/skeeeon/rule-router',
  description: [
    'The automation layer of the Stone-Age stack: a stateless-per-message rule engine that evaluates events in microseconds. Rules are declarative YAML with a single trigger-condition-action shape, whether the trigger is a NATS subject, an inbound webhook, or a cron schedule.',
    'Durable state lives in NATS KV rather than in the engine, so rules can deduplicate alarms, track presence, and rate-limit actions while the engine itself stays horizontally scalable and trivially restartable.',
  ],
  features: [
    {
      icon: 'pi-share-alt',
      color: '#8b5cf6',
      title: 'Router',
      text: 'NATS-to-NATS rules with rich conditions, template substitution, KV lookups, and fan-out over lists, evaluated in microseconds.',
    },
    {
      icon: 'pi-globe',
      color: '#3b82f6',
      title: 'HTTP Gateway',
      text: 'Inbound webhooks (with HMAC verification) become NATS messages; outbound actions call HTTP APIs with retry and exponential backoff.',
    },
    {
      icon: 'pi-calendar',
      color: '#f59e0b',
      title: 'Scheduler',
      text: 'Cron-driven publishes with timezone support, including KV-driven fan-out: one schedule, an action per device on the list.',
    },
    {
      icon: 'pi-database',
      color: '#10b981',
      title: 'KV-Backed State',
      text: 'Alarm dedup, presence tracking, and rate limiting via NATS KV: durable, shared across instances, and inspectable with standard tools.',
    },
    {
      icon: 'pi-refresh',
      color: '#ec4899',
      title: 'GitOps Hot Reload',
      text: 'Load rules from files or a NATS KV rule store with atomic hot reload: push a rule change and running engines pick it up, no restart.',
    },
    {
      icon: 'pi-chart-bar',
      color: '#6366f1',
      title: 'Production Plumbing',
      text: 'Prometheus metrics, structured logging, graceful drain, Docker images, and versioned releases. Runs central or at the edge next to a leaf node.',
    },
  ],
  codeExample: {
    title: 'One Rule, Start to Finish',
    code: `- trigger:
    subject: sensors.*.temperature
  conditions:
    operator: and
    items:
      - field: "{value}"
        operator: gt
        value: "{@kv.sensor_config.{@subject.1}:max_temp}"
  action:
    subject: alerts.{@subject.1}.overtemp
    payload: |
      {
        "sensor": "{@subject.1}",
        "reading": {value},
        "at": "{@timestamp()}"
      }`,
  },
  stoneAge: {
    title: 'Role in the Stack',
    points: [
      'Layer 1 of the platform: reflexes. It reacts to events in real time so nothing upstream has to poll.',
      'Deploys next to a NATS leaf node at the edge, so alerts keep firing with zero cloud dependency.',
      'Consumes the same subjects, KV buckets, and JetStream streams the platform provisions.',
      'Predates the platform and stands alone: any NATS deployment can use it, with or without Stone-Age.',
    ],
  },
};
</script>
