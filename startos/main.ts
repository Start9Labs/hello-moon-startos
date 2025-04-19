import { sdk } from './sdk'
import { T } from '@start9labs/start-sdk'
import { manifest as helloWorldManifest } from 'hello-world-startos/startos/manifest'
import { uiPort } from './utils'

export const main = sdk.setupMain(async ({ effects, started }) => {
  /**
   * ======================== Setup (optional) ========================
   *
   * In this section, we fetch any resources or run any desired preliminary commands.
   */
  console.info('Starting Hello Moon!')

  const depResult = await sdk.checkDependencies(effects)
  depResult.throwIfNotSatisfied()

  /**
   * ======================== Additional Health Checks (optional) ========================
   *
   * In this section, we define *additional* health checks beyond those included with each daemon (below).
   */
  const additionalChecks: T.HealthCheck[] = []

  /**
   * ======================== Daemons ========================
   *
   * In this section, we create one or more daemons that define the service runtime.
   *
   * Each daemon defines its own health check, which can optionally be exposed to the user.
   */
  return sdk.Daemons.of(effects, started, additionalChecks).addDaemon(
    'primary',
    {
      subcontainer: await sdk.SubContainer.of(
        effects,
        { imageId: 'hello-moon' },
        sdk.Mounts.of()
          .addVolume('main', null, '/data', false)
          .addDependency<
            typeof helloWorldManifest
          >('hello-world', 'main', null, '/hello-world', true),
        'hello-moon-sub',
      ),
      command: ['hello-world'],
      ready: {
        display: 'Web Interface',
        fn: () =>
          sdk.healthCheck.checkPortListening(effects, uiPort, {
            successMessage: 'The web interface is ready',
            errorMessage: 'The web interface is unreachable',
          }),
      },
      requires: [],
    },
  )
})
