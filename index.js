// Please install OpenAI SDK first: `npm install openai`

import OpenAI from "openai";

const openai = new OpenAI({
        baseURL: 'https://api.deepseek.com/v1',
        apiKey: 'sk-f52bdcfa85f243ea991e0b44af317d1b'
});

async function main() {
    const chatCompletion = await openai.chat.completions.create({
        model: "deepseek-v2",
        messages: [{ role: "user", content: "سلام!" }],
      });
  console.log(completion.choices[0].message.content);
}

main();