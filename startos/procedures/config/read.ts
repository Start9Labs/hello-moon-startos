import { sdk } from '../../sdk'
import { configSpec } from './spec'

/**
 * This function executes on config read.
 *
 * Use this function to gather data from various files and assemble into a valid config to display to the user.
 */
export const read = sdk.setupConfigRead(configSpec, async ({ effects }) => {
  /** uncomment to make Hello World a conditional dependency */
  // return {
  //   needsWorld: await utils.store.getOwn('/needsWorld').once(),
  // }
})
