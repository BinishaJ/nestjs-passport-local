import { Controller, Get, Request, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport/dist';

@Controller('app')
export class AppController {
  constructor() {}

  @Get()
  @UseGuards(AuthGuard('local'))
  getHello(@Request() req): object {
    return req.user;
  }
}
