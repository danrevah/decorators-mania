import "reflect-metadata"; // this shim is required
import {createKoaServer} from 'routing-controllers';
import {UserController} from "./UserController";

// creates express app, registers all controller routes and returns you express app instance
const app = createKoaServer({
  controllers: [UserController] // we specify controllers we want to use
});

// run express application on port 3000
app.listen(3000);