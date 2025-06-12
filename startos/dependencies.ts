import { sdk } from './sdk'
import { setName } from 'hello-world-startos/startos/actions/setName'

export const setDependencies = sdk.setupDependencies(async ({ effects }) => {
  await sdk.action.createTask(effects, 'hello-world', setName, 'important', {
    input: {
      kind: 'partial',
      value: {
        name: 'Satoshi',
      },
    },
    when: { condition: 'input-not-matches', once: false },
    reason: 'Hello Moon prefers the name Satoshi',
  })

  return {
    'hello-world': {
      kind: 'running',
      versionRange: '>=0.4.0',
      /**
       * In this case, Hello World's "primary" daemon is also a health check with ID "primary"
       * WARNING, this array is NOT type safe. Make sure the ID actually exists in the dependency
       */
      healthChecks: ['primary'],
    },
  }
})
