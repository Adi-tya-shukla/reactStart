function TotalAmount(props) {
    var total = 0;
    for (let i = 0; i < props.expenses.length; i++) {
      total += parseFloat(props.expenses[i].amount);
    }
    return (
      <>
        {total}
      </>
    );
  }
  export default TotalAmount;