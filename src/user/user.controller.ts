import { Controller, Get, Post, Body, Param, Put, Delete, HttpException, HttpStatus } from '@nestjs/common';
import { UserService } from './user.service';
import { Prisma, User } from '@prisma/client';

@Controller('users')
export class UserController {
  constructor(private readonly userService: UserService) {}

  @Post()
  async createUser(@Body() data: Prisma.UserCreateInput): Promise<User> {
    return this.userService.createUser(data);
  }

  @Post('login')
  async login(@Body() data: { email: string; password: string }): Promise<User> {
    const { email, password } = data;
    const user = await this.userService.validateUser(email, password);
    if (!user) {
      throw new HttpException('Invalid email or password', HttpStatus.UNAUTHORIZED);
    }
    return user;
  }

  @Get()
  async getUsers(): Promise<User[]> {
    return this.userService.getUsers();
  }

  @Get(':id')
  async getUserById(@Param('id') id: string): Promise<User | null> {
    return this.userService.getUserById(+id);
  }

  @Put(':id')
  async updateUser(@Param('id') id: string, @Body() data: { name?: string; email?: string; age?: number; country?: string; city?: string; }): Promise<User> {
    return this.userService.updateUser({ where: { id: +id }, data });
  }

  @Put(':id/update-password')
  async updatePassword(@Param('id') id: string, @Body() data: { oldPassword: string; newPassword: string }): Promise<User> {
    try {
      return await this.userService.updatePassword(+id, data.oldPassword, data.newPassword);
    } catch (error) {
      throw new HttpException(error.message, HttpStatus.BAD_REQUEST);
    }
  }

  @Delete(':id')
  async deleteUser(@Param('id') id: string): Promise<User> {
    const user = await this.userService.getUserById(+id);
    if (!user) {
      throw new HttpException('User not found', HttpStatus.NOT_FOUND);
    }
    return this.userService.deleteUser({ id: +id });
  }
}