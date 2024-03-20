import { sdk } from '../sdk'
import { setDependencies } from './dependencies/dependencies'
import { setInterfaces } from './interfaces'
import { migrations } from './migrations'

/**
 * Here you define arbitrary code that runs *once*, on fresh install only.
 *
 * See Hello World for an example.
 */
const install = sdk.setupInstall(async ({ effects }) => {})

/**
 * Here we define arbitrary code that runs once, on uninstall only.
 */
const uninstall = sdk.setupUninstall(async ({ effects }) => {})

/**
 * Here we determine which values from the store, if any, should be exposed to the UI, or to dependent services, or both.
 *
 * See Hello World for an example.
 */
const exportedValues = sdk.setupExports(({ effects }) => {
  return {
    /** Values exported to the UI are displayed in "Properties" according to the structure defined here. */
    ui: {},
    services: [],
  }
})

/**
 * Plumbing. DO NOT EDIT.
 */
export const { init, uninit } = sdk.setupInit(
  migrations,
  install,
  uninstall,
  setInterfaces,
  setDependencies,
  exportedValues,
)
