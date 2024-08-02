const {VertexAI} = require('@google-cloud/vertexai');

// Initialize Vertex with your Cloud project and location
const vertex_ai = new VertexAI({project: 'winged-line-429814-e8', location: 'us-central1'});
const model = 'gemini-1.5-pro-001';

// Instantiate the models
const generativeModel = vertex_ai.preview.getGenerativeModel({
  model: model,
  generationConfig: {
    'maxOutputTokens': 8192,
    'temperature': 1,
    'topP': 0.95,
  },
  safetySettings: [
    {
        'category': 'HARM_CATEGORY_HATE_SPEECH',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_DANGEROUS_CONTENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_SEXUALLY_EXPLICIT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    },
    {
        'category': 'HARM_CATEGORY_HARASSMENT',
        'threshold': 'BLOCK_MEDIUM_AND_ABOVE'
    }
  ],
});

const text1 = {text: `You are an intelligent assistant designed to analyze resumes and job descriptions. Given a candidate\'s resume and a job description, Could you please analyze it and extract the following fields:

    candidate\'s contact information, including: - Name - Phone Number - Email Address - LinkedIn Profile (if available) - GitHub Profile (if available)
    2. Compare the candidate\'s skills with the required skills in the job description 
    and provide a match score out of total no. Of skills mentioned in the job description based on the number of required skills present in the resume.
    If the number of skills required are 3 and the number of matched skills is 1 then the score (1/3)*10 which is 3.33.
    Give the decimal value. So you should return 3.33. 
    3. Please return your response as a JSON object in the following format:
    {
      \"Candidate_Name\": \"<Full name of the candidate>\",
      \"Contact_Info\": {
        \"Phone_Number\": [\"<Array of Phone number>\"],
        \"Email\": \"<Email address>\",
        \"LinkedIn\": \"<Linkedin link>\",
        \"GitHub\": \"<Github link>\"
      },
      \"Score\": <Give the calculated score on the scale of 10>,
      \"Required skills\": [\"<Array of skills mentioned in the job description each skill in the array should be string>\"],
      \"Matched skills\": [\"<Array of skills that are matched with the job description each skill in the array should be string>\"]
    }
    Ensure the JSON string is correctly formatted without backticks or any special characters;
    Here is an example job description and the corresponding resume. Please provide the output as described above.
    **Job Description:** [Position: Full Stack Developer
    Location: [Insert Location]
    Job Type: [Full-time/Part-time/Contract]
    Job Summary: We are looking for a highly skilled and motivated Full Stack Developer to join our dynamic team. The ideal candidate will have a strong background in web development, with expertise in React, MongoDB,Angular js,Django and Node.js. You will be responsible for designing, developing, and maintaining high-quality web applications that meet our clients\' needs.
    ]
    **Resume:** 
    GOUTHAM SURAKATTULA
R
surakattulagoutham.20.csm@anits.edu.in

PortFolio
Ó
6304527573
½
Vizianagaram, India

Goutham-003
°
surakattula-goutham-882454227
SUMMARY
\"I am a recent CSE(AI&ML) B-Tech graduate skilled
in web development. Proficient in Java, Python, and
basic Machine Learning.  Seeking entry-level role to
apply expertise in crafting innovative web solutions.
Eager to contribute to success while advancing web
development skills.\"
SKILLS
Languages:Java, MySQL, Python, JavaScript, HTML,
C, PHP.
Technologies:NodeJS, ExpressJS, NoSQL(MongoDB),
ReactJS, Git, GitHub.
PROFESSIONAL EXPERIENCE
05/23 - 12/23Software Development InternEdumoon
•Worked on 3 real-time projects in web development, wireframing and SEO.
•Website development for a CA firm using MERN stack with features of 15+ financial calculators and 100+
financial services
•Worked for design and development of website for 3 Months.
•Involved in SEO efforts for a real estate website to boost its online visibility and search engine rankings.
NodeJS/Rest - API/Sheets
PROJECTS
MERNE-Waste Easyhttps://github.com/Goutham-003/ewasteeasy
Built an E-waste recycling app in Node.js, Express, MongoDB, React to help people dispose of E-Waste
responsibly. Users sign up, find nearby drop-off locations, or schedule pickups. They earn points for
recycling, which they can redeem for rewards! (Web scraping used for generating reward )
NodeJS, MongoDBGameMasterhttps://github.com/Goutham-003/GameMaster
Created GameMaster gaming website featuring a diverse game collection, consolidated leaderboards,
and profile customization using NodeJS, Express JS, MongoDB, HTML, CSS, and JS to track player
progress and enhance the gaming experience.
ReactJSClimate Apphttps://github.com/Goutham-003/Climate-App
Built weather app (Climate App) with React for real-time weather data using OpenWeatherMap API. De-
livers fast, responsive UI with accurate temperature, humidity, wind speed & more for global locations.
ReactJSPortfoliohttps://kaleidoscopic-clafoutis-c358b9.netlify.app/
I have built a responsive webpage for showcasing my skills, experience and projects using React Js and
Tailwind CSS
PHPThe Spice Delighthttps://github.com/Goutham-003/The-Spice-Delight
Developed a bill management webpage with HTML, CSS, and PHP, adhering to software development
best practices to deliver clean, maintainable, and efficient code.
JavaUser Authentication Pagehttps://github.com/Goutham-003/Java-Miniproject
I have made a Java-based desktop application, enabling account creation and secure login via Java AWT
and Swings. User details are stored locally with Base64 encryption.
EDUCATION
2020 - 2024B-Tech in CSE(AI&ML)Anil Neerukonda Institute of Technology and Sciences
CGPA: 8.99
2018 - 2020IntermediateSri Chaitanya Junior College
Percentage: 93.2
2017 - 201810th StandardThe Sun School
CGPA: 10.0

CERTIFICATIONS
10/09/2023DSA with JavaApna College
•Completed \"DSA with Java Course\" by Apna College, achieving proficiency in Java language and master-
ing Data Structures & Algorithms. Enhanced problem-solving skills and expertise in DSA.
23/04/2023Web DevelopmentUdemy
•Attained Full-Stack Web Developer expertise in HTML, CSS, JavaScript, and Node, showcasing proficiency
through a portfolio website that reflects efficient coding practices
27/08/2022Computational Problem SolvingInfosys SpringBoard
•Completed \"Computational Problem Solving\" by Infosys SpringBoard, getting skilled in Java and Problem
Solving.
ACHIEVEMENTS
PresentCoding Profilehttps://leetcode.com/goutham003/
•Solved200+ problems in Leetcodein Java. The DSA problems ranging from arrays, strings, Linked-list,
Stack to Dynamic programming and Back tracking.
PresentSecretary of CSI Student Branch.ANITS
•Computer Society of India is a National-level body of computer professionals in India
09/02/2023DataScience Bootcamp and HackathonSRKR Bhimavaram
•Secured a top-five position in a national Data Science Hackathon featuring 150 teams at SRKR
Bheemawaram, demonstrating proficiency in data analysis, machine learning, and adept problem-solving
skills.
05/07/2022Summer School ProgramNIT- Andhra Pradesh
•Participated in a National Level Summer School on Advanced Technologies in STEM, earning an A+ grade.
Gained hands-on experience in 3D printing, IoT edge tech, and foundational Linux programming skills.
    Don\'t add any extra skills in resume and job description. Just compare the skills in job description with resume.
    Ensure the JSON string is correctly formatted without backticks or any special characters.`};

async function generateContent() {
  const req = {
    contents: [
      {role: 'user', parts: [text1]}
    ],
  };

  const streamingResp = await generativeModel.generateContentStream(req);

  for await (const item of streamingResp.stream) {
    process.stdout.write('stream chunk: ' + JSON.stringify(item) + '\n');
  }

  process.stdout.write('aggregated response: ' + JSON.stringify(await streamingResp.response));
}

generateContent();
