let AgentType;

(function (AgentType) {
  AgentType["Byzantine"] = "byzantine";
  AgentType["Altruistic"] = "altruistic";
  AgentType["Rational"] = "rational";
})(AgentType || (AgentType = {}));
/**
 * Returns a BAR model agent
 *
 * @param id - Agent's ID
 * @param balance - Agent's token balance
 * @param type - Agent's BAR type
 * @returns Agent
 *
 * @beta
 */


const Agent = (_ref) => {
  let id = _ref.id,
      balance = _ref.balance,
      type = _ref.type;
  return {
    id: id,
    balance: balance,
    type: type
  };
};

export { AgentType, Agent };
