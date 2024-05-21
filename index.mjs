import OpenAI from 'openai';
import dotenv from 'dotenv';


const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
})

const response = await openai.chat.completions.create({
  model: 'gpt-3.5-turbo',
  messages: messages
})
const messages = [
  {
    role: 'system',
    content: 'You are a helpful assistant that explains concepts understanable to high school students. Your answers are always fewer than 500 words.'
  },
  {
    role: 'user',
    content: 'What is quantam computing?'
  }
]
