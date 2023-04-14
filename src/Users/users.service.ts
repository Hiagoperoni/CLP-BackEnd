import { Injectable } from "@nestjs/common";
import { UsersPrismaService } from "./UsersPrisma/users.prisma.service";
import UsersWhereInput from "./UsersDTO/typesUsers";

@Injectable()
export class UsersService {
  constructor(private readonly prisma: UsersPrismaService) {}

  async getAll() {
    return this.prisma.users.findMany();
  }

  async getById(clienteId: number) {
    const where: UsersWhereInput = { cliente_id: Number(clienteId) };
    return this.prisma.users.findUnique({ where });
  }

//  async switchAvailableCliente(clienteId: number, available: boolean) {
//    const where: UsersWhereInput = { cliente_id: Number(clienteId) };
//    return this.prisma.users.update({
//      where,
//     available,
//    });
//  }

}