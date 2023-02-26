import { Controller } from '@nestjs/common';
import { LinkedListService } from './linked-list.service';

@Controller('linked-list')
export class LinkedListController {
  constructor(private readonly linkedListService: LinkedListService) {}
}
