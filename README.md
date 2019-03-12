# Token Simulator

Modular, interface-agnostic simulator for designing token-based, multi-agent ecosystems. Pluggable components could include token standard, network protocol, blockchain, consensus, reputation, arbitration, governance and so on.

The token simulator framework describes a set of primitives that can be used by any implementation. These primitives should be immutable, observable data structures to enable myriad interfaces to be built on top as well as other features, such as full transaction replay.
- Agents
- Transactions
- Incentives (Fees)
- Objectives

A simulation is essentially these primitives mapped to a core state machine, where state is an append-only log of transactions (with derived or recorded balances), governed by a codified protocol. When run, the simulation will execute an automated (or, directed - eg. via a pre-defined script or recording of a previous simulation) sequence of transactions (or, "transitions") on the state machine.

Visualisations can simply be implemented as a representation of the simulation's state (eg. JSON or an interactive graph)

## Contributing

### Setup
```sh
yarn
```

### Build
```sh
yarn build
```

### Architecture
- `examples/` - example token simulations
- `packages/` - core token simulator plugins

## Examples
- [Boltzmann wealth model](examples/boltzmann/)
- Life <!-- TODO -->
- ERC20 x Boltzmann wealth model <!-- TODO -->
- ETH <!-- TODO -->
- KRD (using KORD protocol package) <!-- TODO -->

## TODO
- Formalise plugin API `f(tx) => tx`
- Add example `logger` and `history` plugins
