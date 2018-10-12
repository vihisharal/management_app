
const state ={
  users :['vishal@mail.com','rahul@mail.com','vishal','rahul'],
  passwords:['pass','pass','code','code'],
  auth:false
}

const isValid= (user,pass) => {
  const {users,passwords} = state;
  // eslint-disable-next-line
  const res= users.find(function(cur,index){
    if(cur===user && passwords[index]===pass){
      return true;
    }
  });
  console.log(state);
  res? state['auth']=true : state['auth']=false;
  console.log(state);
  return (res? true : false);
}
const isAuth= () => {
  return state.auth? true : false;
}

export {isAuth}
export default isValid; 