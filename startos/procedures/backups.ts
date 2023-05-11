import { sdk } from '../sdk'
import { Backups } from '@start9labs/start-sdk/lib/backup/Backups'

/**
 * Here we define what volumes from the Manifest to include in backups
 */
export const { createBackup, restoreBackup } = sdk.setupBackups(
  Backups.volumes('main'),
)
