/*
Benjamin Wright
CIT 281 Project 4
*/
const { getQuestions,
    getAnswers,
    getQuestionsAnswers,
    getQuestion,
    getAnswer,
    getQuestionAnswer
}=require("./p4-module.js")

const fastify = require("fastify")();

fastify.get("/cit/question", (request, reply) => {
    let theQs = console.log(getQuestions())
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(theQs);
  });


  fastify.get("/cit/answer", (request, reply) => {
    let theAs = console.log(getAnswers())
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(theAs);
  });

  fastify.get("/cit/questionanswer", (request, reply) => {
    let theQAs = console.log(getquestionsAnswers())
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(theQAs);
  });

  fastify.get("/cit/question/:number", (request, reply) => {
    let theQ = console.log(getQuestion())
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(theQ);
  });
  fastify.get("/cit/answer/:number", (request, reply) => {
    let theA = console.log(getAnswer())
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(theA);
  });
  fastify.get("/cit/questionanswer/:number", (request, reply) => {
    let theQA = console.log(getQuestionAnswer())
    reply
      .code(200)
      .header("Content-Type", "application/json; charset=utf-8")
      .send(theQA);
  });

  fastify.get("*", (request, reply) => {
    reply
      .code(404)
      .header("Content-Type", "text/html; charset=utf-8")
      .send(`<h1>Route not found</h1>`);
  });
  const listenIP = "localhost";
const listenPort = 8080;
fastify.listen(listenPort, listenIP, (err, address) => {
  if (err) {
    console.log(err);
    process.exit(1);
  }
  console.log(`Server listening on ${address}`);
});
