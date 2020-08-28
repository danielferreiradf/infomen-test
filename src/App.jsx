import React, { useState } from "react";
import Question from "./components/Question/Question.jsx";

import Meetup from "./assets/images/Meetup.svg";
import Netflix from "./assets/images/Netflix.svg";
import Party from "./assets/images/Party.svg";
import Scooter from "./assets/images/Scooter.svg";
import Yoga from "./assets/images/Yoga.svg";
import LaptopGirl from "./assets/images/Laptop Girl.svg";
import Image1 from "./assets/images/image 1.png";
import Image2 from "./assets/images/image 2.png";
import Image3 from "./assets/images/image 3.svg";

import "./app.style.scss";

const App = () => {
  const [result, setResult] = useState(0);
  const [questionPage, setQuestionPage] = useState(0);
  const [question1, setQuestion1] = useState(null);
  const [question2, setQuestion2] = useState(null);
  const [question3, setQuestion3] = useState(null);
  const [question4, setQuestion4] = useState(null);
  const [question5, setQuestion5] = useState(null);
  const [question6, setQuestion6] = useState(null);
  const [question7, setQuestion7] = useState(null);

  const [selectedOptions, setSelectedOptions] = useState({
    option1selected: false,
    option2selected: false,
    option3selected: false,
  });

  function toggleSelected(value, func, valueToAdd) {
    if (value === 1) {
      setSelectedOptions({
        option1selected: true,
        option2selected: false,
        option3selected: false,
      });
      func(valueToAdd);
    }

    if (value === 2) {
      setSelectedOptions({
        option1selected: false,
        option2selected: true,
        option3selected: false,
      });
      func(valueToAdd);
    }

    if (value === 3) {
      setSelectedOptions({
        option1selected: false,
        option2selected: false,
        option3selected: true,
      });
      func(valueToAdd);
    }
  }

  function calculateResult() {
    setResult(
      question1 +
        question2 +
        question3 +
        question4 +
        question5 +
        question6 +
        question7
    );
    setQuestionPage(9);
  }

  console.log(
    question1,
    question2,
    question3,
    question4,
    question5,
    question6,
    question7
  );

  return (
    <div className="App">
      {/* Start */}
      {questionPage === 0 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>
                Welcome! <br />
                Thank you for joining us.
              </h1>
              <p>
                We all know that mental wellness is equally important as
                physical well-being. Let’s go through a couple a questions to
                find out how you have been doing recently.
              </p>
            </div>
            <div className="right-section">
              <img src={Scooter} alt="" />
            </div>
          </section>
          <div className="section-buttons">
            <button className="button1">I'd like to opt out</button>

            <button className="button2" onClick={() => setQuestionPage(1)}>
              Let's get started
            </button>
          </div>
        </Question>
      )}

      {/* Question 1 */}
      {questionPage === 1 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>1. How old are you?</h1>

              <div className="options">
                <div
                  className={
                    selectedOptions.option1selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(1, setQuestion1, 1)}
                >
                  <strong>18-24</strong>
                  <span>years</span>
                </div>

                <div
                  className={
                    selectedOptions.option2selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(2, setQuestion1, 0.9)}
                >
                  <strong>25-30</strong>
                  <span>years</span>
                </div>

                <div
                  className={
                    selectedOptions.option3selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(3, setQuestion1, 0.8)}
                >
                  <strong>30+</strong>
                  <span>years</span>
                </div>
              </div>
            </div>

            <div className="right-section">
              <img src={Netflix} alt="" />
            </div>
          </section>
          <div className="section-buttons">
            <button className="button1" onClick={() => setQuestionPage(0)}>
              back
            </button>
            {question1 !== null && (
              <button className="button2" onClick={() => setQuestionPage(2)}>
                next
              </button>
            )}
          </div>
        </Question>
      )}

      {/* Question 2 */}
      {questionPage === 2 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>2. How are you feeling today?</h1>

              <div className="options">
                <div
                  className={
                    selectedOptions.option1selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(1, setQuestion2, -2)}
                >
                  <strong>🙁</strong>
                  <span>sad</span>
                </div>

                <div
                  className={
                    selectedOptions.option2selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(2, setQuestion2, 0)}
                >
                  <strong>😐</strong>
                  <span>neutral</span>
                </div>

                <div
                  className={
                    selectedOptions.option3selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(3, setQuestion2, +2)}
                >
                  <strong>😀</strong>
                  <span>happy</span>
                </div>
              </div>
            </div>

            <div className="right-section">
              <img src={LaptopGirl} alt="" />
            </div>
          </section>
          <div className="section-buttons">
            <button className="button1" onClick={() => setQuestionPage(1)}>
              back
            </button>
            {question2 !== null && (
              <button className="button2" onClick={() => setQuestionPage(3)}>
                next
              </button>
            )}
          </div>
        </Question>
      )}

      {/* Question 3 */}
      {questionPage === 3 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>
                3. Do you have someone who you feel comfortable sharing your
                feelings with?
              </h1>

              <div className="options">
                <div
                  className={
                    selectedOptions.option1selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(1, setQuestion3, +2)}
                >
                  <strong>yes</strong>
                </div>

                <div
                  className={
                    selectedOptions.option2selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(2, setQuestion3, 0)}
                >
                  <strong>no</strong>
                </div>
              </div>
            </div>

            <div className="right-section">
              <img src={Meetup} alt="" />
            </div>
          </section>
          <div className="section-buttons">
            <button className="button1" onClick={() => setQuestionPage(2)}>
              back
            </button>
            {question3 !== null && (
              <button className="button2" onClick={() => setQuestionPage(4)}>
                next
              </button>
            )}
          </div>
        </Question>
      )}

      {/* Question 4 */}
      {questionPage === 4 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>
                4. How many times this week would you say you felt stressed to
                the point of worry?
              </h1>

              <div className="options">
                <div
                  className={
                    selectedOptions.option1selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(1, setQuestion4, +3)}
                >
                  <strong>0</strong>
                  <span>times</span>
                </div>

                <div
                  className={
                    selectedOptions.option2selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(2, setQuestion4, 0)}
                >
                  <strong>1-2</strong>
                  <span>times</span>
                </div>

                <div
                  className={
                    selectedOptions.option3selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(3, setQuestion4, -2)}
                >
                  <strong>3+</strong>
                  <span>times</span>
                </div>
              </div>
            </div>

            <div className="right-section">
              <img src={LaptopGirl} alt="" />
            </div>
          </section>
          <div className="section-buttons">
            <button className="button1" onClick={() => setQuestionPage(3)}>
              back
            </button>
            {question4 !== null && (
              <button className="button2" onClick={() => setQuestionPage(5)}>
                next
              </button>
            )}
          </div>
        </Question>
      )}

      {/* Question 5 */}
      {questionPage === 5 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>
                5. How many times this week have you exercised moderately for
                more than 20 minutes?
              </h1>

              <div className="options">
                <div
                  className={
                    selectedOptions.option1selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(1, setQuestion5, 0)}
                >
                  <strong>0</strong>
                  <span>times</span>
                </div>

                <div
                  className={
                    selectedOptions.option2selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(2, setQuestion5, 1)}
                >
                  <strong>1</strong>
                  <span>time</span>
                </div>

                <div
                  className={
                    selectedOptions.option3selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(3, setQuestion5, 2)}
                >
                  <strong>3+</strong>
                  <span>times</span>
                </div>
              </div>
            </div>

            <div className="right-section">
              <img src={Yoga} alt="" />
            </div>
          </section>
          <div className="section-buttons">
            <button className="button1" onClick={() => setQuestionPage(4)}>
              back
            </button>
            {question5 !== null && (
              <button className="button2" onClick={() => setQuestionPage(6)}>
                next
              </button>
            )}
          </div>
        </Question>
      )}

      {/* Question 6 */}
      {questionPage === 6 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>6. How many hours do you sleep on average every day?</h1>

              <div className="options">
                <div
                  className={
                    selectedOptions.option1selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(1, setQuestion6, -1)}
                >
                  <strong>{"< 6"}</strong>
                  <span>hours</span>
                </div>

                <div
                  className={
                    selectedOptions.option2selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(2, setQuestion6, 1)}
                >
                  <strong>6-8</strong>
                  <span>hours</span>
                </div>

                <div
                  className={
                    selectedOptions.option3selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(3, setQuestion6, 2)}
                >
                  <strong>8+</strong>
                  <span>hours</span>
                </div>
              </div>
            </div>

            <div className="right-section">
              <img src={LaptopGirl} alt="" />
            </div>
          </section>
          <div className="section-buttons">
            <button className="button1" onClick={() => setQuestionPage(5)}>
              back
            </button>
            {question6 !== null && (
              <button className="button2" onClick={() => setQuestionPage(7)}>
                next
              </button>
            )}
          </div>
        </Question>
      )}

      {/* Question 7 */}
      {questionPage === 7 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>
                7. How many times each day do you stop to relax and breathe?
              </h1>

              <div className="options">
                <div
                  className={
                    selectedOptions.option1selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(1, setQuestion7, 0)}
                >
                  <strong>0</strong>
                  <span>times</span>
                </div>

                <div
                  className={
                    selectedOptions.option2selected
                      ? "option selected"
                      : "option"
                  }
                  onClick={() => toggleSelected(2, setQuestion7, 2)}
                >
                  <strong>1+</strong>
                  <span>times</span>
                </div>
              </div>
            </div>

            <div className="right-section">
              <img src={Party} alt="" />
            </div>
          </section>
          <div className="section-buttons">
            <button className="button1" onClick={() => setQuestionPage(6)}>
              back
            </button>
            {question7 !== null && (
              <button className="button2" onClick={() => setQuestionPage(8)}>
                next
              </button>
            )}
          </div>
        </Question>
      )}

      {/* 8 */}
      {questionPage === 8 && (
        <Question>
          <section className="questionary">
            <button onClick={() => calculateResult()}>Calculate result?</button>
          </section>
        </Question>
      )}

      {/* Final */}
      {questionPage === 9 && result <= 10 && result >= 5 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>Well done!</h1>
              <p>
                Based on your answers, we think you are doing pretty well. Carry
                on as you were!
              </p>
            </div>

            <div className="right-section">
              <img src={Image1} alt="" />
            </div>
          </section>
        </Question>
      )}

      {questionPage === 9 && result > 10 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>Well done!</h1>
              <p>
                Based on your answers, we think you are a Wellness Champion!
                Let’s celebrate your success together.
              </p>
            </div>

            <div className="right-section">
              <img src={Image3} alt="" />
            </div>
          </section>
        </Question>
      )}

      {questionPage === 9 && result < 5 && (
        <Question>
          <section className="questionary">
            <div className="left-section">
              <h1>Well done!</h1>
              <p>
                Based on your answers, below are a few tips that we think might
                be helpful to you.
                <br />
              </p>
              <p>
                ▸ Talking to someone you trust <br />
                ▸ Trying to manage your worries <br />
                ▸ Look after your physical health <br />
                ▸ Try breathing excercises <br />
                ▸ Keep a diary to help you recognise and avoid stressors <br />▸
                Celebrate the positives
              </p>
            </div>

            <div className="right-section">
              <img src={Image2} alt="" />
            </div>
          </section>
        </Question>
      )}
    </div>
  );
};

export default App;
