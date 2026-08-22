/**
 * The four jobs the platform does, in the order a deployment meets them.
 *
 * This is the site's one taxonomy for the architecture. It drives three things
 * that used to disagree: the lens buttons on the system diagram, which parts of
 * that diagram light up, and which component cards are showing underneath it.
 * Adding a fifth job means adding a path to both diagram layouts, so think of
 * this list as the expensive one to grow.
 *
 * Colors are the existing site palette: control-plane blue, bus purple, rule
 * amber, analytics cyan. Captions carry the claims the highlight cannot, and
 * backticks in them render monospace.
 */
export const LENSES = [
  {
    id: 'provision',
    label: 'Provision',
    icon: 'pi-key',
    color: '#3b82f6',
    caption:
      'Create a Thing in the console and the inventory record is the identity: a NATS credential ' +
      "signed by that organization's own account, and a Nebula certificate from its own CA. The " +
      'device and the site pull those over HTTPS, so nothing has to reach into the site. The ' +
      'control plane writes only to the NATS system account, never to a tenant subject.',
  },
  {
    id: 'publish',
    label: 'Publish',
    icon: 'pi-send',
    color: '#8b5cf6',
    caption:
      'Things connect outbound to the leaf node at their site and publish on subjects like ' +
      '`telemetry.>`. Reported state lands in the `twin` KV bucket, and the console picks it up ' +
      'over a WebSocket rather than by polling a database. When the WAN drops, the leaf keeps ' +
      'serving the site and resyncs on its own. A site without one connects straight to the hub.',
  },
  {
    id: 'react',
    label: 'React',
    icon: 'pi-bolt',
    color: '#f59e0b',
    caption:
      'Rule-Router is another client on the bus. It subscribes to subjects, keeps counters and ' +
      'timers in KV to deduplicate alarms and rate-limit actions, and publishes decisions, ' +
      '`cmd.>` messages, and webhooks in both directions. A setpoint you edit in the console ' +
      'travels the same way, as a desired value the device reads for itself. Nothing sits in the ' +
      'middle of the path, so a rule you got wrong cannot take telemetry down with it.',
  },
  {
    id: 'extend',
    label: 'Extend',
    icon: 'pi-database',
    color: '#06b6d4',
    caption:
      'Any client with a credential can subscribe to the same subjects. Telegraf feeds the ' +
      'time-series database you already run, a stream processor handles the windows and joins that ' +
      'rules are bad at, and your own code is a peer of ours rather than a consumer of an API ' +
      'tier. There is no export button here because nothing needs exporting.',
  },
];

export const DEFAULT_CAPTION =
  'One bus, and everything on it is a client: devices, the console, Rule-Router, your own code. ' +
  'The control plane hands out identities and then stays out of the data path.';

/** Lens by id, for the pieces below the diagram to label themselves with. */
export const lensById = (id) => LENSES.find((lens) => lens.id === id);
