export let AgentType;

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
export const Agent = ({
  id,
  balance,
  type
}) => {
  return {
    id: id,
    balance: balance,
    type: type
  };
};