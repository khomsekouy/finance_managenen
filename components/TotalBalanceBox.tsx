import React from "react";
import AnimatedCounter from "./AnimatedCounter";
import DoughuntChart from "./DoughuntChart";

const TotalBalanceBox = ({
  accounts = [],
  totalBanks,
  totalCurrentBalance,
}: TotlaBalanceBoxProps) => {
  return (
    <section className="total-balance">
      <div className="total-balance-chart">
        <DoughuntChart accounts={accounts} />
      </div>

      <div className="flex flex-col gap-6">
        <h2 className="header-2">Bank Account: {totalBanks}</h2>
        <div className="flex flex-col gap-2 ">
          <p className="total-balance-lablel">Total Current Balance</p>

          <div className="total-balance-amount flex-center gap-2">
            {/* <CountUp end={totalCurrentBalance} /> */}
            <AnimatedCounter amount={totalCurrentBalance} />
            {/* {formatAmount (totalCurrentBalance)} */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TotalBalanceBox;
