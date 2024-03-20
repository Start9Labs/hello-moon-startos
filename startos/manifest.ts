import { setupManifest } from '@start9labs/start-sdk'

/**
 * Here we define static properties of the package to be displayed in the Marketplace and used by StartOS.
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
  assets: [], // directories of static files you want to mount to your container
  volumes: ['main'], // IDs of persistence volumes that will be mounted to your container
  images: ['main'], // IDs of images, used when other actions need to run in this image
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
      description: 'A moon needs a world',
      optional: false, // change to true to make Hello World a conditional dependency
    },
  },
})

export type Manifest = typeof manifest
