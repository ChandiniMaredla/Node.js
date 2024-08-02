import { GoogleGenerativeAI } from "@google/generative-ai";
import dotenv from "dotenv";
import fs from 'fs';
import PdfParse from "pdf-parse";

dotenv.config();

const gemini_api_key = process.env.API_KEY;
const googleAI = new GoogleGenerativeAI(gemini_api_key);
const geminiConfig = {
  temperature: 0.1,
  topP: 1,
  topK: 1,
  maxOutputTokens: 4096,
};

const geminiModel = googleAI.getGenerativeModel({
  model: "gemini-pro",
  geminiConfig,
});

const parsePdf = async () => {
  try {
    const filePath = '/home/miracle/Downloads/SGoutham_Resume.pdf';
    const dataBuffer = fs.readFileSync(filePath);
    const data = await PdfParse(dataBuffer);

    return data.text;

  } catch (error) {
    console.error("Error parsing PDF:", error);
    throw error; // Rethrow the error to handle it in generate()
  }
};

const generate = async () => {
  try {
    const resumeData = await parsePdf();

    const prompt = `You are an intelligent assistant designed to analyze resumes and job descriptions. Given a candidate's resume and a job description, Could you please analyze it and extract the following fields:

    candidate's contact information, including: - Name - Phone Number - Email Address - LinkedIn Profile (if available) - GitHub Profile (if available)
    2. Compare the candidate's skills with the required skills in the job description 
    and provide a match score out of total no. Of skills mentioned in the job description based on the number of required skills present in the resume.
    If the number of skills required are 3 and the number of matched skills is 1 then the score (1/3)*10 which is 3.33.
    Give the decimal value. So you should return 3.33. 
    3. Please return your response as a JSON object in the following format:
    {
      "Candidate_Name": "<Full name of the candidate>",
      "Contact_Info": {
        "Phone_Number": ["<Array of Phone number>"],
        "Email": "<Email address>",
        "LinkedIn": "<Linkedin link>",
        "GitHub": "<Github link>"
      },
      "Score": <Give the calculated score on the scale of 10>,
      "Required skills": ["<Array of skills mentioned in the job description each skill in the array should be string>"],
      "Matched skills": ["<Array of skills that are matched with the job description each skill in the array should be string>"]
    }
    Ensure the JSON string is correctly formatted without backticks or any special characters;
    Here is an example job description and the corresponding resume. Please provide the output as described above.
    **Job Description:** [Position: Full Stack Developer
    Location: [Insert Location]
    Job Type: [Full-time/Part-time/Contract]
    Job Summary: We are looking for a highly skilled and motivated Full Stack Developer to join our dynamic team. The ideal candidate will have a strong background in web development, with expertise in React, MongoDB,Angular js,Django and Node.js. You will be responsible for designing, developing, and maintaining high-quality web applications that meet our clients' needs.
    ]
    **Resume:** 
    ${resumeData}
    Don't add any extra skills in resume and job description. Just compare the skills in job description with resume.
    Ensure the JSON string is correctly formatted without backticks or any special characters.`;

    const result = await geminiModel.generateContent(prompt);
    const response = result.response;
    console.log(response.text());

  } catch (error) {
    console.error("Error generating content:", error);
  }
};

export default generate;