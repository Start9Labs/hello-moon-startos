import { sdk } from '../../sdk'
import { setInterfaces } from '../interfaces'
import { configSpec } from './spec'

/**
 * This function executes on config save.
 *
 * Use it to persist config data to various files and to establish any resulting dependencies.
 */
export const save = sdk.setupConfigSave(
  configSpec,
  async ({ effects, input, dependencies }) => {
    /** uncomment to make Hello World a conditional dependency */
    // await utils.store.setOwn('/needsWorld', input.needsWorld)
    // const deps = input.needsWorld
    //   ? [dependencies.running('hello-world', ['webui'])]
    //   : []
    // const dependenciesReceipt = await effects.setDependencies({
    //   dependencies: deps,
    // })

    /**
     ******** set current dependencies based on config ********
     */
    const dependenciesReceipt = await effects.setDependencies({
      dependencies: [dependencies.running('hello-world', ['webui'])],
    })

    return {
      interfacesReceipt: await setInterfaces({ effects, input }), // Plumbing. DO NOT EDIT. This line causes setInterfaces() to run whenever config is saved.
      dependenciesReceipt, // Plumbing. DO NOT EDIT.
      restart: true, // optionally restart the service on config save.
    }
  },
)
