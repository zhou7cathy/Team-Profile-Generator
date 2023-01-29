const Employee = require('./../lib/Employee');

describe('Employee', () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email and role if provided valid arguments", () => {
      const employee = new Employee("Sarah", 321123, "sarah@gmail.com","Employee");
      expect(employee.getName()).toEqual("Sarah");
      expect(employee.getId()).toEqual(321123);
      expect(employee.getEmail()).toEqual("sarah@gmail.com");
      expect(employee.getRole()).toEqual("Employee");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Employee();
      expect(cb).toThrow();
    });

    it("should throw an error if not provided a name", () => {
      const cb = () => new Employee(null,321123,"sarah@gmail.com");
      const err = new Error("Expected parameter 'name' to be a non-empty string");
      expect(cb).toThrowError(err);
    });
  
    it("should throw an error if not provided an id", () => {
      const cb = () => new Employee("Sarah",null,"sarah@gmail.com");
      const err = new Error("Expected parameter 'id' to be a non-negative number");
      expect(cb).toThrowError(err);
    });

    it("should throw an error if not provided an email", () => {
      const cb = () => new Employee("Sarah",321123);
      const err = new Error("Expected parameter 'email' to be a valid email");
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'name' is not a string", () => {
      const cb = () => new Employee(3, 321123,"sarah@gmail.com");
      const err = new Error("Expected parameter 'name' to be a non-empty string");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is not a number", () => {
      const cb = () => new Employee("Sarah", "321123","sarah@gmail.com");
      const err = new Error("Expected parameter 'id' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'id' is less than 0", () => {
      const cb = () => new Employee("Sarah", -321123,"sarah@gmail.com");
      const err = new Error("Expected parameter 'id' to be a non-negative number");
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'email' is not a valid email", () => {
      const cb = () => new Employee("Sarah", 321123,"sarahgmail.com");
      const err = new Error("Expected parameter 'email' to be a valid email");
      expect(cb).toThrowError(err);
    });
  });
});