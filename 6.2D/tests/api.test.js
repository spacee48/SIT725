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

});