export const ROLES = ["OWNER", "ACCOUNTANT", "EMPLOYEE"] as const;
export type Role = (typeof ROLES)[number];

export const ACTIONS = [
  "org.settings.update",
  "org.members.manage",
  "org.billing.manage",
  "invoices.manage",
  "invoices.view",
  "contacts.manage",
  "products.manage",
  "finance.view",
] as const;
export type Action = (typeof ACTIONS)[number];

const matrix: Record<Action, readonly Role[]> = {
  "org.settings.update": ["OWNER"],
  "org.members.manage": ["OWNER"],
  "org.billing.manage": ["OWNER"],
  "invoices.manage": ["OWNER", "ACCOUNTANT"],
  "invoices.view": ["OWNER", "ACCOUNTANT", "EMPLOYEE"],
  "contacts.manage": ["OWNER", "ACCOUNTANT"],
  "products.manage": ["OWNER", "ACCOUNTANT"],
  "finance.view": ["OWNER", "ACCOUNTANT"],
};

export function isRole(value: string): value is Role {
  return (ROLES as readonly string[]).includes(value);
}

export function can(role: string, action: Action): boolean {
  if (!isRole(role)) return false;
  return matrix[action].includes(role);
}
