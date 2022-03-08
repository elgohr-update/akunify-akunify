import React from 'react'

interface INewSubscribe {
  member: any
}

const NewSubscribtion: React.FC<INewSubscribe> = ({ member }) => {
  return (
    <div className="px-4 grid grid-cols-1 gap-y-5 gap-x-4 sm:grid-cols-6 pb-8">
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          Nama Pelanggan
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="nama_pelanggan"
            id="nama_pelanggan"
            autoComplete="given-name"
            className="input-form-sm-default"
            value={
              member?.attributes?.member?.data?.attributes?.name_alias || ''
            }
            disabled
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          Subscribtion ID
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subscribtion_id"
            id="subscribtion_id"
            autoComplete="given-name"
            className="input-form-sm-default"
            value={member?.id || ''}
            disabled
          />
        </div>
      </div>

      {/* Fill input form */}
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          Grup <span className="text-flamengo-60">*</span>
        </label>
        <div className="mt-1 mb-0">
          <select
            name="service_id"
            id="service_id"
            autoComplete="given-name"
            className="input-form-sm-default"
          >
            <option value="">Pilih Grup</option>
          </select>
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          Start Date
        </label>
        <div className="mt-1">
          <input
            type="date"
            name="subscribtion_id"
            id="subscribtion_id"
            autoComplete="given-name"
            className="input-form-sm-default"
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          End Date
        </label>
        <div className="mt-1">
          <input
            type="date"
            name="subscribtion_id"
            id="subscribtion_id"
            autoComplete="given-name"
            className="input-form-sm-default"
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          Payment Method
        </label>
        <div className="mt-1">
          <input
            type="text"
            name="subscribtion_id"
            id="subscribtion_id"
            autoComplete="given-name"
            className="input-form-sm-default"
          />
        </div>
      </div>
      <div className="sm:col-span-6">
        <label
          htmlFor="first-name"
          className="block text-md font-semibold text-gray-70"
        >
          Transaction Date
        </label>
        <div className="mt-1">
          <input
            type="date"
            name="subscribtion_id"
            id="subscribtion_id"
            autoComplete="given-name"
            className="input-form-sm-default"
          />
        </div>
      </div>
    </div>
  )
}

export default NewSubscribtion
