const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const User = require("../models/user");
const { connectTestDB, disconnectTestDB } = require("./test-db");

chai.use(chaiHttp);

const expect = chai.expect;

describe("POST /api/form", () => {
    before(async () => {
        await connectTestDB();
        await User.deleteMany({});
    });

    after(async () => {
        await disconnectTestDB();
    });

    it("should save a user and return 200", (done) => {
        const testUser = {
        first_name: "Jane",
        last_name: "Doe",
        email: "test@example.com"
        };

        chai.request(app)
        .post("/api/form")
        .send(testUser)
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.text).to.equal("User data saved!");
            done();
        });
    });
});
