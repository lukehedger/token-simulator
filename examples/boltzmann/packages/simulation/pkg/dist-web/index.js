import produce from 'immer';

// TODO: Package core.protocol

const Protocol = {
  systemClock: 1000,
  totalSupply: 100,
  wealthThreshold: 1
}; // TODO: Package core.simulation

const Simulation = options => {
  return {
    agents: {},
    transactions: {},
    processTransaction: () => {},
    objective: () => {},
    options: options
  };
};

const Agent = (_ref) => {
  let id = _ref.id,
      balance = _ref.balance,
      type = _ref.type;
  return {
    id: id,
    balance: balance,
    type: type
  };
}; // Initialise the simulation


const init = function init() {
  let _ref2 = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {},
      _ref2$debug = _ref2.debug,
      debug = _ref2$debug === void 0 ? false : _ref2$debug,
      _ref2$totalAgents = _ref2.totalAgents,
      totalAgents = _ref2$totalAgents === void 0 ? 10 : _ref2$totalAgents;

  // Initialise `Simulation`
  const simulation = Simulation({
    debug: debug
  }); // Initialize `Agent`s

  for (let id = 0; id < totalAgents; id++) {
    simulation.agents[id] = Agent({
      id: id,
      balance: Protocol.totalSupply / totalAgents,
      type: "altruistic"
    });
  } // Implement `Simulation.processTransaction` function


  simulation.processTransaction = (_ref3) => {
    let amount = _ref3.amount,
        from = _ref3.from,
        to = _ref3.to;
    simulation.agents = produce(simulation.agents, draftState => {
      draftState[from].balance = simulation.agents[from].balance - amount;
      draftState[to].balance = simulation.agents[to].balance + amount;
    });
  }; // Implement `Simulation.objective` function


  simulation.objective = () => {
    Object.values(simulation.agents).filter(agent => agent.balance >= 1).map(agent => {
      const recipient = Object.values(simulation.agents).filter((_ref4) => {
        let id = _ref4.id;
        return id !== agent.id;
      })[Math.floor(Math.random() * (Object.keys(simulation.agents).length - 1 - 0) + 0)];
      const transaction = {
        amount: Protocol.wealthThreshold,
        from: agent.id,
        to: recipient.id
      };
      simulation.processTransaction(transaction);

      if (simulation.options.debug) {
        simulation.logTransaction(transaction);
      }
    });

    if (simulation.options.debug) {
      simulation.logAgents();
    }
  }; // TODO: Package simulation-logger.agents


  simulation.logAgents = () => {
    console.table(Object.values(simulation.agents));
  }; // TODO: Package simulation-logger.transactions


  simulation.logTransaction = transaction => {
    console.table([transaction]);
  }; // Implement `Simulation.run` function, usually a loop of objective function


  simulation.run = () => {
    setInterval(() => {
      simulation.objective();
    }, Protocol.systemClock);
  };

  return simulation;
};

export { init };
