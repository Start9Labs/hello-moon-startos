import { configBuilder } from 'start-sdk/lib'
import { Value } from 'start-sdk/lib/config/builder'
const { Config } = configBuilder

/**
 * Here you define the config specification that will ultimately present to the user as validated form inputs
 *
 * Most form controls are available, including text, textarea, number, toggle, select, multiselect, list, color, datetime, object (a subform), and union (a conditional subform)
 *
 * Hello Moon does not have config. See Hello World for an example
 */
export const configSpec = Config.of({
  /** uncomment for Hello World conditional */
  helloWorld: Value.toggle({
    name: 'Enable Hello World',
    description: 'Turn on to make Hello Moon depend on Hello World',
    default: false,
  }),
})
// These two lines are necessary to satisfy Typescript typings
export const matchConfigSpec = configSpec.validator()
export type ConfigSpec = typeof matchConfigSpec._TYPE
