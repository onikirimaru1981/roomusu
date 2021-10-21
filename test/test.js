	const Server = require("../src/server/server");
	const chai = require("chai");
	const chaiHttp = require("chai-http");
	const expect = require('chai').expect;

	// Assertion

	const server = Server.listen();
	const url = ('http://localhost:8080')

	chai.should();
	chai.use(chaiHttp);

	describe("Test roomusu API", () => {
		describe("Test GET route /api/homes", () => {
			it("Debe devolver resultado de homes con params por defecto page=1 & limit=1 & asc=1 ", (done) => {
				chai
					.request(url)
					.get("/api/homes")
					.end((err, res) => {
						expect(res).to.have.status(200);
						done();
					});
			});
		});

		describe("Test GET route /", () => {
			it("Debe devolver resultado de Homes con ruta raiz con params por defecto page=1 & limit=10 & asc=1 ", (done) => {
				chai
					.request(url)
					.get("/")
					.end((err, res) => {
						expect(res).to.have.status(200);
						done();
					});
			});
		});

		describe("Test GET route /api/homes? orderFor=Address & page=1 & limit=2 & asc=1", () => {
			it("Debe devolver resultado de Homes filtrado en orden ascendente con params orderFor=Address & page=1 & limit=2 & asc=1 ", (done) => {
				chai
					.request(url)
					.get("/api/homes?orderFor=Address&page=1&limit=2&asc=1")
					.end((err, res) => {
						expect(res).to.have.status(200);
						done();
					});
			});
		});

		describe("Test GET route /api/homes? orderFor=Address & page=1 & limit=2 & asc=-1", () => {
			it("Debe devolver resultado de Homes filtrado orden descendente con params orderFor=Address & page=1 & limit=2 & asc=-1 ", (done) => {
				chai
					.request(url)
					.get("/api/homes?orderFor=Address&page=1&limit=2&asc=1")
					.end((err, res) => {
						expect(res).to.have.status(200);
						done();
					});
			});
		});
		describe("Test GET route /api/homes? orderFor=Address ", () => {
			it("Debe devolver resultado de Homes filtrado con params por defecto page=1 & limit=2 & asc=1  ", (done) => {
				chai
					.request(url)
					.get("/api/homes?orderFor=Address")
					.end((err, res) => {
						expect(res).to.have.status(200);
						done();
					});
			});
		});

		/**
		 * Test the GET (by id) route
		 */
		// describe("GET /api/tasks/:id", () => {
		//     it("It should GET a task by ID", (done) => {
		//         const taskId = 1;
		//         chai.request(server)
		//             .get("/api/tasks/" + taskId)
		//             .end((err, response) => {
		//                 response.should.have.status(200);
		//                 response.body.should.be.a('object');
		//                 response.body.should.have.property('id');
		//                 response.body.should.have.property('name');
		//                 response.body.should.have.property('completed');
		//                 response.body.should.have.property('id').eq(1);
		//                 done();
		//             });
		//     });

		// it("It should NOT GET a task by ID", (done) => {
		//     const taskId = 123;
		//     chai.request(server)
		//         .get("/api/tasks/" + taskId)
		//         .end((err, response) => {
		//             response.should.have.status(404);
		//             response.text.should.be.eq("The task with the provided ID does not exist.");
		//             done();
		//         });
		// });
	});