import { LinkedNode } from './node.class';

export class LinkedList {
  constructor(public headNode?: LinkedNode) {
    if (!headNode) {
      this.headNode = null;
    }
  }

  // append(data: unknown): LinkedList {

  // }
}
