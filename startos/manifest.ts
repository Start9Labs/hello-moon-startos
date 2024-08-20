import { setupManifest } from '@start9labs/start-sdk'
import { versions } from './versions'

/**
 * Here we define static properties of the package to be displayed in the Marketplace and used by StartOS.
 */
export const manifest = setupManifest(versions, {
  id: 'hello-moon',
  title: 'Hello Moon',
  license: 'mit',
  wrapperRepo: 'https://github.com/Start9Labs/hello-world-wrapper',
  upstreamRepo: 'https://github.com/Start9Labs/hello-world',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  donationUrl: 'https://donate.start9.com/',
  description: {
    short: 'Bare bones example of a StartOS service with dependencies',
    long: 'Hello Moon is a bare-bones service with dependencies that launches a web interface to say "Hello Moon", and nothing more.',
  },
  assets: [], // directories of static files you want to mount to your container
  volumes: ['main'], // IDs of persistence volumes that will be mounted to your container
  images: {
    main: {
      source: {
        dockerBuild: {
          dockerfile: '../Dockerfile',
          workdir: '.',
        },
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
  }, // IDs of images, used when other actions need to run in this image
  hardwareRequirements: {},
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
      optional: false,
      s9pk: '',
    },
  },
})
