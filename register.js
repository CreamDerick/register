let txtUsername = document.querySelector("#txtUsername");
        let btnRegister = document.querySelector("#btnRegister");
        let txtPassword = document.querySelector("#txtPassword");
        let txtConfirmPassword = document.querySelector("#txtConfirmPassword");
        
        btnRegister.onclick = function () {
            register(txtUsername.value, 
                txtPassword.value, 
                txtConfirmPassword.value)
        }
        function register (username, password, confirmpassword) {
            // if...else...
            // conditional operators (greater than >, less than <, equal ==, not !, or ||
            // greater than or equal >=, less than or equal<=
            // not equal !=

        if(password == confirmpassword && password != "" && confirmpassword != "") {
                return console.log("Password match!")
        } else if (password == "" || confirmpassword =="") {
            return console.log("Password must not be empty")
        }
        else {
            return console.log("Password does not match")
        }
            
        
        
            console.log(username, password, confirmpassword)
        }