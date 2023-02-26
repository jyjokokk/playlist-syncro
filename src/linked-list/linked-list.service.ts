import { Injectable } from '@nestjs/common';
import { LinkedList } from './linked-list.class';
import { LinkedNode } from './node.class';

@Injectable()
export class LinkedListService {
  createNew(data: unknown) {
    const headNode = new LinkedNode(data);
    return new LinkedList(headNode);
  }

  // append(data: unknown) {}
}
