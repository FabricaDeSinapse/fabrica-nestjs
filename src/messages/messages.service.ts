import { Injectable } from '@nestjs/common';
import { Message } from './Message';

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

  create(message: Message) {
    return this.messages.push(message);
  }

  update(id: number, message: Message) {
    const index = this.messages.findIndex((message) => message.id === id);

    this.messages[index] = message;

    return message;
  }

  delete(id: number) {
    const index = this.messages.findIndex((message) => message.id === id);

    delete this.messages[index];
  }
}
