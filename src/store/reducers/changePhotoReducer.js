let defaultState = {
    photoLink: 'https://pixelbox.ru/wp-content/uploads/2021/05/ava-vk-animal-91.jpg'
}

const CHANGE_PHOTO = 'CHANGE_PHOTO';

export const changePhotoReducer = (state = defaultState, action) => {
    switch (action.type) {
        case CHANGE_PHOTO:
            return {...state, photoLink: action.data}
        default:
            return state
    }
}


export const changePhotoAction = (data) => ({type: CHANGE_PHOTO, data: data})