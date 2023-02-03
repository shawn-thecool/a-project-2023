import { EmailVO } from "./Email.vo";

describe("EmailVO", () => {
  it("should validate an email correctly", () => {
    const validEmail = new EmailVO({ value: "test@email.com" });
    expect(validEmail.validate()).toBe(true);

    const invalidEmail = new EmailVO({ value: "invalidemail.com" });
    expect(invalidEmail.validate()).toBe(false);
  });
});
