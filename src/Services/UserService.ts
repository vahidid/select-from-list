import { User } from "../Models/User";
import ApiClient from "./Api";

export const GetUsersService = () => ApiClient.get<User[]>("/users");
