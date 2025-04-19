import { Controller, Get, Query } from '@nestjs/common';
import { GptService } from './gpt.service';

@Controller('gpt')
export class GptController {
  constructor(private readonly gptService: GptService) {}

  @Get()
  async ask(@Query('prompt') prompt: string): Promise<{ response: string }> {
    const response = await this.gptService.generateResponse(prompt);
    return { response };
  }
}