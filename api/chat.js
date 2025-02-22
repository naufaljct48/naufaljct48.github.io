import { GoogleGenerativeAI } from "@google/generative-ai";

const CV_URL = "https://naufaljct48.github.io/public/Resume.pdf";

const BASE_PROMPT = `You are Naufal's AI Assistant for his portfolio website. Here's what you need to know about Naufal:

Background:
- Full Name: Naufal Aziz Albaaqie
- Education: Bachelor in Information Systems from Universitas Raharja (2018-2023)
- Current Role: Full-Stack Developer at RS Kanker Dharmais (January 2024 - Present)

Work Experience:
1. RS Kanker Dharmais (Jan 2024 - Present):
   - Developed AIS (AI Agent Dharmais)
   - Created ATiDar (Blood Transfusion Application)
   - Built Regforis (Hospital Formulary Registration)
   - Developed SiKevin (Patient Finance & Verification System)

2. PD. BATARA MEMBANGUN (Jan 2023 - Dec 2023):
   - Designed engaging landing pages using WordPress CMS
   - Enhanced user engagement and digital footprint
   - Supported online interaction and brand visibility

3. DEKAVAPE (Jun 2020 - Jan 2022):
   - Founded and managed a successful vape shop business
   - Developed Point of Sales (PoS) system
   - Managed MySQL database for inventory

4. TURBO PANEL (Feb 2016 - Feb 2017):
   - Built social media marketing website
   - Integrated social media APIs
   - Managed MySQL database

Organization:
1. Enclavium (Oct 2024 - Present):
   - Developer working on Solana blockchain projects
   - Built various trading and tracking tools

Connect with Naufal:
- LinkedIn: linkedin.com/naufal-aziz/
- GitHub: github.com/naufaljct48
- Instagram: @naufal.xhtml
- Twitter: @SOLNopool

As an AI assistant, you should:
1. Provide accurate information about Naufal's background and experience
2. Be professional yet friendly in responses
3. Be concise but informative
4. If asked about personal or sensitive information, politely decline to answer
5. For more detailed information, refer to his CV at ${CV_URL}
6. If unsure about something, suggest contacting Naufal directly
7. When asked about connecting with Naufal, provide his relevant social media links`;

const chatHistories = new Map();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  try {
    if (!process.env.GEMINI_API_KEY) {
      throw new Error("GEMINI_API_KEY is not configured");
    }

    const {
      message,
      isFirstMessage,
      sessionId = Date.now().toString(),
    } = req.body;

    if (!message) {
      return res.status(400).json({ error: "Message is required" });
    }

    const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
    const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" });

    let chat;
    try {
      if (chatHistories.has(sessionId)) {
        chat = chatHistories.get(sessionId);
      } else {
        chat = model.startChat({
          history: [
            {
              role: "user",
              parts: [{ text: BASE_PROMPT }],
            },
            {
              role: "model",
              parts: [
                {
                  text: "I understand my role. I will assist visitors with information about Naufal and can refer them to his CV for more details.",
                },
              ],
            },
          ],
        });
        chatHistories.set(sessionId, chat);
      }

      const result = await chat.sendMessage([{ text: message }]);
      const response = await result.response;

      return res.status(200).json({
        response: response.text(),
        sessionId,
      });
    } catch (chatError) {
      console.error("Chat Error:", chatError);
      throw new Error("Failed to process chat message");
    }
  } catch (error) {
    console.error("Error:", error);
    return res.status(500).json({
      error: "Internal server error",
      message: error.message,
    });
  }
}
