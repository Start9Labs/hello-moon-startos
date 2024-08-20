import { sdk } from './sdk'
import { exposedStore } from './store'
import { setDependencies } from './dependencies/dependencies'
import { setInterfaces } from './interfaces'
import { migrations } from './versions'

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
 * Plumbing. DO NOT EDIT.
 */
export const { init, uninit } = sdk.setupInit(
  migrations,
  install,
  uninstall,
  setInterfaces,
  setDependencies,
  exposedStore,
)
