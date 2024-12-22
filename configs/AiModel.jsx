/*
 * Install the Generative AI SDK
 *
 * $ npm install @google/generative-ai
 */

const {
    GoogleGenerativeAI,
    HarmCategory,
    HarmBlockThreshold,
  } = require("@google/generative-ai");
  
  const apiKey = process.env.NEXT_PUBLIC_GEMINI_API_KEY;
  const genAI = new GoogleGenerativeAI(apiKey);
  
  const model = genAI.getGenerativeModel({
    model: "gemini-1.5-flash",
  });
  
  const generationConfig = {
    temperature: 1,
    topP: 0.95,
    topK: 64,
    maxOutputTokens: 8192,
    responseMimeType: "application/json",
  };
  

    export const GenerateCourseLayout_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Generate A Course Tutorial on Following Detail with field as Course Name, Description, Along with Chapter Name, about, Duration: Category: 'Programming', Topic: Python, Level:Basic, Duration: 1 hours, NoOf Chapters:5, in JSON format\n"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n{\n  \"course_name\": \"Python Programming for Beginners\",\n  \"description\": \"This course provides a comprehensive introduction to the Python programming language, designed for absolute beginners with no prior programming experience. You'll learn the fundamental concepts of Python, including variables, data types, operators, control flow, functions, and more.\",\n  \"chapters\": [\n    {\n      \"chapter_name\": \"Introduction to Python\",\n      \"about\": \"This chapter introduces the Python programming language, its history, and its applications. You'll learn how to set up your programming environment and write your first Python program.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapter_name\": \"Variables and Data Types\",\n      \"about\": \"This chapter covers the basics of variables and data types in Python. You'll learn how to declare variables, assign values, and work with different data types such as integers, floats, strings, and booleans.\",\n      \"duration\": \"25 minutes\"\n    },\n    {\n      \"chapter_name\": \"Operators and Expressions\",\n      \"about\": \"This chapter explores operators and expressions in Python. You'll learn about arithmetic, comparison, logical, and assignment operators, and how to combine them to form expressions.\",\n      \"duration\": \"15 minutes\"\n    },\n    {\n      \"chapter_name\": \"Control Flow\",\n      \"about\": \"This chapter introduces the concepts of control flow, including conditional statements (if-else) and loops (for and while). You'll learn how to control the execution flow of your Python programs.\",\n      \"duration\": \"20 minutes\"\n    },\n    {\n      \"chapter_name\": \"Functions\",\n      \"about\": \"This chapter delves into functions in Python. You'll learn how to define functions, pass arguments, and return values. Functions allow you to modularize your code and reuse functionality.\",\n      \"duration\": \"10 minutes\"\n    }\n  ],\n  \"category\": \"Programming\",\n  \"topic\": \"Python\",\n  \"level\": \"Basic\",\n  \"duration\": \"1 hour\",\n  \"number_of_chapters\": 5\n}\n```"},
          ],
        },
      ],
    });

    export const GenerateChapterContent_AI = model.startChat({
      generationConfig,
   // safetySettings: Adjust safety settings
   // See https://ai.google.dev/gemini-api/docs/safety-settings
      history: [
        {
          role: "user",
          parts: [
            {text: "Explain the concept in Detail on Topic:Start Up Ideas, Chapter:The Spark of Innovation, in JSON Format with list of array with field as title, explanation on given chapter in detail, Code Example(Code field in <precode> format) if applicable"},
          ],
        },
        {
          role: "model",
          parts: [
            {text: "```json\n[\n  {\n    \"title\": \"The Spark of Innovation\",\n    \"explanation\": \"This chapter explores the essence of innovation, the very spark that ignites the journey of a startup. It delves into the nature of innovative ideas, their origins, and the factors that contribute to their emergence. We'll examine how seemingly simple observations can be transformed into groundbreaking solutions, and how passion, curiosity, and a willingness to challenge the status quo are crucial ingredients in the recipe for innovation.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Identifying Problems and Needs\",\n    \"explanation\": \"The first step towards innovation is recognizing problems and unmet needs in the world. This involves paying close attention to your surroundings, observing people's struggles, and understanding their desires. Startups thrive on solving real-world problems, so pinpointing these issues is paramount.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"The Power of Observation\",\n    \"explanation\": \"Sharpen your observational skills to identify problems that others might overlook. This includes paying attention to daily routines, frustrations, and inefficiencies. Simple observations can often spark innovative solutions.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"The Role of Curiosity\",\n    \"explanation\": \"Curiosity is a driving force behind innovation. Ask questions, delve deeper into topics, and challenge existing assumptions. Curiosity fuels the desire to understand how things work and discover better ways of doing them.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Connecting the Dots\",\n    \"explanation\": \"Innovation often arises from connecting seemingly unrelated ideas or concepts. This requires thinking outside the box, drawing upon knowledge from diverse fields, and exploring unconventional approaches.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"The Value of Experimentation\",\n    \"explanation\": \"Experimentation is crucial for testing ideas and refining them. It involves creating prototypes, conducting trials, and gathering feedback to validate your assumptions and improve your solution.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Failure as a Stepping Stone\",\n    \"explanation\": \"Failure is an inherent part of the innovative process. Embrace failure as an opportunity to learn, adjust your approach, and iterate towards a better solution. Don't let setbacks discourage you; view them as valuable lessons.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"Finding Your Passion\",\n    \"explanation\": \"Passion is a powerful motivator for entrepreneurs. Identify a problem or need that you're genuinely passionate about solving. This passion will fuel your dedication and help you overcome challenges along the way.\",\n    \"codeExample\": \"\"\n  },\n  {\n    \"title\": \"The Importance of Storytelling\",\n    \"explanation\": \"Effective storytelling is essential for communicating your vision and inspiring others. Craft a compelling narrative that highlights the problem, the solution, and the impact your startup can make.\",\n    \"codeExample\": \"\"\n  }\n]\n```"},
          ],
        },
      ],
    });
  
  
    // const result = await chatSession.sendMessage("INSERT_INPUT_HERE");
    // console.log(result.response.text());

  
