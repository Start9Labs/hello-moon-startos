import { sdk } from './sdk'

/**
 * Here we determine which values from the local Store and underlying service to expose in the UI in Properties.
 *
 * See Hello World for an example.
 */
export const properties = sdk.setupProperties(async ({ effects }) => ({}))
