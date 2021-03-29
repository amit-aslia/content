import React from 'react';

const Check = () => {
    const invoiceData = {
          InvoiceID: "Hkl121113",
          InvoicePeriod: "July to Aug 2020",
          PayemntDueDate: "24 March 2020",
          InvoiceStatus: "Paid",
          InvoiceClearedDate: "24 March 2020",
          TicketRevenue: "₹ 25,000",
          FnBRevenue: "₹ 35,000",
          FreightRevenue: "₹ 16,000",
          Deductions: "₹ 8,000",
          Penalty: "₹ 6,000",
          Tax: "₹ 2,000",
          InvoiceAmount: "₹ 60,000",
        };
        const { InvoiceID, InvoicePeriod, PayemntDueDate } = invoiceData;
    return (
        <div>
            {console.log(InvoiceID)}
            <div>invoiceId {InvoiceID} </div>
        </div>
    );
};

export default Check;
