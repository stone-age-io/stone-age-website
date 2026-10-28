<template>
  <ProjectPage :project="project" />
</template>

<script setup>
/**
 * stone CLI project page — component of the Stone-Age stack.
 *
 * Claims follow the stone-cli README. Two it is careful about, and so is this
 * page: `apply` is an additive upsert, not a reconciler (it never deletes and
 * does not detect drift), and `pull` leaves credentials out of the workspace.
 * The example uses the platform's `twin` bucket; the README's `twins` is an
 * older example name.
 */
import ProjectPage from '../../components/builton/ProjectPage.vue';

const project = {
  kind: 'Component',
  name: 'stone CLI',
  tagline: 'The platform from a terminal: tenant resources, NATS, and KV in one binary, with your configuration as a folder of YAML you keep in git.',
  github: 'https://github.com/stone-age-io/stone-cli',
  description: [
    'stone is the command-line client for a Stone-Age control plane. It manages things, locations, thing types, and the rest of a tenant\'s records with typed flags, and it publishes, subscribes, and reads KV on the same bus the devices use. Prebuilt for Linux, macOS, and Windows on amd64 and arm64.',
    'Its pull and apply commands turn a tenant into a directory with one YAML file per record. Review a change with git diff, then apply it. Apply creates and updates but never deletes, so a re-run is safe and a mistake stays recoverable.',
  ],
  // Recorded against the hosted demo (Northwind Traders) with read-only
  // commands; every line of output is real. The live subscription is replayed
  // faster than its five-second publish rate, home paths are shortened to ~,
  // and the pull summary is trimmed. Re-record it rather than editing frames.
  demo: {
    src: '/images/builton/stone-cli.gif',
    alt: 'Terminal recording: stone switches to the Northwind organization, lists things, streams live freezer telemetry over NATS, reads a twin value from KV, and pulls the tenant to a folder of YAML.',
    width: 1000,
    height: 560,
    caption: 'Recorded against the hosted demo. The output is real; the telemetry stream is sped up and the pull summary is trimmed.',
  },
  features: [
    {
      icon: 'pi-folder',
      color: '#3b82f6',
      title: 'Config as files',
      text: 'stone pull writes every record as YAML named by its code. Edit, commit, and stone apply writes it back in batched transactions.',
    },
    {
      icon: 'pi-lock',
      color: '#f59e0b',
      title: 'No secrets on disk',
      text: 'Pull leaves credentials, private keys, and invite tokens out of the workspace and tells you what it skipped, so the folder is safe to commit.',
    },
    {
      icon: 'pi-bolt',
      color: '#10b981',
      title: 'One-step device provisioning',
      text: 'stone thing provision creates a thing, its NATS identity, and its Nebula host in one server-side transaction, so a failed step leaves nothing half-made.',
    },
    {
      icon: 'pi-share-alt',
      color: '#8b5cf6',
      title: 'NATS and KV built in',
      text: 'Publish, subscribe, and read or watch KV buckets. Switching organization also writes a matching nats CLI context with that org\'s credentials.',
    },
    {
      icon: 'pi-key',
      color: '#ef4444',
      title: 'Credential lifecycle',
      text: 'Rotate, revoke, suspend, and decommission are separate commands, because they do different things. Revoke issues a working replacement in the same step.',
    },
    {
      icon: 'pi-sparkles',
      color: '#14b8a6',
      title: 'Written for assistants too',
      text: 'Ships a skills reference describing its own commands, so an AI assistant with a read-only login can inspect inventory and state for you.',
    },
  ],
  codeExample: {
    title: 'A tenant in git',
    code: `stone org switch northwind             # also writes a nats context for the org
stone pull --workspace . --set-workspace
git diff                               # review the change like any other code
stone apply                            # creates and updates, never deletes

stone nats sub 'telemetry.>'
stone kv get twin thing.TP-001.temp`,
  },
  stoneAge: {
    title: 'Role in the stack',
    points: [
      'The client for the control plane: everything the console manages, from a laptop or a CI runner.',
      'Talks to the platform\'s REST API for records and straight to NATS for messages and KV.',
      'Makes site configuration reviewable: a change is a commit, and a rollout is the same apply twice.',
      'Complements the nats CLI rather than replacing it; stream and consumer management stay there.',
    ],
  },
};
</script>
