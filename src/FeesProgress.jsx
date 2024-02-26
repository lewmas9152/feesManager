import {useState} from 'react'
import "./Progress.css";

const FeesProgress = () => {
  const [paymentProgress, setPaymentProgress] = useState({
    admNo: "",
    sem1Amount: "",
    sem1Paid: "",
    sem1Balance: "",
    sem2Amount: "",
    sem2Paid: "",
    sem2Balance: "",
    totalAmount: "",
    totalPaid: "",
    totalBalance: "",
  });

  const handlePaymentProgress = (e) => {
    setPaymentProgress((prevProgress) => {
      return {
        ...prevProgress,
        [e.target.name]: e.target.value,
      };
    });
  };

  console.log(paymentProgress)
  return (
    <>
      <main className="container">
        <header className="header">
          <div className="topLine"></div>
          <h2>PaymentProgress</h2>
          <div className="bottomLine"></div>
        </header>

        <form action="#">
          <label htmlFor="admNo">Adm.No</label>
          <input
            type="text"
            name="admNo"
            id="admNo"
            value={paymentProgress.admNo}
            onChange={handlePaymentProgress}
            required
          />
          <table className="progressTable" cellSpacing="10">
            <thead>
              <tr>
                <th></th>
                <th>Amount</th>
                <th>Paid</th>
                <th>Balance</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th>
                  <label htmlFor="sem1Paid">Semister 1</label>
                </th>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="sem1Amount"
                    id="sem1Amount"
                    value={paymentProgress.sem1Amount}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="sem1Paid"
                    id="sem1Paid"
                    value={paymentProgress.sem1Paid}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="sem1Balance"
                    id="sem1Balance"
                    value={paymentProgress.sem1Balance}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label htmlFor="sem2Paid">Semister 2</label>
                </th>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="sem2Amount"
                    id="sem2Amount"
                    value={paymentProgress.sem2Amount}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="sem2Paid"
                    id="sem2Paid"
                    value={paymentProgress.sem2Paid}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="sem2Balance"
                    id="sem2Balance"
                    value={paymentProgress.sem2Balance}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>
              </tr>

              <tr>
                <th>
                  <label htmlFor="totalPaid">Total</label>
                </th>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="totalAmount"
                    id="tAmount"
                    value={paymentProgress.totalAmount}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="totalPaid"
                    id="totalPaid"
                    value={paymentProgress.totalPaid}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>

                <td>
                  <input
                    className="progressInput"
                    type="number"
                    name="totalBalance"
                    id="totalBalance"
                    value={paymentProgress.totalBalance}
                    onChange={handlePaymentProgress}
                    required
                  />
                </td>
              </tr>

              <tr>
                <td align="right" colSpan="4">
                  <button type="Submit">Submit</button>
                </td>
              </tr>
            </tbody>
          </table>
        </form>
      </main>
    </>
  );
};

export default FeesProgress;
