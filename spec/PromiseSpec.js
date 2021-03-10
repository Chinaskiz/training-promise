describe("Promises", () => {

    it("should go to success callback", () => {
        let doSomething = jasmine.createSpy();

        doSomething.and.resolveTo(true);

        doSomething().then((result) => {
            expect(result).toBeTrue();
        });
    });

    it("should go to failing callback", () => {
        let doSomething = jasmine.createSpy();

        doSomething.and.rejectWith(new Error("error"));

        doSomething().catch((error) => {
            console.log("ok");
            expect(error).toBeDefined();
        })
    });
});