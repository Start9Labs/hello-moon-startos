import { sdk } from '../../sdk'

/**
 * ======================== Dependencies ========================
 *
 * Here we determine our package dependencies.
 *
 * This function runs on install, update, and config save.
 */
export const setDependencies = sdk.setupDependencies(
  async ({ effects, input }) => {
    return {
      'hello-world': sdk.Dependency.of({
        type: 'running',
        versionSpec: sdk.Checker.parse('>=4.0.0.0'),
        url: '',
        healthChecks: ['webui'],
      }),
    }
  },
)
