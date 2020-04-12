import Drash from "../mod.ts";
// Resources
import CoffeeResource from "./coffee_resource.ts";
import CookieResource from "./cookie_resource.ts";
import FilesResource from "./files_resource.ts";
import HomeResource from "./home_resource.ts";
import MiddlewareResource from "./middleware_resource.ts";
import UsersResource from "./users_resource.ts";
// Middleware
import Middleware from "./middleware.ts";

let server = new Drash.Http.Server({
  address: "localhost:1447",
  directory: Deno.realpathSync("./"),
  response_output: "application/json",
  logger: new Drash.CoreLoggers.ConsoleLogger({
    enabled: true,
    level: "debug"
  }),
  middleware: {
    resource_level: [
      Middleware,
    ],
  },
  memory_allocation: {
    multipart_form_data: 128,
  },
  pretty_links: true,
  resources: [
    CoffeeResource,
    CookieResource,
    FilesResource,
    HomeResource,
    MiddlewareResource,
    UsersResource,
  ],
  static_paths: ["/public"],
});

export default server;
