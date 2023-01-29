const Engineer = require('./../lib/Engineer');

describe('Engineer', () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, github and role if provided valid arguments", () => {
      const newEngineer = new Engineer("Ben", 321124, "Ben@gmail.com","Ben2git","Engineer");
      expect(newEngineer.getName()).toEqual("Ben");
      expect(newEngineer.getId()).toEqual(321124);
      expect(newEngineer.getEmail()).toEqual("Ben@gmail.com");
      expect(newEngineer.getGithub()).toEqual("Ben2git");
      expect(newEngineer.getRole()).toEqual("Engineer");
    });

    it("should throw an error if provided no arguments", () => {
      const cb = () => new Engineer();
      expect(cb).toThrow();
    });

    it("should throw an error if not provided an github", () => {
      const cb = () => new Engineer("Ben", 321124, "Ben@gmail.com",null);
      const err = new Error("Expected parameter 'github' to be a non-empty string");
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'github' is not a string", () => {
      const cb = () => new Engineer("Ben", 321124, "Ben@gmail.com",333);
      const err = new Error("Expected parameter 'github' to be a non-empty string");
      expect(cb).toThrowError(err);
    });
  });
});