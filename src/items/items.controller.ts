import { Controller, Get, Post, Put, Delete, Body, Req, Res, Param } from '@nestjs/common';
import { Request, Response } from 'express';
import { CreateItemDto } from './dto/create-item.dto';
import { ItemsService } from './items.service';
import { Item } from './interfaces/item.interface';

@Controller('items')
export class ItemsController {

  // in order to use ItemService, it needs to be injected as a dependency and it is done by the constructor
  constructor(private readonly itemService: ItemsService) {}

  @Get()
  findAll(): Promise<Item[]> {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne( @Param("id") id:string): Promise<Item> {
    return this.itemService.findOne(id)
  }


  @Get('reqres')
  someFunction(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    console.log(process.env.mongoURI)
    return res.send('This is the reqres route')
  }

  @Post()
  create( @Body() createItemDto: CreateItemDto ): Promise<Item> {
    return this.itemService.create(createItemDto)
  }
  
  @Put(":id")
  update( @Body() updateItemDto: CreateItemDto, @Param('id') id:string ): Promise<Item> {
    return this.itemService.update(id, updateItemDto);
  }


  @Delete(":id")
  delete(@Param("id") id:string): Promise<Item> {
    return this.itemService.delete(id)
  }

}
