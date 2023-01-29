const Manager = require('./../lib/Manager');

describe('Manager', () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, officeNumber and role if provided valid arguments", () => {
      const manager = new Manager("Luca", 321125, "Luca@gmail.com",32,"Manager");
      expect(manager.getName()).toEqual("Luca");
      expect(manager.getId()).toEqual(321125);
      expect(manager.getEmail()).toEqual("Luca@gmail.com");
      expect(manager.getOfficeNumber()).toEqual(32);
      expect(manager.getRole()).toEqual("Manager");
    });

    it("should throw an error if provided no arguments", () => {
        const cb = () => new Manager();
        expect(cb).toThrow();
    });
  
    it("should throw an error if 'officeNumber' is not a number", () => {
      const cb = () => new Manager("Luca", 321123,"Luca@gmail.com","32");
      const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");

      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'officeNumber' is less than 0", () => {
      const cb = () => new Manager("Luca",321123,"Luca@gmail.com",-32);
      const err = new Error("Expected parameter 'officeNumber' to be a non-negative number");
      expect(cb).toThrowError(err);
    });
  });
});