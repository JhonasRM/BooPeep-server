class User {
    name: String
    email: String
    password: any
    phone: number
    course: String
    constructor(name: String, email: String, password: any, phone: number, course: String) {
        this.name = name
        this.email = email
        this.password = password
        this.phone = phone
        this.course = course
    }
}

export default User