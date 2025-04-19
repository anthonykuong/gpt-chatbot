import { Injectable } from '@nestjs/common';
import axios, { AxiosError } from 'axios';
import * as dotenv from 'dotenv';
dotenv.config();

@Injectable()
export class GptService {
  async generateResponse(prompt: string): Promise<string> {
    const apiKey = process.env.OPENROUTER_API_KEY;
    const endpoint = 'https://openrouter.ai/api/v1/chat/completions';

    try {
      const response = await axios.post(
        endpoint,
        {
          model: 'mistralai/mistral-7b-instruct', // FREE model
          messages: [
            { role: 'user', content: prompt },
          ],
        },
        {
          headers: {
            'Content-Type': 'application/json',
            Authorization: `Bearer ${apiKey}`,
            'HTTP-Referer': 'https://github.com/anthonykuong/gpt-chatbot',
            'X-Title': 'GPT Chatbot Demo',
          },
        },
      );

      return response.data.choices[0].message.content;
    } catch (error: unknown) {
      // Typecast error as AxiosError
      const axiosError = error as AxiosError;
      console.error('🔥 OpenRouter API Error:', axiosError.response?.data || axiosError.message);
      return 'Sorry, something went wrong with the AI response.';
    }
  }
}
