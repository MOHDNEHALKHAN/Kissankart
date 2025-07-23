
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import { Button } from "../../components/index";

// Dummy order data
const order = {
  invoiceNo: "INV-1001",
  date: "2025-07-22",
  seller: {
    name: "AgroTech Farmers Pvt Ltd",
    address: "456 Seller St, Village, India",
    phone: "+91 9876543210",
    email: "seller@agrotech.com",
  },
  buyer: {
    name: "Ravi Kumar",
    address: "123 Buyer Lane, City, India",
    phone: "+91 9123456780",
    email: "ravi@example.com",
  },
  items: [
    {
      title: "Wheat Seeds",
      quantity: 10,
      price: 40,
    },
    {
      title: "Organic Fertilizer",
      quantity: 2,
      price: 150,
    },
    {
      title: "Tractor Oil",
      quantity: 1,
      price: 500,
    },
  ],
};

const generatePDF = () => {
  const doc = new jsPDF();

  doc.setFontSize(18);
  doc.text("Invoice", 105, 20, { align: "center" });

  doc.setFontSize(12);
  doc.text(`Invoice No: ${order.invoiceNo}`, 14, 30);
  doc.text(`Date: ${order.date}`, 14, 36);

  doc.text("From:", 14, 46);
  doc.text(order.seller.name, 14, 52);
  doc.text(order.seller.address, 14, 58);
  doc.text(order.seller.phone, 14, 64);
  doc.text(order.seller.email, 14, 70);

  doc.text("To:", 110, 46);
  doc.text(order.buyer.name, 110, 52);
  doc.text(order.buyer.address, 110, 58);
  doc.text(order.buyer.phone, 110, 64);
  doc.text(order.buyer.email, 110, 70);

  autoTable(doc, {
    startY: 80,
    head: [["#", "Product", "Qty", "Unit Price", "Total"]],
    body: order.items.map((item, i) => [
      i + 1,
      item.title,
      item.quantity,
      `₹${item.price}`,
      `₹${item.quantity * item.price}`,
    ]),
  });

  const total = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  doc.setFontSize(14);
  doc.text(`Grand Total: ₹${total}`, 14, doc.lastAutoTable.finalY + 10);

  doc.save(`Invoice_${order.invoiceNo}.pdf`);
};

const InvoiceGenerator = () => {
  const total = order.items.reduce(
    (acc, item) => acc + item.price * item.quantity,
    0
  );

  return (
    <div className="p-8 flex flex-col items-center justify-center w-full bg-amber-50 h-screen">
      {/* === Invoice Preview === */}
      <div className="w-full max-w-3xl bg-white border border-gray-300 p-6 rounded-md shadow-sm mb-6">
        {/* Header */}
        <h3 className="text-center text-2xl font-bold mb-4">Invoice</h3>

        <div className="flex justify-between text-sm mb-4">
          <div>
            <p className="font-semibold">Invoice No: <span className="font-normal">{order.invoiceNo}</span></p>
            <p className="font-semibold">Date: <span className="font-normal">{order.date}</span></p>
          </div>
        </div>

        {/* Seller & Buyer Info */}
        <div className="flex justify-between text-sm mb-4">
          <div>
            <h4 className="font-semibold">From:</h4>
            <p>{order.seller.name}</p>
            <p>{order.seller.address}</p>
            <p>{order.seller.phone}</p>
            <p>{order.seller.email}</p>
          </div>
          <div>
            <h4 className="font-semibold">To:</h4>
            <p>{order.buyer.name}</p>
            <p>{order.buyer.address}</p>
            <p>{order.buyer.phone}</p>
            <p>{order.buyer.email}</p>
          </div>
        </div>

        {/* Table */}
        <table className="w-full text-sm border mt-4">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="p-2 border">#</th>
              <th className="p-2 border">Product</th>
              <th className="p-2 border">Qty</th>
              <th className="p-2 border">Unit Price</th>
              <th className="p-2 border">Total</th>
            </tr>
          </thead>
          <tbody>
            {order.items.map((item, index) => (
              <tr key={index}>
                <td className="p-2 border">{index + 1}</td>
                <td className="p-2 border">{item.title}</td>
                <td className="p-2 border">{item.quantity}</td>
                <td className="p-2 border">₹{item.price}</td>
                <td className="p-2 border">₹{item.quantity * item.price}</td>
              </tr>
            ))}
          </tbody>
        </table>

        {/* Total */}
        <div className="text-right mt-4 font-semibold text-lg">
          Grand Total: ₹{total}
        </div>
      </div>

      {/* === Download Button === */}
      <Button
        onClick={generatePDF}
        className="bg-teal-600 text-white px-6 py-2 rounded-sm"
      >
        Download Invoice
      </Button>
    </div>
  );
};

export default InvoiceGenerator;
