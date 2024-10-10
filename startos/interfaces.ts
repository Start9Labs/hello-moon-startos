import { sdk } from './sdk'

export const setInterfaces = sdk.setupInterfaces(async ({ effects }) => {
  const uiMulti = sdk.host.multi(effects, 'multi')
  const uiMultiOrigin = await uiMulti.bindPort(8080, { protocol: 'http' })
  const ui = sdk.createInterface(effects, {
    name: 'Web UI',
    id: 'webui',
    description: 'The web interface of Hello Moon',
    hasPrimary: false,
    type: 'ui',
    schemeOverride: null,
    masked: false,
    username: null,
    path: '',
    search: {},
  })

  const multiReceipt = await uiMultiOrigin.export([ui])

  return [multiReceipt]
})
