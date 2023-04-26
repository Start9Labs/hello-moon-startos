import { setupAutoConfig } from 'start-sdk/lib/autoconfig'
import { ConfigSpec } from './config/spec'
import { WrapperData } from '../wrapperData'
import { ConfigSpec as HelloWorldSpec } from 'hello-world-wrapper/startos/procedures/config/spec'
import { Manifest } from '../manifest'

/**
 * In this function, you establish rules for auto configuring service dependencies
 */
export const autoConfig = setupAutoConfig<
  WrapperData,
  ConfigSpec,
  Manifest,
  { 'hello-world': HelloWorldSpec }
>({
  'hello-world': async ({ effects, utils, localConfig, remoteConfig }) => {
    return {
      name: 'Satoshi',
    }
  },
})
