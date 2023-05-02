import { Value, topConfig } from 'start-sdk/lib/config/builder'
import { WrapperData } from '../../wrapperData'

/**
 * Here you define the config specification that will ultimately present to the user as validated form inputs
 *
 * Most form controls are available, including text, textarea, number, toggle, select, multiselect, list, color, datetime, object (a subform), and union (a conditional subform)
 *
 * Hello Moon does not have config. See Hello World for an example
 */
export const configSpec = topConfig<WrapperData>()({
  /** uncomment for Hello World conditional */
  // helloWorld: Value.toggle({
  //   name: 'Enable Hello World',
  //   description: 'Turn on to make Hello Moon depend on Hello World',
  //   default: false,
  // }),
})

// This line is necessary to satisfy Typescript typings. Do not touch it.
export type ConfigSpec = typeof configSpec.validator._TYPE
