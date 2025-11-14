// ---------------------------
// QUIZ DATA
// ---------------------------
const quizzes = {
  c: [
    {
      text: "1. Which header file is required for printf() and scanf()?",
      options: ["<math.h>", "<stdio.h>", "<stdlib.h>", "<string.h>"],
      correctIndex: 1,
    },
    {
      text: "2. What is the correct return type of main() in standard C?",
      options: ["void", "int", "char", "float"],
      correctIndex: 1,
    },
    {
      text: "3. Which format specifier is used to print an integer in C?",
      options: ["%c", "%d", "%f", "%s"],
      correctIndex: 1,
    },
    {
      text: "4. Which operator is used to access the value stored at a pointer?",
      options: ["&", "*", "->", "."],
      correctIndex: 1,
    },
    {
      text: "5. What is the index of the first element in a C array?",
      options: ["0", "1", "-1", "Depends on compiler"],
      correctIndex: 0,
    },
    {
      text: "6. Which of the following is NOT a loop in C?",
      options: ["for", "repeat-until", "while", "do-while"],
      correctIndex: 1,
    },
    {
      text: "7. Which keyword is used to define a constant in C?",
      options: ["let", "final", "const", "#define"],
      correctIndex: 3,
    },
    {
      text: "8. sizeof(int) typically returns size in:",
      options: ["Bits", "Bytes", "Characters", "Words"],
      correctIndex: 1,
    },
    {
      text: "9. Which escape sequence is used to print a new line?",
      options: ["\\0", "\\t", "\\n", "\\r"],
      correctIndex: 2,
    },
    {
      text: "10. What does the following print? printf(\"%d\", 5/2);",
      options: ["2.5", "2", "3", "Compilation error"],
      correctIndex: 1,
    },
  ],
  python: [
    {
      text: "1. Which of these is a valid variable name in Python?",
      options: ["1var", "var-1", "var_1", "var 1"],
      correctIndex: 2,
    },
    {
      text: "2. What is the output of: print(type(10))?",
      options: ["<class 'str'>", "<class 'int'>", "<class 'float'>", "<class 'number'>"],
      correctIndex: 1,
    },
    {
      text: "3. How do you write a single-line comment in Python?",
      options: ["// comment", "/* comment */", "# comment", "-- comment"],
      correctIndex: 2,
    },
    {
      text: "4. What is the result of: 3 * 'ab' ?",
      options: ["'ab3'", "'ababab'", "Error", "'ab ab ab'"],
      correctIndex: 1,
    },
    {
      text: "5. Which keyword is used to define a function?",
      options: ["func", "define", "def", "function"],
      correctIndex: 2,
    },
    {
      text: "6. What is the output of: len([1, 2, 3, 4])?",
      options: ["3", "4", "5", "Error"],
      correctIndex: 1,
    },
    {
      text: "7. Which of these is an immutable type?",
      options: ["list", "set", "dict", "tuple"],
      correctIndex: 3,
    },
    {
      text: "8. How do you import the math module?",
      options: ["import.math", "include math", "using math", "import math"],
      correctIndex: 3,
    },
    {
      text: "9. What is the output of: bool(0)?",
      options: ["True", "False", "0", "None"],
      correctIndex: 1,
    },
    {
      text: "10. Which loop is used to iterate over items of a list?",
      options: ["for", "while", "do-while", "foreach"],
      correctIndex: 0,
    },
  ],
  java: [
    {
      text: "1. Which keyword is used to define a class in Java?",
      options: ["class", "Class", "struct", "object"],
      correctIndex: 0,
    },
    {
      text: "2. Which method is the entry point of a Java program?",
      options: [
        "public static void start(String[] args)",
        "public static void main(String[] args)",
        "public void main(String args)",
        "public static main()",
      ],
      correctIndex: 1,
    },
    {
      text: "3. Which of these is NOT a Java primitive type?",
      options: ["int", "boolean", "String", "double"],
      correctIndex: 2,
    },
    {
      text: "4. Which keyword is used to inherit a class?",
      options: ["implements", "extends", "inherits", "super"],
      correctIndex: 1,
    },
    {
      text: "5. What is the default value of a boolean instance variable?",
      options: ["true", "false", "0", "null"],
      correctIndex: 1,
    },
    {
      text: "6. Which of these is used for exception handling?",
      options: ["try-catch", "if-else", "switch", "for"],
      correctIndex: 0,
    },
    {
      text: "7. Which collection does NOT allow duplicates?",
      options: ["ArrayList", "LinkedList", "HashSet", "Vector"],
      correctIndex: 2,
    },
    {
      text: "8. Which keyword is used to create an object?",
      options: ["alloc", "malloc", "new", "create"],
      correctIndex: 2,
    },
    {
      text: "9. Which access modifier makes a member visible only inside the same class?",
      options: ["public", "protected", "private", "default"],
      correctIndex: 2,
    },
    {
      text: "10. Which OOP concept is related to 'many forms'?",
      options: ["Encapsulation", "Abstraction", "Inheritance", "Polymorphism"],
      correctIndex: 3,
    },
  ],
  dsa: [
    {
      text: "1. What is the time complexity of binary search (on sorted array)?",
      options: ["O(1)", "O(n)", "O(log n)", "O(n log n)"],
      correctIndex: 2,
    },
    {
      text: "2. Which data structure works on FIFO principle?",
      options: ["Stack", "Queue", "Array", "Tree"],
      correctIndex: 1,
    },
    {
      text: "3. Which traversal of a binary tree gives sorted output for a BST?",
      options: ["Preorder", "Postorder", "Inorder", "Level order"],
      correctIndex: 2,
    },
    {
      text: "4. Which sorting algorithm has average time complexity O(n log n)?",
      options: ["Bubble sort", "Selection sort", "Insertion sort", "Merge sort"],
      correctIndex: 3,
    },
    {
      text: "5. Which data structure is best for implementing recursion internally?",
      options: ["Queue", "Stack", "Array", "Graph"],
      correctIndex: 1,
    },
    {
      text: "6. What is the worst-case time for searching in an unsorted array?",
      options: ["O(1)", "O(log n)", "O(n)", "O(n log n)"],
      correctIndex: 2,
    },
    {
      text: "7. In a max-heap, the largest element is at:",
      options: ["Any leaf", "Left child of root", "Right child of root", "Root"],
      correctIndex: 3,
    },
    {
      text: "8. Which data structure is used in BFS of a graph?",
      options: ["Stack", "Queue", "Priority Queue", "Set"],
      correctIndex: 1,
    },
    {
      text: "9. Which data structure is ideal for undo operations?",
      options: ["Queue", "Stack", "Heap", "Hash table"],
      correctIndex: 1,
    },
    {
      text: "10. Big-O notation describes:",
      options: [
        "Exact running time",
        "Approximate memory usage",
        "Growth rate of time/space",
        "Number of lines of code",
      ],
      correctIndex: 2,
    },
  ],
};

