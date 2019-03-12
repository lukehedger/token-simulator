export enum AgentType {
  Byzantine = "byzantine",
  Altruistic = "altruistic",
  Rational = "rational"
}

export interface IAgent {
  id: string,
  balance: number,
  type: AgentType
}

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
export const Agent = ({ id, balance, type }: {
  id: string,
  balance: number,
  type: AgentType
}): IAgent => {
  return {
    id: id,
    balance: balance,
    type: type
  };
};
