import { CREATE_POST_ACTION, DELETE_POST_ACTION, LIKE_POST_ACTION, LOAD_POST_ACTION } from "../types"

export const loadPostsAction = (posts) => {
	return {
		type: LOAD_POST_ACTION,
		posts
	}
}

export const createPostAction = (newPost) => {
	return {
		type: CREATE_POST_ACTION,
		post: newPost
	}
}

export const deletePostAction = (id) => {
	return {
		type: DELETE_POST_ACTION,
		id
	}
}

export const likePostAction = (id) => {
	return {
		type: LIKE_POST_ACTION,
		id
	}
}