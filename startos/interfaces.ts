import { sdk } from './sdk'
import { configSpec } from './config/spec'

// It is good practice to abstract these two variables from each interface, as they may be used elsewhere in the package codebase or by dependent packages.
export const uiPort = 8080
export const webUiInterfaceId = 'webui'

/**
 * ======================== Service Interfaces ========================
 *
 * Here we decide how the service will be exposed to the outside world.
 *
 * This function runs on install, update, and config save.
 */
export const setInterfaces = sdk.setupInterfaces(
  configSpec,
  async ({ effects, input }) => {
    const uiMulti = sdk.host.multi(effects, 'multi')
    const uiMultiOrigin = await uiMulti.bindPort(uiPort, { protocol: 'http' })
    const ui = sdk.createInterface(effects, {
      name: 'Web UI',
      id: webUiInterfaceId,
      description: 'The web interface of Hello Moon',
      hasPrimary: false,
      disabled: false,
      type: 'ui',
      schemeOverride: null,
      masked: false,
      username: null,
      path: '',
      search: {},
    })

    const multiReceipt = await uiMultiOrigin.export([ui])

    return [multiReceipt]
  },
)
