import { sdk } from '../../sdk'
import { configSpec } from './spec'

/**
 * This function executes on config get
 *
 * Use this function to gather data from various files and assemble into a valid config to display to the user
 *
 * Hello Moon does not have config. See Hello World for an example
 */

export const read = sdk.setupConfigRead(
  configSpec,
  async ({ effects, utils }) => {
    /** uncomment to make Hello World a conditional dependency */
    // return utils.store.getOwn('/config').once()
  },
)
