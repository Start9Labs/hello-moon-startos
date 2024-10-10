import { sdk } from './sdk'
import { VersionRange } from '@start9labs/start-sdk'
import { config as helloWorldConfig } from 'hello-world-startos/startos/actions/config'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  await sdk.action.request(
    effects,
    'hello-world',
    helloWorldConfig,
    'important',
    {
      input: {
        kind: 'partial',
        value: {
          name: 'Satoshi',
        },
      },
      when: { condition: 'input-not-matches', once: false },
      reason: 'Hello Moon prefers the name Satoshi',
    },
  )

  return {
    'hello-world': sdk.Dependency.of({
      type: 'running',
      versionRange: VersionRange.parse('>=1.0.0'),
      healthChecks: ['webui'],
    }),
  }
})
