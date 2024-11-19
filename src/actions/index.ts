import { getGreeting } from './greetings/get-greeting.action';
import { updatePostLikes } from './greetings/update-likes.action';
import { getPostLikes } from './posts/get-post-likes.action';

export const server = {
    getGreeting,
    getPostLikes,
    updatePostLikes,
}