import { Controller, Get, StreamableFile } from '@nestjs/common';
import { createReadStream } from 'fs';
import { join } from 'path';
import { Stream } from 'stream';
import { AppService } from './app.service';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(): StreamableFile {
    const file = createReadStream(join(process.cwd(), 'image.jpeg'));
    return new StreamableFile(file);
  }
}
