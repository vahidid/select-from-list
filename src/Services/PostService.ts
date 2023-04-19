import { Post } from "../Models/Post";
import ApiClient from "./Api";

export const GetPostsService = () => ApiClient.get<Post[]>("/posts");
