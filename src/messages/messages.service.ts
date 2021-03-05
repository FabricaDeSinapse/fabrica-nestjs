import { Injectable } from '@nestjs/common';
import { Message } from './Message';
import { MessageDto } from './MessageDto';

@Injectable()
export class MessagesService {
  private messages: Message[] = [
    {
      id: 1,
      text: 'Primeira mensagem',
    },
    {
      id: 2,
      text: 'Segunda mensagem',
    },
  ];

  findAll() {
    return this.messages;
  }

  async findById(id: number) {
    const message = this.messages.find((msg) => msg.id === id);

    if (!message) {
      throw Error(`Mensagem com o ID '${id}' não encontrada.`);
    }

    return message;
  }

  create(messageDto: MessageDto) {
    const id = this.messages.length + 1;

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages.push(message);

    return message;
  }

  async update(id: number, messageDto: MessageDto) {
    const index = this.messages.findIndex((message) => message.id === id);

    if (index < 0) {
      throw Error(`Mensagem com o ID '${id}' não encontrada.`);
    }

    const message: Message = {
      id,
      ...messageDto,
    };

    this.messages[index] = message;

    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);

    delete this.messages[index];
  }
}
