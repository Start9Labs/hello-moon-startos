import { ConfigSpec } from './spec'
import { WrapperData } from '../../wrapperData'
import { Save } from 'start-sdk/lib/config/setupConfig'
import { Manifest } from '../../manifest'

/**
 * This function executes on config save
 *
 * Use it to persist config data to various files and to establish any resulting dependencies
 *
 * Hello Moon does not have config. See Hello World for an example
 */
export const save: Save<WrapperData, ConfigSpec, Manifest> = async ({
  effects,
  utils,
  input,
  dependencies,
}) => {
  /** uncomment to make Hello World a conditional dependency */
  // await utils.setOwnWrapperData('/config', input)
  const deps = input.helloWorld ? [dependencies.running('hello-world')] : []
  const dependenciesReceipt = await effects.setDependencies(deps)

  return {
    dependenciesReceipt,
    restart: true,
  }
}
