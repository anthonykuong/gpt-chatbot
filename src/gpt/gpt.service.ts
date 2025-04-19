import { Injectable } from '@nestjs/common';
import axios from 'axios';
import * as dotenv from 'dotenv';

dotenv.config();

@Injectable()
export class GptService {
  async generateResponse(prompt: string): Promise<string> {
    const apiKey = process.env.OPENAI_API_KEY;

    console.log('🔑 Using OpenAI API key:', apiKey?.slice(0, 5) + '...');

    try {
      const response = await axios.post(
        'https://api.openai.com/v1/chat/completions',
        {
          model: 'gpt-3.5-turbo', // safer default; change to 'gpt-4' if your key supports it
          messages: [{ role: 'user', content: prompt }],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
          },
        },
      );

      return response.data.choices[0].message.content.trim();
    } catch (error: any) {
      console.error('🔥 OpenAI API Error:', error.response?.data || error.message);
      return 'Oops! Failed to get a response from the AI.';
    }
  }
}
