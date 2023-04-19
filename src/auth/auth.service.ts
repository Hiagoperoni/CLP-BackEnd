import { Injectable, UnauthorizedException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { Users } from "@prisma/client";
import { UsersPrismaService } from "src/Users/UsersPrisma/users.prisma.service";
import { UsersService } from "src/Users/users.service";

@Injectable()
export class AuthService {

  constructor(
    private readonly jwtService: JwtService,
    private readonly prisma: UsersPrismaService,
    private readonly usersService: UsersService,
  ) {}

  async createToken(user: Users) {
    return {
      accessToken: this.jwtService.sign({
        email: user.email,
      }, {
        expiresIn: "1 day",
        subject: String(user.cliente_id),
      })
    }
  }

  async checkToken() {}

  async login(email: string, password: string) {
    const userLogin = await this.prisma.users.findFirst({
      where: {
        email, 
        password
      }
    });

    if (!userLogin) {
      throw new UnauthorizedException('E-mail e/ou senha inválido(s)');
    }

    return this.createToken(userLogin);
  }

  async register(email: string, password: string) {
    const user = await this.usersService.createClient({ email, password });

    return this.createToken(user);
  }

  async forget(email: string) {
    const user = await this.prisma.users.findFirst({
      where: {
        email, 
      }
    });

    if (!user) {
      throw new UnauthorizedException('E-mail não cadastrado');
    }

    //ENVIAR EMAIL

    return true;
  }

  async reset(password: string, token: string) {
    const id = 1;
    const user = await this.prisma.users.update({
      where: {
        cliente_id: id,
      },
      data: {
        password
      }
    });
    return this.createToken(user);
  }
}