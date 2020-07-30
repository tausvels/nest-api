import { IsEmail, IsString, MinLength } from 'class-validator'

export class LoginDTO {
  @IsEmail()
  @IsString()
  @MinLength(3)
  email: string;
  
  @IsString()
  @MinLength(3)
  password: string;
}

export class RegistrationDTO extends LoginDTO {
  @IsString()
  @MinLength(3)
  username: string;
}
