import { useEffect, useMemo, useState } from "react";
import "./app.css";
import Timer from "./components/Timer";
import Trivia from "./components/Trivia";
import Start from "./components/Start";


function App() {
  const [userName, setUserName] = useState(null)
  const [questionNumber, setQuestionNumber] = useState(1)
  const [stop, setStop] = useState(false)
  const [earned, setEarned] = useState("$ 0")


  const data = [
    //question1
    {
      id: 1,
      question: "In the UK, the abbreviation NHS stands for National what Service?",
      answers: [
        {
          text: "Humanity",
          correct: false,
        },
        {
          text: "Health",
          correct: true,
        },
        {
          text: "Honour",
          correct: false,
        },
        {
          text: "Household",
          correct: false,
        },
      ],
    },
    //question2
    {
      id: 2,
      question: "When did the website `Facebook` launch?",
      answers: [
        {
          text: "2004",
          correct: true,
        },
        {
          text: "2005",
          correct: false,
        },
        {
          text: "2006",
          correct: false,
        },
        {
          text: "2007",
          correct: false,
        },
      ],
    },
    //question3
    {
      id: 3,
      question: "Who played the character of harry potter in movie?",
      answers: [
        {
          text: "Johnny Deep",
          correct: false,
        },
        {
          text: "Leonardo Di Caprio",
          correct: false,
        },
        {
          text: "Denzel Washington",
          correct: false,
        },
        {
          text: "Daniel Red Cliff",
          correct: true,
        },
      ],
    },
    //question4
    {
      id: 4,
      question: "Which Disney character famously leaves a glass slipper behind at a royal ball?",
      answers: [
        {
          text: "Snow White",
          correct: false,
        },
        {
          text: "Reponzle",
          correct: false,
        },
        {
          text: "Elsa",
          correct: false,
        },
        {
          text: "Cinderella",
          correct: true,
        },
      ],
    },
    //question5
    {
      id: 5,
      question: "Which toys have been marketed with the phrase “robots in disguise”?",
      answers: [
        {
          text: "Bratz Dolls",
          correct: false,
        },
        {
          text: "Sylvanian Families",
          correct: false,
        },
        {
          text: "Transformers",
          correct: true,
        },
        {
          text: "Hatchimals",
          correct: false,
        },
      ],
    },
    //question6
    {
      id: 6,
      question: "What does the word loquacious mean?",
      answers: [
        {
          text: "Angry",
          correct: false,
        },
        {
          text: "Chatty",
          correct: true,
        },
        {
          text: "Beautiful",
          correct: false,
        },
        {
          text: "Shy",
          correct: false,
        },
      ],
    },
    //question7
    {
      id: 7,
      question: "Obstetrics is a branch of medicine particularly concerned with what?",
      answers: [
        {
          text: "Childbirth",
          correct: true,
        },
        {
          text: "Broken bones",
          correct: false,
        },
        {
          text: "Heart conditions",
          correct: false,
        },
        {
          text: "Old age",
          correct: false,
        },
      ],
    },
    //question8
    {
      id: 8,
      question: "Which of these religious observances lasts for the shortest period of time during the calendar year?",
      answers: [
        {
          text: "Ramadan",
          correct: false,
        },
        {
          text: "Lent",
          correct: false,
        },
        {
          text: "Hanukkah",
          correct: false,
        },
        {
          text: "Diwali",
          correct: true,
        },
      ],
    },
    //question9
    {
      id: 9,
      question: "At the closest point, which island group is only 50 miles south-east of the coast of Florida?",
      answers: [
        {
          text: "Bahamas",
          correct: true,
        },
        {
          text: "US Virgin Islands",
          correct: false,
        },
        {
          text: "Turks and Caicos Islands",
          correct: false,
        },
        {
          text: "Bermuda",
          correct: false,
        },
      ],
    },
    //question10
    {
      id: 10,
      question: "Construction of which of these famous landmarks was completed first?",
      answers: [
        {
          text: "Empire State Building",
          correct: false,
        },
        {
          text: "Royal Albert Hall",
          correct: false,
        },
        {
          text: "Eiffel Tower",
          correct: false,
        },
        {
          text: "Big Ben Clock Tower",
          correct: true,
        },
      ],
    },
    //question11
    {
      id: 11,
      question: "What sort of animal is Walt Disney's Dumbo?",
      answers: [
        {
          text: "Deer",
          correct: false,
        },
        {
          text: "Rabbit",
          correct: false,
        },
        {
          text: "Elephant",
          correct: true,
        },
        {
          text: "Donkey",
          correct: false,
        },
      ],
    },
    //question12
    {
      id: 12,
      question: "Which battles took place between the Royal Houses of York and Lancaster?",
      answers: [
        {
          text: "Thirty Years War",
          correct: false,
        },
        {
          text: "Hundred Years War",
          correct: false,
        },
        {
          text: "War of the Roses",
          correct: true,
        },
        {
          text: "English Civil War",
          correct: true,
        },
      ],
    },
    //question13
    {
      id: 13,
      question: "Queen Anne was the daughter of which English Monarch",
      answers: [
        {
          text: "James II",
          correct: true,
        },
        {
          text: "Henry VIII",
          correct: false,
        },
        {
          text: "Victoria",
          correct: false,
        },
        {
          text: "William I",
          correct: false,
        },
      ],
    },
    //question14
    {
      id: 14,
      question: "What is the Celsius equivalent of 77 degrees Fahrenheit?",
      answers: [
        {
          text: "15",
          correct: false,
        },
        {
          text: "20",
          correct: false,
        },
        {
          text: "30",
          correct: false,
        },
        {
          text: "25",
          correct: true,
        },
      ],
    },
    //question15
    {
      id: 15,
      question: "Suffolk Punch and Hackney are types of what?",
      answers: [
        {
          text: "Carriage",
          correct: false,
        },
        {
          text: "Wrestling style",
          correct: false,
        },
        {
          text: "Horse",
          correct: true,
        },
        {
          text: "Cocktail",
          correct: false,
        },
      ],
    },
  ];

  const moneyPyramid = useMemo(() =>
    [
      { id: 1, amount: "$100" },
      { id: 2, amount: "$200" },
      { id: 3, amount: "$300" },
      { id: 4, amount: "$500" },
      { id: 5, amount: "$1000" },
      { id: 6, amount: "$2000" },
      { id: 7, amount: "$4000" },
      { id: 8, amount: "$8000" },
      { id: 9, amount: "$16000" },
      { id: 10, amount: "$32000" },
      { id: 11, amount: "$64000" },
      { id: 12, amount: "$125000" },
      { id: 13, amount: "$250000" },
      { id: 14, amount: "$500000" },
      { id: 15, amount: "$1000000" },
    ].reverse(),
    [])

  useEffect(() => {
    questionNumber > 1 &&
      setEarned(moneyPyramid.find(m => m.id === questionNumber - 1).amount)
  }, [moneyPyramid, questionNumber])

  return (
    <div className="app">
      {userName ? (
        <>
          <div className="main">
            {stop ? <h1 className="endText">You earned: {earned} </h1> : (
              <>
                <div className="top">
                  <div className="timer">
                    <Timer setStop={setStop} questionNumber={questionNumber} />
                  </div>
                </div>
                <div className="bottom">
                  <Trivia
                    data={data}
                    setStop={setStop}
                    questionNumber={questionNumber}
                    setQuestionNumber={setQuestionNumber}
                  />
                </div>
              </>
            )}
          </div>
          <div className="pyramid">
            <ul className="moneyList">
              {moneyPyramid.map((m) => (
                <li className={questionNumber === m.id ? "moneyListItem active" : "moneyListItem"}>
                  <span className="moneyListItemNumber">{m.id}</span>
                  <span className="moneyListItemAmount">{m.amount}</span>
                </li>
              ))}

            </ul>
          </div>
        </>
      ) : <Start setUserName={setUserName} />}
    </div>
  );
}

export default App;
