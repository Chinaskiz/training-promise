describe("Promises", () => {

    it("should go to success callback", () => {
        let doSomething = jasmine.createSpy();

        doSomething.and.resolveTo(true);

        doSomething().then((result) => {
            expect(result).toBeTrue();
        });
    });
});