# Boltzmann Wealth Model

A simple model of agents exchanging wealth.

- All agents start with the same amount of money
- Every step, each agent with one unit of money or more gives one unit of wealth to another random agent
- Wealth distribution starts perfectly uniform and moves to highly disproportionate

## Run simulation
```sh
git clone git@github.com:lukehedger/token-simulator.git
cd token-simulator/
yarn
yarn build

cd examples/boltzmann/
yarn
yarn build

cd cli/
yarn start
```
