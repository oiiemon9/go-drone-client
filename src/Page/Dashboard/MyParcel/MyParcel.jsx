import { useQuery } from '@tanstack/react-query';
import React from 'react';
import useAuth from '../../../Hooks/useAuth';
import useAxiosSecure from '../../../Hooks/useAxiosSecure';

const MyParcel = () => {
  const { loginUser } = useAuth();

  const axiosInstance = useAxiosSecure();
  const { data: parcels = [] } = useQuery({
    queryKey: ['myParcels', loginUser?.email],
    queryFn: async () => {
      const res = await axiosInstance.get(`/parcel?email=${loginUser?.email}`);
      return res.data;
    },
  });

  const handelPay = async (id) => {
    const payParcel = parcels.find((parcel) => parcel._id === id);

    if (payParcel) {
      const res = await axiosInstance.post(
        '/create-checkout-session',
        payParcel
      );
      console.log(res);
      window.location.href = res.data.url;
    }
  };

  return (
    <div>
      <h1 className="text-4xl">My Parcel ({parcels.length})</h1>
      <div className="overflow-x-auto rounded-box border border-base-content/5 bg-base-100">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>parcelKG</th>
              <th>Price</th>
              <th>Payment Status</th>
            </tr>
          </thead>
          <tbody>
            {parcels.map((parcel) => (
              <tr key={parcel._id}>
                <th>1</th>
                <td>{parcel.parcelName}</td>
                <td>{parcel.parcelKG}</td>
                <td>${parcel.parcelPrice}</td>
                <td>
                  {parcel.paidStatus === 'pending' ? (
                    <button
                      onClick={() => handelPay(parcel._id)}
                      className="btn btn-primary text-black"
                    >
                      Pay
                    </button>
                  ) : (
                    <p>{parcel.paidStatus}</p>
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyParcel;
