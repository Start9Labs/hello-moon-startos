import { sdk } from '../../sdk'
import { configSpec } from '../../config/spec'
import { configSpec as helloWorldSpec } from 'hello-world-startos/startos/config/spec'

export const helloWorldConfig = sdk.DependencyConfig.of({
  localConfigSpec: configSpec,
  remoteConfigSpec: helloWorldSpec,
  dependencyConfig: async ({ effects, localConfig }) => {
    return {
      name: 'Satoshi',
    }
  },
})
