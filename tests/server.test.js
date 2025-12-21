require("dotenv").config();
const request = require("supertest");
const {app} = require("../src/server");
const { default: mongoose } = require("mongoose");

/*
app.get("/", (request, response) => {
	
	console.log("Homepage of API requested!");
	// response.send("Hello, world!");
	response.json({
		message:"Hello, world!"
	});
});
*/

beforeEach(async() => {
	await mongoose.connect(process.env.DATABASE_URL);
});

afterEach(async () => {
	await mongoose.disconnect();
})

test('should get a hello world message from the homepage', async () => { 
	
	let response = await request(app).get("/");
	// test would happen here
	
	// check that response body contains "Hello, world!"
	// check that response.body.message equals "Hello, world!"

	expect(response.body.message).toBe("Hello, world!");
	expect(response.text).toBe("{\"message\":\"Hello, world!\"}");

});

// describe('API homepage route tests', () => { 
	

// })