import { Controller, Get } from '@nestjs/common';

@Controller('messages')
export class MessagesController {
  @Get()
  findAll() {
    return [
      {
        id: 1,
        text: 'Primeira mensagem',
      },
      {
        id: 2,
        text: 'Segunda mensagem',
      },
    ];
  }
}
