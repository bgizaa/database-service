import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Photo } from './photo.entity';

@Module({
  imports: [    TypeOrmModule.forRoot(),TypeOrmModule.forFeature([Photo])],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
