function NavBar(){
  return(
    <>
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <a className="nav-link btn active" className="btn btn" data-toggle="tooltip" data-placement="bottom" title="Welcome to our Home Page 🏛" href="#">Home Page</a>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        
        <ul className="navbar-nav">
          <li className="nav-item">
            <a className="nav-link btn active" className="btn btn" data-toggle="tooltip" data-placement="bottom" title="Proceed to creating your account" href="#/CreateAccount/">Create Account</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#/login/">Login</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link btn active" className="btn btn" data-toggle="tooltip" data-placement="bottom" title="Deposit your funds" href="#/deposit/">Deposit</a>
          </li>
          <li className="nav-item">
            <a className="nav-link btn active" className="btn btn" data-toggle="tooltip" data-placement="bottom" title="Withdraw youy funds ✔ " href="#/withdraw/">Withdraw</a>
          </li>
          {/* <li className="nav-item">
            <a className="nav-link" href="#/balance/">Balance</a>
          </li> */}
          <li className="nav-item">
            <a className="nav-link btn active" className="btn btn" data-toggle="tooltip" data-placement="bottom" title="All data" href="#/alldata/">AllData</a>
          </li>          
        </ul>
      </div>
    </nav>
    </>
  );
}