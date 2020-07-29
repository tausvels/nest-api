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
  findAll(): Item[] {
    return this.itemService.findAll();
  }

  @Get(':id')
  findOne( @Param("id") id:string): Item {
    return this.itemService.findOne(id)
  }


  @Get('reqres')
  someFunction(@Req() req: Request, @Res() res: Response): Response {
    console.log(req.url);
    return res.send('This is the reqres route')
  }

  @Post()
  create( @Body() createItemDto: CreateItemDto ): string {
    return `name: ${createItemDto.name} with Description: ${createItemDto.description}`
  }
  
  @Put(":id")
  update( @Body() updateItemDto: CreateItemDto, @Param('id') id:string ): string {
    return `Update with id: ${id} - Name: ${updateItemDto.name}`
  }


  @Delete(":id")
  delete(@Param("id") id:string): string {
    return `Route for deleting item with id: ${id}`
  }

}
