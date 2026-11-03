import { GoogleGenerativeAI } from "@google/generative-ai";

const CV_URL = "https://naufaljct48.vercel.app/Resume.pdf";

const BASE_PROMPT = `You are Naufal's AI Assistant for his portfolio website. Here's what you need to know about Naufal:

Background:
- Full Name: Naufal Aziz Albaaqie
- Education: Bachelor of Information Systems, Raharja University (2019-2023), GPA 3.70/4.00
- Current Role: Full-Stack Developer at Dimensi Software (PT Dimensi Pratama Sukses), Aug 2025 - Present, lead developer of Dimensi HRIS
- Also: Founder & Product Engineer at Navitek (Jan 2026 - Present, part-time)

Work Experience:
1. Dimensi Software (PT Dimensi Pratama Sukses) - Full-Stack Developer (Aug 2025 - Present):
   - Lead developer of the Dimensi HRIS rebuild on Laravel 13 + Filament
   - Payroll engine with PPh21, BPJS, and SPT export
   - Flutter mobile app (Google Play and App Store)
   - Go kiosk bridge for attendance machines
   - Airis, an in-app AI agent with 17 tools and a 172-question eval suite
   - DOKU Checkout payments and the help.dimensi.id help center

2. Navitek - Founder & Product Engineer (Jan 2026 - Present, part-time):
   - Built Clippeak (400+ users in 3 months)
   - Built Cuanten, an AI content SaaS for Indonesian small businesses (cuanten.com)

3. RS Kanker Dharmais - Full-Stack Developer (Jan 2024 - Jun 2026):
   - Built an EMR platform with 20+ modules used by 500+ healthcare users
   - Advanced ATiDar into a BPOM/CPOB-certified blood transfusion application
   - Built AIS, an LLM assistant for hospital staff
   - Built AIS Kiosk, a 3D voice assistant
   - SiKevin: cut monthly service data retrieval from 30 minutes to 30 seconds

4. DreamsHive - Full-Stack Developer, Contract (May 2025 - Nov 2025):
   - Built ByteLaunch.io, a no-code Solana token deployer

5. Enclavium (DAO) - Blockchain Developer (Oct 2024 - Oct 2025):
   - Solana sniper bot, wallet tracker, and Pump.fun bundle checker

Certifications:
- Certified Application Security Engineer (Java) - EC-Council (2025)
- Belajar Dasar Pemrograman JavaScript - Dicoding (2023)
- JavaScript (Basic) - HackerRank (2023)
- Shopee Code League - Shopee (2022)

Connect with Naufal:
- Email: naufaljct48@gmail.com
- Website: naufaljct48.vercel.app
- LinkedIn: linkedin.com/in/naufal-aziz/
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
