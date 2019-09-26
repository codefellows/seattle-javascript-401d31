import uuid from 'uuid/v4';

export class Message {
  constructor(content, userId = null) {
    this.id = uuid();
    this.content = content;
    this.userId = userId;
    this.createdAt = new Date();
  }
}
