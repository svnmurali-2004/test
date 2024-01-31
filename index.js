function onSignIn(googleUser) {
            console.log("script func started")
            var profile = googleUser.getBasicProfile();
            console.log('ID: ' + profile.getId());
            console.log('Name: ' + profile.getName());
            console.log('Image URL: ' + profile.getImageUrl());
            document.getElementById("name").innerHTML= profile.getEmail();
            
            // You can add more functionality here, such as redirecting the user or displaying their information.
        }
