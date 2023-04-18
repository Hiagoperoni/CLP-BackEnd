import { Body, Controller, Get, Param, Post } from "@nestjs/common";
import { UsersService } from "./users.service";
import { CreateUserDTO } from "./UsersDTO/createUser.dto";

@Controller('users')
export class UsersController {
  
  constructor(private readonly usersService: UsersService) {}

  @Get()
  async getAll() {
    return this.usersService.getAll();
  }

  @Get(':id')
  async getById(@Param('id') id: number) {
    return this.usersService.getById(id);
  }

  @Post()
  async createUser(@Body() {email, password}: CreateUserDTO) {
    return this.usersService.createClient({email, password});
  }
}