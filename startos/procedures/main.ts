import { HealthReceipt } from '@start9labs/start-sdk/cjs/sdk/lib/health/HealthReceipt'
import { sdk } from '../sdk'
import { uiPort } from './interfaces'
import { manifest as helloWorldManifest } from 'hello-world-startos/startos/manifest'

export const main = sdk.setupMain(async ({ effects, started }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('Starting Hello Moon!')

  // const result = await checkAllDependencies()
  // result.throwIfError()

  /**
   * ======================== Additional Health Checks (optional) ========================
   *
   * In this section, we define *additional* health checks beyond those included with each daemon (below).
   */
  const healthReceipts: HealthReceipt[] = []

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of({
    effects,
    started,
    healthReceipts,
  }).addDaemon('webui', {
    imageId: 'main', // Must match an Image ID declared in the manifest.
    command: ['./hello-moon'], // The command to start the daemon.
    mounts: sdk.Mounts.of()
      .addVolume('main', null, '/data', false)
      .addDependency<
        typeof helloWorldManifest
      >('hello-world', 'main', null, '/hello-world', true),
    ready: {
      display: 'Web Interface', // If null, the health check will NOT be displayed to the user. If provided, this string will be the name of the health check and displayed to the user.
      // The function below determines the health status of the daemon.
      fn: () =>
        sdk.healthCheck.checkPortListening(effects, uiPort, {
          successMessage: 'The web interface is ready',
          errorMessage: 'The web interface is unreachable',
        }),
    },
    requires: [], // If this daemon depends on the successful initialization of one or more prior daemons, enter their IDs here.
  })
})
