function Deposit(){
   
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  
  const [depositAmount, setName]    = React.useState('');
  const [deposit, setDeposit] = React.useState('');
  const ctx = React.useContext(UserContext);  

  function digitalInput(field, label){
      if (!field) {
        setStatus('Success: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    console.log("+++++++")
    console.log(ctx.users[0].setBalance(ctx.users[0].balance+deposit))
    console.log("++++++++")
    console.log(deposit);
    if (!digitalInput (depositAmount,    'Your balance got updated!!!'))     return;  //changed message
        ctx.users.push({depositAmount,balance:100});
    setShow(false);
  }    

  function checkPos(e){
    console.log(e.target.value)
    if(e.target.value>=0){
      setDeposit(Number(e.target.value))  //added Number () to convert input string to number
    }else{
      console.log("enter a positive value")
    }
   // e => setDeposit(e.currentTarget.value
    console.log("YOU HIT THIS FUNCTION")
  }

  function clearForm(){
    setName('');
      setShow(true);
  }; 
    return(
    <Card
    bgcolor="info"
    txtcolor="light"
    header={`🏛 Balance ${ctx.users[0].balance}`}
    status={status}
    body={show ? (  
            <>
           
            Deposit amount<br/>
            <input type="number" className="form-control" id="deposit" placeholder="Enter amount" value={deposit} onChange={checkPos}/><br/>   
            <button type="submit" className="btn btn-light" onClick={handleCreate}>Deposit </button>
            </>
          ):(
            <>
            <h5>Success</h5>
            <button type="submit" className="form-control"  data-toggle="tooltip" data-placement="bottom" title="Proceed to adding another account" onClick={clearForm}>Add another account</button>
            </>
          )}
  />
    )
          }
