import { ConfigSpec } from './spec'
import { WrapperData } from '../../wrapperData'
import { Save } from 'start-sdk/lib/config/setupConfig'
import { dependencies } from 'start-sdk/lib/config'

/**
 * This function executes on config save
 * 
 * Use it to persist config data to various files and to establish any resulting dependencies
 * 
 * Hello Moon does not have config. See Hello World for an example
 */
export const save: Save<WrapperData, ConfigSpec> = async ({
  effects,
  utils,
  input,
}) => {
  /** uncomment for Hello World conditional */
  // await utils.setWrapperData('/config', input)
  // if (input.helloWorld) return effects.setDependencies([dependencies.running('hello-world')])
  return effects.setDependencies([])
}
