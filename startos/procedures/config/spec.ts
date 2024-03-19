import { sdk } from '../../sdk'
const { Config, Value } = sdk

/**
 * Here we define the config spec that will ultimately present to the user as validated form inputs.
 *
 * Most form controls are available, including text, textarea, number, toggle, select, multiselect, list, color, datetime, object ("sub form"), and union (conditional "sub forms").
 */
export const configSpec = Config.of({
  /** uncomment to make Hello World a conditional dependency */
  // needsWorld: Value.toggle({
  //   name: 'Enable Hello World',
  //   description: 'Turn on to make Hello World a dependency of Hello Moon',
  //   default: false,
  // }),
})
