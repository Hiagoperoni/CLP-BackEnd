import { Body, Controller, Post } from "@nestjs/common";
import { PostAuthLoginDTO } from "./authDTO/post-loginDTO";
import { PostAuthRegisterDTO } from "./authDTO/post-registerDTO";
import { PostAuthForgetDTO } from "./authDTO/post-forgetDTO";
import { PostAuthResetDTO } from "./authDTO/post-resetDTO";
import { UsersService } from "src/Users/users.service";
import { AuthService } from "./auth.service";

@Controller('auth')
export class AuthController {
  constructor (
    private readonly userService: UsersService,
    private readonly authService: AuthService,
  ) {}

  @Post('login')
  async login(@Body() { email, password }: PostAuthLoginDTO) {
    return this.authService.login(email, password);
  }

  @Post('register')
  async register(@Body() body: PostAuthRegisterDTO) {
    return this.userService.createClient(body);
  }

  @Post('forget')
  async forget(@Body() { email }: PostAuthForgetDTO) {
    return this.authService.forget(email);
  }

  @Post('reset')
  async reset(@Body() { password, token }: PostAuthResetDTO) {
    return this.authService.reset(password, token);
  }
}