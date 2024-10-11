import { App } from '@/app';
import { AuthRoute } from '@routes/auth.route';
import { UserRoute } from '@routes/users.route';
import { ValidateEnv } from '@utils/validateEnv';

ValidateEnv();

const routes = [new UserRoute(), new AuthRoute()];
const app = new App(routes);

app.listen();
