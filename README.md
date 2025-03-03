# Hello Moon for StartOS

A bare bones project serving as a template for [StartOS Service Packaging](https://docs.star9.com/packaging-guide).

Follow the [Quick Start Guide](https://docs.star9.com/packaging-guide/quick-start/) for StartOS service packaging, replacing references to `hello-moon-startos` with this service ID.

## Dependencies
- [docker](https://docs.docker.com/get-docker)
- [docker-buildx](https://docs.docker.com/buildx/working-with-buildx/)
- [make](https://www.gnu.org/software/make/)
- [start-cli](https://github.com/Start9Labs/start-os/)

## Build enviroment
Prepare your build environment. In this example we are using Ubuntu 20.04.

1. Install docker
    ```
    curl -fsSL https://get.docker.com -o- | bash
    sudo usermod -aG docker "$USER"
    exec sudo su -l $USER
    ```
1. Set buildx as the default builder
    ```
    docker buildx install
    docker buildx create --use
    ```
1. Enable cross-arch emulated builds in docker
    ```
    docker run --privileged --rm linuxkit/binfmt:v0.8
    ```
1. Install essential build packages:
    ```
    sudo apt-get install -y build-essential openssl libssl-dev libc6-dev clang libclang-dev ca-certificates
    ```
1. Install Rust
    ```
    curl https://sh.rustup.rs -sSf | sh
    # Choose nr 1 (default install)
    source $HOME/.cargo/env
    ```
1. Build and install start-cli
    ```
    cd ~/ && git clone --recursive https://github.com/Start9Labs/start-os.git
    make cli
    start-cli init
    ```

## Cloning
Clone the project locally. 

```
git clone https://github.com/Start9Labs/robosats-startos.git
cd robosats-wrapper
```

## Building
To build the package, run one of the following commands:

```
# for multi platform
make
```
```
# for amd64
make x86
```
```
# for arm64
make arm
```

## Installing on StartOS

### CLI

> Change *adjective-noun.local* to your Start9 server address

```
start-cli auth login
# Enter your Start9 server master password
start-cli --host https://adjective-noun.local package install robosats.s9pk
```

### UI

Select the Sideload Utility from the StartOS UI header and drag-n-drop the s9pk file to upload and install.

### Verify

Go to your StartOS Services page and select this service to view it's dashboard.