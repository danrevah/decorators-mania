import {Controller, Get, Req, Res} from "routing-controllers";

@Controller()
export class UserController {

  @Get("/users")
  getAll(@Req() request: any, @Res() response: any) {
    return "x";
  }

}