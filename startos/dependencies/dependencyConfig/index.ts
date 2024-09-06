import { sdk } from '../../sdk'
import { configSpec } from '../../config/spec'
import { helloWorldConfig } from './hello-world'

export const dependencyConfig = sdk.setupDependencyConfig(configSpec, {
  'hello-world': helloWorldConfig,
})
