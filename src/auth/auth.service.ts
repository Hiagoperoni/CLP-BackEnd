import { Injectable, UnauthorizedException, BadRequestException } from "@nestjs/common";
import { JwtService } from '@nestjs/jwt';
import { Users } from "@prisma/client";
import { UsersPrismaService } from "src/Users/UsersPrisma/users.prisma.service";
import { UsersService } from "src/Users/users.service";

@Injectable()
export class AuthService {

  private issuer = 'login';
  private audience: 'users';

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
        audience: this.audience,
        issuer: this.issuer,
      })
    }
  }

  async checkToken(token: string) {

    try {
      const authVerified =  await this.jwtService.verify(token, {
        audience: this.audience,
        issuer: this.issuer,
      }
      )
      return authVerified;
    } catch (err) {
      throw new BadRequestException(err)
    }
  }

  async isValidToken(token: string) {
    try {
      await this.checkToken(token);
      return true;
    } catch (err) {
      return false;
    }
  }

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