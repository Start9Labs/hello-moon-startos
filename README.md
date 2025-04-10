# Hello Moon for StartOS

A bare bones project serving as a template for [StartOS Service Packaging](https://docs.start9.com/packaging-guide).

## Container init sequence

1. init store (initial install only)
1. preInstall (initial install only)
1. setServiceInterfaces
1. actions.update
1. store.exposeForDependents
1. setDependencies
1. postInstall (initial install only)
1. migrate (update only)
