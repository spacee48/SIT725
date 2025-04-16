const chai = require("chai");
const chaiHttp = require("chai-http");
const app = require("../server");
const Card = require("../models/card");
const { connectTestDB, disconnectTestDB } = require("./test-db");

chai.use(chaiHttp);

const expect = chai.expect;

describe("GET /api/cards", () => {
    before(async () => {
        await connectTestDB();
        await Card.deleteMany({});
        await Card.insertMany([
        {
            title: "Galaxy Z Fold6",
            image: "images/fold6.png",
            link: "Learn more about Galaxy Z Fold6",
            description: "The latest Fold series."
        }
        ]);
    });

    after(async () => {
        await disconnectTestDB();
    });

    it("should return cards from the database", (done) => {
        chai.request(app)
        .get("/api/cards")
        .end((err, res) => {
            expect(res).to.have.status(200);
            expect(res.body).to.be.an("array");
            expect(res.body.length).to.equal(1);
            expect(res.body[0]).to.have.property("title", "Galaxy Z Fold6");
            done();
        });
    });

    it("should get a single card by ID", done => {
        const card = new Card({
            title: "Single Card",
            subTitle: "Sub",
            description: "Just one"
        });
      
        card.save().then(savedCard => {
            Card.findById(savedCard._id).then(found => {
                expect(found).to.not.be.null;
                expect(found.title).to.equal("Single Card");
                done();
            });
        });
    });
});
