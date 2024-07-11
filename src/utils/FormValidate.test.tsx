import {
  validateName,
  validateEmail,
  validatePhone,
  validateRequired,
} from "./FormValidate.utils";

describe("Validation Utilities", () => {
  describe("validateName", () => {
    it("should return error message if name is empty", () => {
      expect(validateName("")).toBe("Name is required.");
    });
  });

  describe("validateEmail", () => {
    it("should return error message if email is empty", () => {
      expect(validateEmail("")).toBe("Email is required.");
    });
    it("should return error message if email format is invalid", () => {
      expect(validateEmail("invalid")).toBe("Invalid email format.");
    });
  });

  describe("validatePhone", () => {
    it("should return error message if phone number is empty", () => {
      expect(validatePhone("")).toBe("Phone number is required.");
    });
    it("should return error message if phone format is invalid", () => {
      expect(validatePhone("abc")).toBe(
        "Invalid phone number. Only digits are allowed."
      );
    });
  });

  describe("validateRequired", () => {
    it("should return error message if value is empty", () => {
      expect(validateRequired("")).toBe("vlaue is required.");
    });
  });
});
