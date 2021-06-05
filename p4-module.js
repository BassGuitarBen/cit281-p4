/*
Benjamin Wright
CIT 281 Project 4
*/
const {data} = require("./p4-data.js")

function getQuestions(){
    return data.question;
    
    let theQs =""
for (let i = 0; i < data.length; i++) {
    theQs = theQs + "," + data.question
    console.log(theQs)
}
}

function getAnswers(){
    let theAs =""
for (let i = 0; i < data.length; i++) {
    theQs = theAs + "," + data.answer
    console.log(theAs)
}
}
function getQuestionsAnswers(){
    return data;
    const clonedData = [...data];
}
function getQuestion(number = ""){
    return data.indexOf(number - 1).question
}
function getAnswer(number = ""){
    return data.indexOf(number - 1).answer
}
function getQuestionAnswer(number = "") {
    return data.indexOf(number - 1)
}




/*****************************
  Module function testing
******************************/
function testing(category, ...args) {
    console.log(`\n** Testing ${category} **`);
    console.log("-------------------------------");
    for (const o of args) {
      console.log(`-> ${category}${o.d}:`);
      console.log(o.f);
    }
  }
  
  // Set a constant to true to test the appropriate function
  const testGetQs = false;
  const testGetAs = false;
  const testGetQsAs = false;
  const testGetQ = false;
  const testGetA = false;
  const testGetQA = false;
  const testAdd = false;      // Extra credit
  const testUpdate = false;   // Extra credit
  const testDelete = false;   // Extra credit

  // getQuestions()
if (testGetQs) {
    testing("getQuestions", { d: "()", f: getQuestions() });
  }
  
  // getAnswers()
  if (testGetAs) {
    testing("getAnswers", { d: "()", f: getAnswers() });
  }
  
  // getQuestionsAnswers()
  if (testGetQsAs) {
    testing("getQuestionsAnswers", { d: "()", f: getQuestionsAnswers() });
  }
  
  // getQuestion()
  if (testGetQ) {
    testing(
      "getQuestion",
      { d: "()", f: getQuestion() },      // Extra credit: +1
      { d: "(0)", f: getQuestion(0) },    // Extra credit: +1
      { d: "(1)", f: getQuestion(1) },
      { d: "(4)", f: getQuestion(4) }     // Extra credit: +1
    );
  }
  
  // getAnswer()
  if (testGetA) {
    testing(
      "getAnswer",
      { d: "()", f: getAnswer() },        // Extra credit: +1
      { d: "(0)", f: getAnswer(0) },      // Extra credit: +1
      { d: "(1)", f: getAnswer(1) },
      { d: "(4)", f: getAnswer(4) }       // Extra credit: +1
    );
  }
  
  // getQuestionAnswer()
  if (testGetQA) {
    testing(
      "getQuestionAnswer",
      { d: "()", f: getQuestionAnswer() },    // Extra credit: +1
      { d: "(0)", f: getQuestionAnswer(0) },  // Extra credit: +1
      { d: "(1)", f: getQuestionAnswer(1) },
      { d: "(4)", f: getQuestionAnswer(4) }   // Extra credit: +1
    );
  }


  module.exports = {
    getQuestions();,
    getAnswers();,
    getQuestionsAnswers();,
    getQuestion();,
    getAnswer();,
    getQuestionAnswer();,

  };