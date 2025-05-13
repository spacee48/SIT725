const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const expect = chai.expect;

chai.use(chaiHttp);

describe("API Route Tests", () => {
    it("should return an array of cards on GET /api/cards", done => {
        chai.request(app)
            .get("/api/cards")
            .end((err, res) => {
                expect(res).to.have.status(200),
                expect(res.body).to.be.an("array");
                done();
            });
    });

    it("should fail when required fields are missing", (done) => {
        const incompleteUser = {
            first_name: "Incomplete"
        };

        chai.request(app)
            .post("/api/form")
            .send(incompleteUser)
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });

    it("should fail when email is an invalid type", (done) => {
        const invalidUser = {
            first_name: "John",
            last_name: "Doe",
            email: 12345  
        };

        chai.request(app)
            .post("/api/form")
            .send(invalidUser)
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });

    it("should fail when extra unexpected fields are included", (done) => {
        const extraFieldUser = {
            first_name: "Jane",
            last_name: "Doe",
            email: "jane@example.com",
            age: 25  
        };

        chai.request(app)
            .post("/api/form")
            .send(extraFieldUser)
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });

    it("should fail when email is missing", (done) => {
        const noEmailUser = {
            first_name: "Sam",
            last_name: "Smith"
        };

        chai.request(app)
            .post("/api/form")
            .send(noEmailUser)
            .end((err, res) => {
                expect(res).to.have.status(400);
                done();
            });
    });
});