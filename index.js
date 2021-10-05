function Spa() {

  const [userBalance, setBalance]=React.useState(1000)
  const [allUsers, setAllUsers]= React.useState([])
  const [currentUser, setCurrentUser] = React.useState()

  function currentUser1(name, email, password, balance){
    // console.log("IN the currentUser function ========")
    // console.log(name)
    // console.log(email)
    // console.log(password)
    // console.log(balance)
    // console.log("====================================")
   setAllUsers('')
  ctx.users.push({ value });
  }

  return (
    <HashRouter>
      <NavBar/>
      {/* <UserContext.Provider value={{users:[{name:'abel',email:'abel@mit.edu',password:'secret',balance:userBalance, setBalance:setBalance, passData:currentUser1}]}}> */}
      <UserContext.Provider value={{users:[{ passData:currentUser1}]}}>
        <div className="container" style={{padding: "20px"}}>
          <Route path="/" exact component={Home} />
          <Route path="/CreateAccount/" component={CreateAccount} />
          <Route path="/login/" component={Login} />
          <Route path="/deposit/" component={Deposit} />
          <Route path="/withdraw/" component={Withdraw} />
          <Route path="/balance/" component={Balance} />
          <Route path="/alldata/" component={AllData} />
        </div>
      </UserContext.Provider>      
    </HashRouter>
  );
}

ReactDOM.render(
  <Spa/>,
  document.getElementById('root')
);
