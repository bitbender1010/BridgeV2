// Email and Password Sign in
const signupForm = document.querySelector('#sign__form');
signupForm.addEventListener('submit', (e) =>{
    e.preventDefault()

    // Get user email and password
    const email = signupForm['signin__email__input'].value;
    const password = signupForm['signin__password__input'].value;

    console.log(email, password); 
    auth.signInWithEmailAndPassword(email, password).then(user =>{
        console.log("Logged In successfully: ", user.user);
        // Do other things like reset form and redirect here
    }).catch(err =>{
        console.log("An Error occured: ", err)
    })
})

// Google Auth sign in
let googleBtn = document.querySelector('#google-auth');
googleBtn.addEventListener('click', (e) =>{
    e.preventDefault();
    let provider = new firebase.auth.GoogleAuthProvider();
    provider.setCustomParameters({
        'login_hint': 'user@example.com'
    });
    auth.signInWithPopup(provider).then(res =>{
        console.log("Google Auth Success: ", res.user)
        // Do other things like reset form and redirect here
    }).catch(err =>{
        console.log(err)
    })    
})

// Sign out
const logout = document.querySelector('#logout');
logout.addEventListener('click', (e) =>{
    e.preventDefault();
    auth.signOut().then(() =>{
        console.log("user signed out")
        // Do other things like redirect here
    });
});
