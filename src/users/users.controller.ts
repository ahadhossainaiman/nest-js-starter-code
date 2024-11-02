import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  HttpCode,
  Ip,
  HostParam,
  Header,
  Redirect,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { HttpErrorByCode } from '@nestjs/common/utils/http-error-by-code.util';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  create(@Body() createUserDto: CreateUserDto) {
    return this.usersService.create(createUserDto);
  }

  @Get()
  @HttpCode(200)
  @Header('Cache-Control', 'none')
  // @Redirect('https://nestjs.com', 302)
  findAll(@Ip() ip: string) {
    console.log(ip);
    return this.usersService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') idi: string) {
    console.log(idi);
    return this.usersService.findOne(+idi);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.usersService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.usersService.remove(+id);
  }
}
