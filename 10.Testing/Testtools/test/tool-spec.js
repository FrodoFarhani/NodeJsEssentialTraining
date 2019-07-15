var expect = require('chai').expect;
var tools=require('../lib/tools');
var nock=require('nock');

describe("tools",function () {
    
    describe("printname()",function () {
        it("should firs print last name then first name",function () {
            var res= tools.printName({first:"Mohamad",last:"Farhani"});
            expect(res).to.equal("Farhani Mohamad");
          });
      });
      /**
       * for async tests like this that we need a page loaded, typicaly we pass a parameter  "done" in cb
       * function, till mocha knows should be wait for the res.
       * the test technically would finish when we call done();
       */
      describe("Load WIKI",function () {
        before(function () {
          
            /**
             * NOCK is mocking the wiki for us, we should say to it the request type (get) 
             * and we expect what response (reply)
             */
            nock("https://en.wikipedia.org")
                .get("/wiki/Abraham_Lincoln")
                .reply(200,"Ok!")
          });
        //this.timeout(5000);// increasing the mocha timeout.while using nock it is not needed!
        it("should open html page",function (done) {
            tools.loadWiki({first:"Abraham",last:"Lincoln"},function (html) {
                //expect(html).to.be.ok;// without nock, with requesting to real wiki
                expect(html).to.equal("Ok!");
                done();
              });
          });
      });

  });
