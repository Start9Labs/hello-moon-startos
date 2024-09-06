import { sdk } from '../sdk'
import { setInterfaces } from '../interfaces'
import { setDependencies } from '../dependencies/dependencies'
import { configSpec } from './spec'

export const save = sdk.setupConfigSave(
  configSpec,
  async ({ effects, input }) => {
    return {
      interfacesReceipt: await setInterfaces({ effects, input }), // Plumbing. DO NOT EDIT.
      dependenciesReceipt: await setDependencies({ effects, input }), // Plumbing. DO NOT EDIT.
      restart: true, // optionally restart the service on config save.
    }
  },
)
