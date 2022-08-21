const update = (user) => {
    return {
        type:'userInfo/Update',
        payload: user
    }
}
const userLogout = () => {
    return {
        type:'userInfo/userLogout',
    }
}

export {update, userLogout};
