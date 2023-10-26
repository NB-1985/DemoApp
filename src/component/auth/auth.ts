
export const isLoggedIn=()=>{
    let tokenData=localStorage.getItem("token")
    if(tokenData) return true ;
    else return false;
}
