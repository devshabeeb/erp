import { Controller, Get } from '@nestjs/common';
import { User } from './user.schema';
import { UsersService } from './users.service';

@Controller('admin/users')
export class UsersController {
  constructor(private userService: UsersService) {}
  @Get()
  async findAll(): Promise<User[]> {
    return await this.userService.findAll();
  }
}
