import { Injectable } from "@nestjs/common";
import { Strategy, ExtractJwt, VerifiedCallback } from 'passport-jwt';
import { PassportStrategy } from '@nestjs/passport';
import { AuthService } from "./auth.service";
import passport from "passport";

@Injectable()
export class JwtStrategy extends PassportStrategy (Strategy) {

  constructor(private readonly authService: AuthService) {
    super({
      jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
      secretOrKey: 'secretKey'
    });
  }

  async validate(payload: any, done: VerifiedCallback) {
    // return done(null, user, payload.iat)
    return 'hello'
  }

}