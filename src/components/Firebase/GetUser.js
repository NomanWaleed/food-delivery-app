import { useState } from 'react';
import {auth} from './Firebase';

export default function UseLogin() {

    const [email, setemail] = useState("");
    const [password, setpassword] = useState("");
    const [name, setname] = useState("");
    const [phone, setphone] = useState("");

    const userSignUp = () => {
        signUp(email, password);
    }
    const userLogin = () => {
        login(email, password);
        // console.log(email,password);
    }
    return [setemail, setpassword, userLogin, setname, setphone, userSignUp];
}
const login = (email, password) => {
    try {
        const userCredential = auth.signInWithEmailAndPassword(email, password)
        var user = userCredential.user;
        console.log(userCredential)

        if(user){
            console.log("User Loggged in");
        }
    } catch (error) {
        console.log("AuthActionError = ", error);
        alert("User Doesn't Exit")
    }
}
const signUp = (email, password) => {
    const userCredential = auth.createUserWithEmailAndPassword(email, password);
    var user = userCredential.user;
    console.log(user);
}