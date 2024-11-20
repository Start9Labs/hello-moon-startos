import { setupExposeStore } from '@start9labs/start-sdk'

export type Store = {
  pruned: boolean
}

export const exposedStore = setupExposeStore<Store>((pathBuilder) => [])
