import { describe, expect, it } from "vitest";
import { can } from "./permissions";

describe("permissions", () => {
  it("lets the owner manage company settings", () => {
    expect(can("OWNER", "org.settings.update")).toBe(true);
  });

  it("blocks employees from invoices manage", () => {
    expect(can("EMPLOYEE", "invoices.manage")).toBe(false);
    expect(can("EMPLOYEE", "invoices.view")).toBe(true);
  });

  it("lets accountants manage invoices but not billing", () => {
    expect(can("ACCOUNTANT", "invoices.manage")).toBe(true);
    expect(can("ACCOUNTANT", "org.billing.manage")).toBe(false);
  });

  it("rejects unknown roles", () => {
    expect(can("ADMIN", "invoices.view")).toBe(false);
  });
});
