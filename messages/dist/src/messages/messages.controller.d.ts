import { CreateMessageDto } from './dtos/create-message.dto';
import { MessagesService } from './messages.services';
export declare class MessagesController {
    messagesService: MessagesService;
    constructor(messagesService: MessagesService);
    listMessages(): any;
    createMessage(body: CreateMessageDto): any;
    getMessage(id: string): Promise<any>;
}
