function Withdraw() {
  const [show, setShow] = React.useState(true);
  const [status, setStatus] = React.useState("");

  const [withdrawAmount, setName] = React.useState("");
  const [withdraw, seWithdraw] = React.useState("");
  const ctx = React.useContext(UserContext);

  function validate(field, label) {
    if (!field) {
      setStatus("Success: " + label);
      setTimeout(() => setStatus(""), 3000);
      return false;
    }
    return true;
  }

  function handleCreate() {
    console.log("*******");
    // console.log(withdrawAmount);
    console.log(Number(ctx.users[0].setBalance(Number(ctx.users[0].balance - withdraw)))); // balance updates at every withdraw
    console.log("******");
    if (
      !validate(
        withdrawAmount,
        `Your balance got updated!!! Current total: ${
          Number(ctx.users[0].balance - withdraw)
        }`
      )
    )
      return; //changed message

    Number(ctx.users.push({ withdrawAmount, balance }));
    setShow(false);
  }

  function checkPos(e) {
    console.log(e.target.value);
    if (e.target.value >= 0) {
      seWithdraw(Number(e.currentTarget.value)); //added Number () to convert input string to number
    } else {
      console.log("enter a positive value");
    }
    // e => seWithdraw(e.currentTarget.value
    console.log("YOU HIT THIS FUNCTION");
  }

  function clearForm() {
    setName("");
    setShow(true);
  }
  return (
    <Card
      bgcolor="info"
      txtcolor="light"
      header={`🏛 Balance ${Number(ctx.users[0].balance)}`} // displayed balance amount
      status={status}
      body={
        show ? (
          <>
            Withdraw amount
            <br />
            <input
              type="number"
              className="form-control"
              id="withdraw"
              placeholder="Enter amount"
              value={withdraw}
              onChange={checkPos}
            />
            <br />
            <button
              type="submit"
              className="btn btn-light"
              onClick={handleCreate}
            >
              Withdraw{" "}
            </button>
          </>
        ) : (
          <>
            <h5>Success</h5>
            <button
              type="submit"
              className="btn btn-light"
              data-toggle="tooltip"
              data-placement="bottom"
              title="Proceed to withdraw funds"
              onClick={clearForm}
            >
              Withdraw
            </button>
          </>
        )
      }
    />
  );
}