// ---------------------------
// DOM ELEMENTS
// ---------------------------
const homeSection = document.getElementById("home-section");
const learningSection = document.getElementById("learning-section");
const courseCards = document.querySelectorAll(".course-card");
const backHomeBtn = document.getElementById("backHome");
const homeBtn = document.getElementById("homeBtn");

const currentCourseTitle = document.getElementById("currentCourseTitle");
const quizHeading = document.getElementById("quizHeading");
const questionsContainer = document.getElementById("questionsContainer");
const checkAnswersBtn = document.getElementById("checkAnswersBtn");
const scoreDisplay = document.getElementById("scoreDisplay");

// Playground elements
const languageSelect = document.getElementById("languageSelect");
const currentLangPill = document.getElementById("current-lang-pill");
const codeEditor = document.getElementById("codeEditor");
const runBtn = document.getElementById("runBtn");
const clearBtn = document.getElementById("clearBtn");
const templateBtn = document.getElementById("templateBtn");
const output = document.getElementById("output");

// Current state
let currentLanguage = "python"; // for playground
let currentQuizLang = null;     // for quiz

// ---------------------------
// NAVIGATION
// ---------------------------
function showHome() {
  learningSection.classList.add("hidden");
  homeSection.classList.remove("hidden");
  scoreDisplay.textContent = "";
}

function startCourse(langKey) {
  currentQuizLang = langKey;

  // Update titles
  const titles = {
    c: "C Programming Quiz",
    python: "Python Quiz",
    java: "Java Quiz",
    dsa: "DSA Quiz",
  };

  currentCourseTitle.textContent = titles[langKey] || "Quiz";
  quizHeading.textContent =
    (titles[langKey] || "Quiz") + " - 10 Questions";

  // Show learning section
  homeSection.classList.add("hidden");
  learningSection.classList.remove("hidden");

  // Load quiz questions
  renderQuiz(langKey);

  // Sync playground language (optional: default Python, but we align with course)
  if (["c", "python", "java", "dsa"].includes(langKey)) {
    currentLanguage = langKey;
    languageSelect.value = currentLanguage;
    updateLanguageUI();
    insertTemplateForCurrentLanguage();
  }
}

// Attach events to cards
courseCards.forEach((card) => {
  card.addEventListener("click", () => {
    const lang = card.getAttribute("data-lang");
    startCourse(lang);
  });
});

backHomeBtn.addEventListener("click", showHome);
homeBtn.addEventListener("click", showHome);

