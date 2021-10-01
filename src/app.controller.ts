import { Controller, Get, Post } from '@nestjs/common';
import { Photo } from './photo.entity';
import { AppService } from './app.service';

@Controller('photo')
export class AppController {
  constructor(private readonly photoService: AppService) {}

  @Get()
  findAll(): Promise<Photo[]> {
    return this.photoService.findAll();
  }

  @Post()
  create(): Promise<Photo> {
    return this.photoService.create();
  }
}