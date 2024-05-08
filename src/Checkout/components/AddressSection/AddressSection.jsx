import "./AddressSection.css";
import React, { useState } from "react";

// import { useAddress } from "../../../../contexts/AddressProvider";
// import { useUserData } from "../../../../contexts/UserDataProvider";
import { AddressModal } from "../AddressModal/AddressModal";

export const AddressSection = ({
  isAddressModalOpen,
  setIsAddressModalOpen,
}) => {
  // const { userDataState, dispatch } = useUserData();

  return (
    <div className="address-container">
      {/* {userDataState.addressList?.map((address, index) => {
        const { name, street, city, state, country, pincode, phone, _id } =
          address; */}
      {/* <div key={_id} className="address-card"> */}
      <div className="address-card">
        <input
          // checked={_id === userDataState.orderDetails?.orderAddress?._id}
          // onChange={() => {
          //   dispatch({
          //     type: "SET_ORDER",
          //     payload: { orderAddress: address },
          //   });
          // }}
          name="address"
          //id={_id}
          type="radio"
        />
        {/* <label htmlFor={_id}> */}
        <label>
          <p className="name">Kartik</p>
          <p className="address">
            3874 Manitoba Street, Bracebridge,Ontario, Canada P1L 2B7 -
            705-645-5637
          </p>
        </label>
      </div>

      {/* })} */}
      <div className="add-new-address-btn-container">
        <button
          className="add-new-address-btn"
          onClick={() => setIsAddressModalOpen(true)}
        >
          Add New Address
        </button>
      </div>
      {isAddressModalOpen && (
        <AddressModal
          isAddressModalOpen={isAddressModalOpen}
          setIsAddressModalOpen={setIsAddressModalOpen}
        />
      )}
    </div>
  );
};
