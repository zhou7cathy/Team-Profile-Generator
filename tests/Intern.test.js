const Intern = require('./../lib/Intern');

describe('Intern', () => {
  describe("Initialization", () => {
    it("should create an object with a name, id, email, school and role if provided valid arguments", () => {
      const newIntern = new Intern("Jack", 321125, "Jack@gmail.com","Curtin University","Intern");
      expect(newIntern.getName()).toEqual("Jack");
      expect(newIntern.getId()).toEqual(321125);
      expect(newIntern.getEmail()).toEqual("Jack@gmail.com");
      expect(newIntern.getSchool()).toEqual("Curtin University");
      expect(newIntern.getRole()).toEqual("Intern");
    });

    it("should throw an error if provided no arguments", () => {
        const cb = () => new Intern();
        expect(cb).toThrow();
    });

    it("should throw an error if not provided an school", () => {
      const cb = () => new Intern("Jack", 321125, "Jack@gmail.com");
      const err = new Error("Expected parameter 'school' to be a non-empty string");
      expect(cb).toThrowError(err);
    });

    it("should throw an error if 'school' is not a string", () => {
      const cb = () => new Intern("Jack", 321125, "Jack@gmail.com",3);
      const err = new Error("Expected parameter 'school' to be a non-empty string");
      expect(cb).toThrowError(err);
    }); 
  });
});