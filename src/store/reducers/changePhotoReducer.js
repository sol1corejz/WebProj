let defaultState = {
    userId: 0,
    photoLink: ''
}

const CHANGE_PHOTO = 'CHANGE_PHOTO';

export const changePhotoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_PHOTO:
            return {...state, userId: action.id, photoLink: action.link}
        default:
            return state
    }
}


export const changePhotoAction = (data) => {
    return {type: CHANGE_PHOTO, link: data.avatar, id: data.id}
}
