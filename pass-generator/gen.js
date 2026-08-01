class Password{
  constructor(){
    this.pass = "";

    console.log("welcome to password generator ")
  }
  generatePassword(len){
    this.pass = "";

    let chars=" abcdefghijklmnopqrstuvwxyz";
    let nums = "0123456789";
    let special = "!@#$%^&)*(";
    if(len < 3){
      console.log("Your password should be atleast 3 characters long")
    }
    else{
      let i = 0;
      while(i < len){
        this.pass += chars[Math.floor(Math.random () * chars.length)]
        this.pass += nums[Math.floor(Math.random () * nums.length)] 
        this.pass += special[Math.floor(Math.random () * special.length)]
        i += 3
      }
      this.pass = this.pass.substr( 0,len)
      return this.pass

    }
  }
}
let p = new Password()
console.log(p.generatePassword(10))