import { sdk } from '../sdk'
import { setInterfaces } from './interfaces'
import { migrations } from './migrations'

/**
 * Here you define arbitrary code that runs *once*, on fresh install only
 */
const install = sdk.setupInstall(async ({ effects, utils }) => {})

/**
 * Here you define arbitrary code that runs once, on uninstall only
 */
const uninstall = sdk.setupUninstall(async ({ effects, utils }) => {})

/**
 * Here you determine which values from your store, if any, should be exposed to the user or to dependent services
 */
const exportedValues = sdk.setupExports(({ effects, utils }) => {
  return {
    // Values exported to the UI will be displayed (masked) in the user's "Vault". It is designed for credentials
    ui: {},
    services: { paths: [] },
  }
})

/**
 * This is a static function. There is no need to make changes here
 */
export const { init, uninit } = sdk.setupInit(
  migrations,
  install,
  uninstall,
  setInterfaces,
  exportedValues,
)
