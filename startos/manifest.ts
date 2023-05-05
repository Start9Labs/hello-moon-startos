import { setupManifest } from '@start9labs/start-sdk/lib/manifest/setupManifest'
import { actionsMetadata } from './procedures/actions'

/**
 * In this function you define static properties of the service
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
  assets: {
    license: 'LICENSE',
    icon: 'assets/icon.png',
    instructions: 'assets/instructions.md',
  },
  volumes: {
    // This is the image where files from the project asset directory will go
    main: 'data',
    mnt: 'assets',
  },
  containers: {
    main: {
      // Identifier for the main image volume, which will be used when other actions need to mount to this volume.
      image: 'main',
      // Specifies where to mount the data volume(s), if there are any. Mounts for pointer dependency volumes are also denoted here. These are necessary if data needs to be read from / written to these volumes.
      mounts: {
        // Specifies where on the service's file system its persistence directory should be mounted prior to service startup
        main: '/data',
        mnt: '/mnt',
      },
    },
  },
  actions: actionsMetadata,
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
      // requirement: { type: 'opt-in', how: 'Enable in config' }
    },
  },
})

export type Manifest = typeof manifest
