var request=require('supertest');
var cheerio=require('cheerio');
var expect = require('chai').expect;
var rewire = require('rewire');
var app = rewire('../app');

describe("Dictionary App", function () {

    /**
     * with super test we can chain on expect to say it is end, and also because of async 
     * function we use done to tell mocha that has call back
     */
    it("Loads the home page",function (done) {
            request(app).get('/').expect(200).end(done);
      });

      it("another Loads the home page with cheerio",function (done) {
        request(app).get('/').expect(200).end(function (err,res) {
            /**
             * with cheerio u can get html dom and find element like JQUERY on it
             */
            var $ = cheerio.load(res.text);
            var pageHeading = $('body>h1:first-child').text();
            expect(pageHeading).to.equal('Skier Dictionary');
            done();
          });
        });

    describe("Dictionary API", function () {

        beforeEach(function () {

        	this.defs = [
                {
                    term: "One",
                    defined: "Term One Defined"
                },
                {
                    term: "Two",
                    defined: "Term Two Defined"
                }
            ];

            app.__set__("skierTerms", this.defs);
        });

        it("GETS dictionary-api",function (done) {
            var defs=this.defs
            /**
             * instead of done we can write a callback function in end. this function from supertest
             * woudl have err and full res.
             */
            request(app).get('/dictionary-api').expect(200).end(function (err,res) {
                    var terms=JSON.parse(res.text);
                    expect(terms).to.deep.equal(defs);// deep means exactly equal!
                    done();
              });
          });

        it("POSTS dictionary-api",function (done) {
            request(app)
                .post('/dictionary-api')
                .send({"term":"tree","defined":"defined defined"})
                .expect(200).end(done);
          });

        it("DELETES dictionary-api",function (done) {
            request(app)
                .delete('/dictionary-api/One')
                .expect(200).end(done);

    });
  });

});
