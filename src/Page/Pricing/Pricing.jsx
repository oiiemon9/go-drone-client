import React from 'react';
import { useForm, useWatch } from 'react-hook-form';
import { useLoaderData } from 'react-router';
import useAxiosSecure from '../../Hooks/useAxiosSecure';
import useAuth from '../../Hooks/useAuth';

const Pricing = () => {
  const axiosInstance = useAxiosSecure();
  const { loginUser } = useAuth();
  const data = useLoaderData();
  const regionDuplicate = data.map((d) => d.region);
  const region = [...new Set(regionDuplicate)];
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();
  const senderRegion = useWatch({ control, name: 'senderRegion' });
  const receiverRegion = useWatch({ control, name: 'receiverRegion' });

  const districtsByRegion = (region) => {
    const regionDistricts = data.filter((c) => c.region === region);
    const districts = regionDistricts.map((r) => r.district);
    return districts;
  };

  const handelParcel = async (data) => {
    const parcelKG = parseFloat(data.parcelKG);
    let parcelPrice = 0;

    if (data.document === 'document') {
      if (data.senderRegion === data.receiverRegion) {
        parcelPrice = 60;
      } else {
        parcelPrice = 80;
      }
    } else {
      if (parcelKG <= 3) {
        if (data.senderRegion === data.receiverRegion) {
          parcelPrice = 110;
        } else {
          parcelPrice = 150;
        }
      } else {
        if (data.senderRegion === data.receiverRegion) {
          const extraKG = parcelKG - 3;
          const charge = extraKG * 40;
          parcelPrice = 110 + charge;
        } else {
          const extraKG = parcelKG - 3;
          const charge = extraKG * 40 + 40;
          parcelPrice = 150 + charge;
        }
      }
    }

    data.parcelPrice = parcelPrice;
    data.paidStatus = 'pending';
    data.senderEmail = loginUser.email;

    try {
      const res = await axiosInstance.post('/parcel', data);
      console.log(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="max-w-[1440px] mx-auto px-2 mt-5">
      <div className="bg-white rounded-2xl p-12 md:p-24">
        <h1 className="text-4xl text-secondary font-bold">Add Parcel</h1>
        <div className="divider"></div>
        <form onSubmit={handleSubmit(handelParcel)} className="my-5 space-y-4">
          <h2 className="text-xl text-secondary font-bold">
            Enter your parcel details
          </h2>
          <fieldset className="flex gap-4">
            <label
              htmlFor="doc1"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="radio-1"
                id="doc1"
                className="radio"
                {...register('document')}
                value="document"
                defaultChecked
              />
              Document
            </label>

            <label
              htmlFor="doc2"
              className="flex items-center gap-2 cursor-pointer"
            >
              <input
                type="radio"
                name="radio-1"
                id="doc2"
                {...register('document')}
                value="non-document"
                className="radio"
              />
              Non-Document
            </label>
          </fieldset>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <fieldset className="fieldset">
              <label className="label">Parcel Name</label>
              <input
                type="text"
                className="input w-full"
                {...register('parcelName')}
                placeholder="Parcel Name"
              />
            </fieldset>
            <fieldset className="fieldset">
              <label className="label">Parcel Weight (KG)</label>
              <input
                type="number"
                className="input w-full"
                {...register('parcelKG')}
                placeholder="Parcel Weight (KG)"
              />
            </fieldset>
          </div>
          <div className="divider"></div>
          <div className=" grid grid-cols-1 md:grid-cols-2 gap-5">
            <div className="space-y-4">
              <h4 className="text-secondary font-bold">Sender Name</h4>
              <fieldset className="fieldset">
                <label className="label">Sender Name</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register('senderName')}
                  placeholder="Sender Name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label">Sender region</label>
                <select
                  {...register('senderRegion')}
                  defaultValue="Pick a Region"
                  className="select w-full"
                >
                  <option>Pick a region</option>
                  {region.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label">Sender region</label>
                <select
                  {...register('senderDistrict')}
                  defaultValue="Pick a District"
                  className="select w-full"
                >
                  <option>Pick a district</option>
                  {districtsByRegion(senderRegion).map((d, i) => (
                    <option value={d} key={i}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label">Sender Address</label>
                <textarea
                  type="text"
                  className="input w-full min-h-32"
                  {...register('senderAddress')}
                  placeholder="Sender Address"
                />
              </fieldset>
            </div>
            {/* Receiver */}
            <div className="space-y-4">
              <h4 className="text-secondary font-bold">Receiver Details</h4>
              <fieldset className="fieldset">
                <label className="label">Receiver Name</label>
                <input
                  type="text"
                  className="input w-full"
                  {...register('receiverName')}
                  placeholder="Receiver Name"
                />
              </fieldset>
              <fieldset className="fieldset">
                <label className="label">Receiver region</label>
                <select
                  {...register('receiverRegion')}
                  defaultValue="Pick a Region"
                  className="select w-full"
                >
                  <option>Pick a region</option>
                  {region.map((r, i) => (
                    <option value={r} key={i}>
                      {r}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label">Sender region</label>
                <select
                  {...register('receiverDistrict')}
                  defaultValue="Pick a District"
                  className="select w-full"
                >
                  <option>Pick a district</option>
                  {districtsByRegion(receiverRegion).map((d, i) => (
                    <option value={d} key={i}>
                      {d}
                    </option>
                  ))}
                </select>
              </fieldset>
              <fieldset className="fieldset">
                <label className="label">Receiver Address</label>
                <textarea
                  type="text"
                  className="input w-full min-h-32"
                  {...register('receiverAddress')}
                  placeholder="Receiver Address"
                />
              </fieldset>
            </div>
          </div>
          <input
            type="submit"
            value="Submit"
            className="btn btn-primary text-black"
          />
        </form>
      </div>
    </div>
  );
};

export default Pricing;
