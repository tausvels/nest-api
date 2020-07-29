import { Injectable } from '@nestjs/common';
import { Item }  from './interfaces/item.interface';

@Injectable()
export class ItemsService {

  private readonly items: Item[] = [
    {id: "123", name: 'Item 1', description: 'Some description', qty: 100},
    {id: "456", name: 'Item 2', description: 'Some description', qty: 50},
    {id: "789", name: 'Item 3', description: 'Some description', qty: 300}
  ];

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: string): Item {
    return this.items.find(item => item.id === id)
  }

}