// ---------------------------
// QUIZ RENDERING & SCORING
// ---------------------------
function renderQuiz(langKey) {
  const quiz = quizzes[langKey] || [];
  questionsContainer.innerHTML = "";
  scoreDisplay.textContent = "";

  quiz.forEach((q, index) => {
    const card = document.createElement("div");
    card.className = "question-card";
    card.dataset.index = index;

    const title = document.createElement("div");
    title.className = "question-title";
    title.textContent = q.text;
    card.appendChild(title);

    const optionsList = document.createElement("ul");
    optionsList.className = "options";

    q.options.forEach((opt, optIndex) => {
      const li = document.createElement("li");

      const label = document.createElement("label");
      label.className = "option-label";

      const radio = document.createElement("input");
      radio.type = "radio";
      radio.name = `q-${index}`;
      radio.value = optIndex;

      label.appendChild(radio);
      const span = document.createElement("span");
      span.textContent = opt;
      label.appendChild(span);

      li.appendChild(label);
      optionsList.appendChild(li);
    });

    card.appendChild(optionsList);
    questionsContainer.appendChild(card);
  });
}

checkAnswersBtn.addEventListener("click", () => {
  if (!currentQuizLang) return;

  const quiz = quizzes[currentQuizLang] || [];
  let score = 0;

  const cards = questionsContainer.querySelectorAll(".question-card");
  cards.forEach((card, index) => {
    card.classList.remove("correct", "incorrect");

    const q = quiz[index];
    const selected = card.querySelector("input[type='radio']:checked");
    if (!selected) {
      // Not answered
      return;
    }

    const answerIndex = parseInt(selected.value, 10);
    if (answerIndex === q.correctIndex) {
      score++;
      card.classList.add("correct");
    } else {
      card.classList.add("incorrect");
    }
  });

  scoreDisplay.textContent = `You scored ${score} / ${quiz.length}`;
});

// ---------------------------
// PLAYGROUND TEMPLATES
// ---------------------------
const templates = {
  c: `#include <stdio.h>

int main() {
    printf("Hello, C world!\\n");
    return 0;
}
`,
  python: `# Python demo: print numbers from 1 to 5

for i in range(1, 6):
    print("Number:", i)
`,
  java: `public class Main {
    public static void main(String[] args) {
        System.out.println("Hello, Java world!");
    }
}
`,
  dsa: `# Pseudo-code: Bubble Sort

arr = [5, 2, 9, 1, 5, 6]

for i from 0 to n-1:
    for j from 0 to n-i-2:
        if arr[j] > arr[j+1]:
            swap(arr[j], arr[j+1])

print(arr)
`,
};

function updateLanguageUI() {
  const displayName =
    currentLanguage === "c"
      ? "C"
      : currentLanguage === "python"
      ? "Python"
      : currentLanguage === "java"
      ? "Java"
      : "DSA (Pseudo)";
  currentLangPill.textContent = displayName;
}

function insertTemplateForCurrentLanguage() {
  const template = templates[currentLanguage] || "";
  codeEditor.value = template;
}

// Dropdown change
languageSelect.addEventListener("change", (e) => {
  currentLanguage = e.target.value;
  updateLanguageUI();
});

// Buttons
templateBtn.addEventListener("click", insertTemplateForCurrentLanguage);

clearBtn.addEventListener("click", () => {
  codeEditor.value = "";
  output.textContent = "";
});

// ---------------------------
// PYTHON EXECUTION (Skulpt)
// ---------------------------
function builtinRead(x) {
  if (
    Sk.builtinFiles === undefined ||
    Sk.builtinFiles["files"][x] === undefined
  ) {
    throw "File not found: '" + x + "'";
  }
  return Sk.builtinFiles["files"][x];
}

function runPython(code) {
  output.textContent = "";

  Sk.configure({
    output: function (text) {
      output.textContent += text;
    },
    read: builtinRead,
  });

  Sk.misceval
    .asyncToPromise(function () {
      return Sk.importMainWithBody("<stdin>", false, code, true);
    })
    .then(
      function () {
        // success
      },
      function (err) {
        output.textContent += "\nError: " + err.toString();
      }
    );
}

runBtn.addEventListener("click", () => {
  const code = codeEditor.value;
  if (!code.trim()) {
    output.textContent = "Write some code first!";
    return;
  }

  if (currentLanguage === "python") {
    runPython(code);
  } else {
    output.textContent =
      "Live execution is available only for Python in this demo.\n" +
      "You can still write and practice " +
      (currentLanguage === "c"
        ? "C"
        : currentLanguage === "java"
        ? "Java"
        : "DSA pseudo-code") +
      " here.";
  }
});

// ---------------------------
// INITIALIZE
// ---------------------------
(function init() {
  // Start on home
  showHome();
  // Playground default
  currentLanguage = "python";
  languageSelect.value = "python";
  updateLanguageUI();
  insertTemplateForCurrentLanguage();
})();
