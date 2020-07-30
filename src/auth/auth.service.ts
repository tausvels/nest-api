import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { LoginDTO, RegistrationDTO } from 'src/models/user.dto';

@Injectable()
export class AuthService {

  // constructor(){}
  private mockUser = {
    email: 'test@test.com',
    toke: 'jwt.token.here',
    username: 'Tausif',
    image: null
  }

  register(credentials: RegistrationDTO) {
    return this.mockUser;
  }

  login( credentials: LoginDTO ) {
    if (credentials.email === this.mockUser.email) {
      return this.mockUser
    }
    throw new InternalServerErrorException();
  }

}
