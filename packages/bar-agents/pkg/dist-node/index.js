'use strict';

Object.defineProperty(exports, '__esModule', { value: true });

(function (AgentType) {
  AgentType["Byzantine"] = "byzantine";
  AgentType["Altruistic"] = "altruistic";
  AgentType["Rational"] = "rational";
})(exports.AgentType || (exports.AgentType = {}));
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


const Agent = ({
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

exports.Agent = Agent;
