import {Body, Controller, Get, Post, Req, Res} from 'routing-controllers';
import {User} from './entity/User';
import {serialize} from 'typeserializer';
import {createConnection} from 'typeorm';
import {Connection} from 'typeorm/connection/Connection';


@Controller()
export class UserController {

  connection: Promise<Connection>;

  constructor() {
    // generates a connection using `ormconfig.json`, we configured earlier.
    this.connection = createConnection();
  }

  @Get("/users")
  async getAll(@Req() request: any, @Res() response: any) {
    const connection = await this.connection;
    return connection.manager.find(User);
  }

  @Post("/user")
  async post(@Body() body: any) {
    const user = new User();

    user.firstName = body.firstName;
    user.lastName = body.lastName;
    user.age = body.age;
    user.password = body.password;

    const connection = await this.connection;
    await connection.manager.save(user);

    return user;
  }

}