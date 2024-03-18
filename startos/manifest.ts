import { setupManifest } from '@start9labs/start-sdk'

/**
 * In this function you define static properties of the service to be displayed in the Marketplace and used by StartOS
 */
export const manifest = setupManifest({
  id: 'hello-moon',
  title: 'Hello Moon',
  version: '4.0.0',
  releaseNotes: 'Initial release for StartOS 0.4.0',
  license: 'mit',
  replaces: Array<string>(),
  wrapperRepo: 'https://github.com/Start9Labs/hello-world-wrapper',
  upstreamRepo: 'https://github.com/Start9Labs/hello-world',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  donationUrl: 'https://donate.start9.com/',
  description: {
    short: 'Example service for s9pk highlighting basic features',
    long: 'Hello World is a bare-bones service that launches a web interface to say "Hello World", and nothing more.',
  },
  // Relative paths to asset files
  assets: [],
  volumes: ['main'],
  images: ['main'],
  alerts: {
    install: null,
    update: null,
    uninstall: null,
    restore: null,
    start: null,
    stop: null,
  },
  dependencies: {
    'hello-world': {
      version: '>=4.0.0.0',
      description: 'A moon needs a world',
      requirement: { type: 'required' },
      /** uncomment to make Hello World a conditional dependency */
      // requirement: { type: 'opt-in', how: 'Enable in config' },
    },
  },
})

export type Manifest = typeof manifest
