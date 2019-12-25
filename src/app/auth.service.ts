export class AuthService{
  loggedIn = false;

  isAuthenticated(){
    const promise = new Promise(
      (resolve, rject) => {
        setTimeout(()=>{
          resolve(this.loggedIn);
        },500);
      }
    );
    return promise;
  }

  logIn(){
    this.loggedIn = true;
    console.log('login');
  }

  logOut(){
    this.loggedIn = false;
    console.log('logout')
  }

}
