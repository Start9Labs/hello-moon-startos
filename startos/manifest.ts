import { setupManifest } from '@start9labs/start-sdk'

export const manifest = setupManifest({
  id: 'hello-moon',
  title: 'Hello Moon',
  license: 'mit',
  wrapperRepo: 'https://github.com/Start9Labs/hello-world-wrapper',
  upstreamRepo: 'https://github.com/Start9Labs/hello-world',
  supportSite: 'https://docs.start9.com/',
  marketingSite: 'https://start9.com/',
  docsUrl:
    'https://github.com/Start9Labs/hello-moon-startos/blob/master/instructions.md',
  donationUrl: 'https://donate.start9.com/',
  description: {
    short: 'Bare bones example of a StartOS service with dependencies',
    long: 'Hello Moon is a bare-bones service with dependencies that launches a web interface to say "Hello Moon", and nothing more.',
  },
  volumes: ['main'],
  images: {
    'hello-moon': {
      source: {
        dockerBuild: {
          dockerfile: 'Dockerfile',
          workdir: '.',
        },
      },
      arch: ['x86_64', 'aarch64'],
      emulateMissingAs: 'aarch64',
    },
  },
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
      optional: true,
      s9pk: 'https://github.com/Start9Labs/hello-world-startos/releases/download/v0.4.0/hello-world.s9pk',
    },
  },
})
