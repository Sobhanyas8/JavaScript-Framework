import { User } from "./models/User";


const user = new User({name: "John", age: 23});

user.save();