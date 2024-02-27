"use client";

interface PaymentStatusProps {
  orderEmail: string;
  orderId: string;
  _isPaid: boolean;
}
const PaymentStatus = ({
  orderEmail,
  orderId,
  _isPaid,
}: PaymentStatusProps) => {
  return (
    <div className="mt-16 grid grid-cols-2 gap-x-4 text-sm text-gray-600">
      <div>
        <p className="font-medium text-gray-900">Shipping to</p>
        <p>{orderEmail}</p>
      </div>
      <div>
<p className="font-medium text-gray-900">Order Status</p>
<p className="font-medium text-gray-900">{_isPaid? "Payment Successful":"Pending Payment"}</p>
      </div>
    </div>
  );
};

export default PaymentStatus;
