let em = prompt('Write your e-mail', '');
const minemLength = 6;
const minpassLength = 5;

if (em === '' || em === null){ 
    alert('Canceled');
} else if (em.length < minemLength) {
    alert('I don\'t know any emails having name length less than 6 symbols');
} else if (em === 'user@gmail.com' || em === 'admin@gmail.com' ) {
   let pass = prompt('Write your password','');
   if (pass === '' || pass === null){
    alert('Canceled');
    } else {
        switch(em) {
            case 'user@gmail.com' :
                if(pass === 'UserPass'){
                    if(confirm('Do you want to change your password?')) {
                        let oldpass = prompt('Write the old password');
                        if(oldpass === '' || oldpass === null) {
                            alert('Canceled');
                        }
                        if (oldpass === 'UserPass') {
                            let newpass = prompt('Write new password','');
                            if (newpass.length < minpassLength) {
                                alert('It’s too short password. Sorry.');
                            } else {
                                prompt('Write new password again') === newpass ?
                                 alert('You have successfully changed your password.') :
                                 alert('You wrote the wrong password.');
                            }
                            }
                        } else {
 alert('You have failed the change'); 
}
                } else {
 alert('Wrong password'); 
}
                break; 
            case 'admin@gmail.com' :
                    if(pass === 'AdminPass'){
                        if(confirm('Do you want to change your password?')) {
                            let oldpass = prompt('Write the old password');
                            if(oldpass === '' || oldpass === null) {
                                alert('Canceled');
                            }
                            if (oldpass === 'AdminPass') {
                                let newpass = prompt('Write new password','');
                                if (newpass.length < minpassLength) {
                                    alert('It’s too short password. Sorry.');
                                } else {
                                    prompt('Write new password again') === newpass ?
                                     alert('You have successfully changed your password.') :
                                     alert('You wrote the wrong password.');
                                }
                                }
                            } else {
     alert('You have failed the change'); 
    }
                    } else {
     alert('Wrong password'); 
    }
                    break;
                    default : break; 
        }
    }
    } else {
    alert('I don’t know you');
}
