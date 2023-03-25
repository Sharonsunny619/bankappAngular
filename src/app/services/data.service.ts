import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

//global overloading headers
const option={
 headers : new HttpHeaders()
}

@Injectable({
  providedIn: 'root'
})
export class DataService {
  
  // currentuser=''
  // currentacno=''
  // userDetails:any
  constructor(private http:HttpClient) {
    // this.getdetails()
   }
  // savedetails(){
  //   if(this.userDetails){
  //     localStorage.setItem("database",JSON.stringify(this.userDetails))
  //   }
  //   if(this.currentuser){
  //     localStorage.setItem("currentuser",JSON.stringify(this.currentuser))
  //   }
  //   if(this.currentacno){
  //     localStorage.setItem("currentacno",JSON.stringify(this.currentacno))
  //   }
  // }
  // getdetails(){
  //   if(localStorage.getItem('database')){
  //     this.userDetails=JSON.parse(localStorage.getItem('database')||'')
  //   }
  //   if(localStorage.getItem('currentuser')){
  //     this.currentuser=JSON.parse(localStorage.getItem('currentuser')||'')
  //   }
  //   if(localStorage.getItem('currentacno')){
  //     this.currentacno=JSON.parse(localStorage.getItem('currentacno')||'')
  //   }
  // }
  // userDetails:any={
  //   1000:{acno:1000,username:"anu",password:123,balance:0,transaction:[]},
  //   1001:{acno:1001,username:"amal",password:123,balance:0,transaction:[]},
  //   1002:{acno:1002,username:"arun",password:123,balance:0,transaction:[]},
  //   1003:{acno:1003,username:"mega",password:123,balance:0,transaction:[]}
  // }


  gettoken(){
    const token=JSON.parse(localStorage.getItem('token') || '')
    
    let headers=new HttpHeaders()
    if(token){
     option.headers= headers.append('access-token',token)

    }
    return option
  }

  register(acno:any,uname:any,psw:any){
    const data={
     
      acno,uname,psw
       //thunder client key
    }
    return this.http.post('http://localhost:3000/register',data)
  }
    // var userDetails=this.userDetails
    // if(acno in userDetails){
    //   return false
    // }
    // else{
    //   userDetails[acno]={acno,username:uname,password:psw,balance:0,transaction:[]}
    //   console.log(userDetails);
    //   this.savedetails()
    //   return true
      
    // }
  




login(acno:any,psw:any){
  const data={
     acno,psw
  }
  return this.http.post('http://localhost:3000/login',data)
}
  // var userDetails=this.userDetails
  // if(acno in userDetails){
  //    if(psw==userDetails[acno]["password"]){
  //     this.currentacno=acno
  //     //store username
  //     this.currentuser=userDetails[acno]["username"]
  //     this.savedetails()
  //     return true
  //    }
  //    else{
  //      return false
  //    }
  // }
  // else{
  //  return false
  //  } 
  


deposit(acno:any,password:any,amount:any){
  const data={
    acno,psw:password,amount
 }
 return this.http.post('http://localhost:3000/deposit',data,this.gettoken())

}

 withdraw(acno:any,password:any,amount:any){
  const data={
    acno,psw:password,amount
 }
 return this.http.post('http://localhost:3000/withdraw',data,this.gettoken())
}

gettransaction(acno:any){
  const data={
    acno
 }
 return this.http.post('http://localhost:3000/transaction',data,this.gettoken())

}
deleteacc(acno:any){

 return this.http.delete('http://localhost:3000/deleteacc/'+acno,this.gettoken())

}
}



