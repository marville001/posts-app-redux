import {
    CREATE_POST_ACTION,
    DELETE_POST_ACTION,
    LIKE_POST_ACTION,
    LOAD_POST_ACTION,
} from "../types";

const initialState = {
    posts: [],
    name: "Awesome App",
};

export const postReducer = (state = initialState, action) => {
    // if (action.type === CREATE_POST_ACTION) {
    //     return { ...state, posts: [...state.posts, action.post] };
    // } else {
    // 	 return state
    // }

    switch (action.type) {
        case LOAD_POST_ACTION:
            return { ...state, posts: action.posts };
        case CREATE_POST_ACTION:
            return { ...state, posts: [...state.posts, action.post] };
        case DELETE_POST_ACTION:
            const newPosts = state.posts.filter(
                (post) => post.id !== action.id
            );
            return { ...state, posts: newPosts };
        case LIKE_POST_ACTION:
            const tempPosts = [...state.posts];
            const updatedPosts = tempPosts.map((p) => {
                if (p.id === action.id) {
                    p.likes = p.likes === 0 ? 1 : 0;
                }
                return p;
            });
            return { ...state, posts: updatedPosts };
        default:
            return state;
    }
};
