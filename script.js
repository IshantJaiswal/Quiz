// Define an array of quiz questions
const quizQuestions = [
    {
      question: "Topper of the batch?",
      options: ["Piyush Kesarwani", "Lallan", "Girish", "Saumya"],
      correctAnswer: "Piyush Kesarwani"
    },
    {
      question: "Guy who have friends (Girls) in every Course in college ",
      options: ["Prashant Sharma", "Akansh", "Ishant", "Akshay"],
      correctAnswer: "Akshay"
    },
    {
      question: "Liar",
      options: ["Anurag", "Deepanshu", "Nikki", "Aakash Mishra"],
      correctAnswer: "Deepanshu"
    },
    {
      question: "BCA ka don...",
      options: ["Manish Singh", "Piyush Chaudhary", "Deepanshu", "Aditya Dhinghan"],
      correctAnswer: "Manish Singh"
    },
    {
      question: "Teacher who always Chilling",
      options: ["Aagya vats Sir", "Surender Sir", "Prassan Sir", "Sumit Sir"],
      correctAnswer: "Prassan Sir"
    },
    {
      question: "Most Popular guy from these",
      options: ["Piyush Kesarwani", "Piyush Chaudhary", "Nishant Singh", "Chetan"],
      correctAnswer: "Piyush Chaudhary"
    },
    {
      question: "Most Popular girl from these",
      options: ["Riya Yadav", "Saumya Tripathi", "Ritika"],
      correctAnswer: "Riya Yadav"
    },
    {
      question: "Most Friendly",
      options: ["Nishant", "Piyush Chaudhary", "Chetan", "Nikki"],
      correctAnswer: "Nishant"
    },
    {
      question: "Singer",
      options: ["Akshit Singh", "Aman Anand", "Aditya Tanwar", "Abhiyan"],
      correctAnswer: "Akshit Singh"
    },
  ];
  
  // Variables to track quiz state
  let currentQuestionIndex = 0;
  let score = 0;
  let timeLeft = 60;
  let timerInterval;
  
  // Function to start the quiz
  function startQuiz() {
    // Hide the start button and display the first question
    document.getElementById("start-button").style.display = "none";
    displayQuestion();
    startTimer();
  }
  
  // Function to display a question and its options
  function displayQuestion() {
    const currentQuestion = quizQuestions[currentQuestionIndex];
    const questionText = document.getElementById("question-text");
    const answerButtons = document.getElementById("answer-buttons");
  
    // Clear previous question and answer options
    questionText.innerHTML = "";
    answerButtons.innerHTML = "";
  
    // Display the current question
    questionText.innerHTML = currentQuestion.question;
  
    // Create answer buttons for each option
    currentQuestion.options.forEach(option => {
      const button = document.createElement("button");
      button.innerText = option;
      button.classList.add("answer-button");
      answerButtons.appendChild(button);
  
      // Add click event listener to check the answer
      button.addEventListener("click", function() {
        checkAnswer(option);
      });
    });
  }
  
  // Function to check the selected answer
  function checkAnswer(selectedOption) {
    const currentQuestion = quizQuestions[currentQuestionIndex];
  
    // Check if the selected answer is correct
    if (selectedOption === currentQuestion.correctAnswer) {
      score++;
    }
  
    // Move to the next question or end the quiz if all questions are answered
    currentQuestionIndex++;
  
    if (currentQuestionIndex < quizQuestions.length) {
      displayQuestion();
    } else {
      endQuiz();
    }
  }
  
  // Function to start the timer
  function startTimer() {
    timerInterval = setInterval(function() {
      timeLeft--;
  
      // Update the timer text
      document.getElementById("timer").textContent = timeLeft;
  
      // End the quiz if time runs out
      if (timeLeft <= 0) {
        endQuiz();
      }
    }, 1000);
  }
  
  // Function to end the quiz
  function endQuiz() {
    // Stop the timer
    clearInterval(timerInterval);
  
    // Calculate the score percentage
    const scorePercentage = (score / quizQuestions.length) * 100;
  
    // Display the final score
    const questionContainer = document.getElementById("question-container");
    questionContainer.innerHTML = `
      <h2>Quiz Completed!</h2>
      <p>Your Score: ${score} out of ${quizQuestions.length}</p>
      <p>Score Percentage: ${scorePercentage}%</p>
    `;
  }
  
  // Add event listener to start the quiz when the start button is clicked
  document.getElementById("start-button").addEventListener("click", startQuiz);