export default function validateInfo(values){
    let errors = {}

    if(!values.username.trim()){
        errors.username = 'Username required'
    }

    if(!values.password){
        errors.password = 'Password is required'
    }

    else if(values.password.length < 8){
        errors.password = 'Password needs to be 8 characters or more'
    }

    if(!values.email){
        errors.email = 'Email required'
    }

    else if(/^\w+([-]?\w+)*@\w+([-]?\w+)*(\w{2,3})+$/.test(values.email)){
        errors.email = 'Email address is invalid';
    }

    return errors;
}