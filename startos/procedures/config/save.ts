import { sdk } from '../../sdk'
import { setInterfaces } from '../interfaces'

import { configSpec } from './spec'

/**
 * This function executes on config save
 *
 * Use it to persist config data to various files and to establish any resulting dependencies
 *
 * Hello Moon does not have config. See Hello World for an example
 */
export const save = sdk.setupConfigSave(
  configSpec,
  async ({ effects, utils, input, dependencies }) => {
    /** uncomment to make Hello World a conditional dependency */
    // await utils.store.setOwn('/needsWorld', input.needsWorld)
    // const deps = input.needsWorld
    //   ? [dependencies.running('hello-world', ['webui'])]
    //   : []
    // const dependenciesReceipt = await effects.setDependencies({
    //   dependencies: deps,
    // })

    const dependenciesReceipt = await effects.setDependencies({
      dependencies: [dependencies.running('hello-world', ['webui'])],
    })

    return {
      interfacesReceipt: await setInterfaces({ effects, utils, input }),
      dependenciesReceipt,
      restart: true,
    }
  },
)
