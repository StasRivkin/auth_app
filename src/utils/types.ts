interface User {
    login: string,
    firstName: string,
    lastName: string,
}

export interface UserProfile extends User {
    roles: string[],
}

export interface UserRegistration extends User {
    password: string,
}

export interface State{
    user: UserProfile,
    token: string,
}



