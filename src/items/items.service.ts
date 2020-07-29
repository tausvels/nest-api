import { Injectable } from '@nestjs/common';
import { Item }  from './interfaces/item.interface';
import { Model } from 'mongoose';
import { InjectModel } from '@nestjs/mongoose';

@Injectable()
export class ItemsService {
  /**
   * Injecting depenpdency
   * itemModel allows for functions of MongoDB to be used
   */
  constructor(@InjectModel('Item') private readonly itemModel: Model<Item> ) {}

  /**
   * HARD CODED DATA
    private readonly items: Item[] = [
     {id: "123", name: 'Item 1', description: 'Some description', qty: 100},
     {id: "456", name: 'Item 2', description: 'Some description', qty: 50},
     {id: "789", name: 'Item 3', description: 'Some description', qty: 300}
    ];
   * 
   */

  async findAll(): Promise<Item[]> {
    return await this.itemModel.find();
  };

  async findOne(id: string): Promise<Item> {
    return await this.itemModel.findOne({_id: id} )
  };

  async create(item: Item): Promise<Item> {
    const newItem = new this.itemModel(item);
    return await newItem.save();
  };

  async delete(id: string): Promise<Item> {
    return await this.itemModel.findByIdAndRemove(id)
  };

  async update(id: string, item: Item): Promise<Item> {
    return await this.itemModel.findByIdAndUpdate(id, item, {new: true})
  }

}
