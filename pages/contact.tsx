import React from "react";
import Header from "../components/Header";
import PageInfo from "../components/PageInfo";

const Contact = () => {
  return (
    <div>
      <Header />
      <PageInfo title={"Contact Us"} />
      <div className="max-w-6xl mx-auto mt-16 flex justify-between">
        <div className="text-purple-300 space-y-5 w-[500px] mr-4">
          <h1 className="text-2xl text-[#151875]">Information About Us</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Vero,
            explicabo, beatae recusandae voluptates sint nesciunt esse tempore
            quibusdam labore iste eveniet, saepe dignissimos nemo qui?
          </p>
          <div className="flex space-x-4">
            <div className="customDiv"></div>
            <div className="customDiv bg-[#FB2E86]"></div>
            <div className="customDiv bg-sky-400"></div>
          </div>
        </div>
        <div className="w-[500px] space-y-5 ">
          <h1 className="text-2xl text-[#151875]">Contect Way</h1>
          <div className="flex space-x-5">
            <div className="flex text-sm text-purple-300 space-x-3">
              <div className="w-7 h-7  rounded-full bg-[#2f1ac4]"></div>
              <div>
                <h6>Tel:877-67-8899</h6>
                <h6>E-Mail: Shop@store.com</h6>
              </div>
            </div>
            <div className="flex text-sm text-purple-300 space-x-3">
              <div className="w-7 h-7  rounded-full bg-[#FB2E86]"></div>
              <div>
                <h6>Support Forum</h6>
                <h6>For over 24hr</h6>
              </div>
            </div>
          </div>
          <div className="flex space-x-5">
            <div className="flex text-sm text-purple-300 space-x-3">
              <div className="w-7 h-7  rounded-full bg-[#f6b769]"></div>
              <div>
                <h6>20 Margret st, London</h6>
                <h6>Great britain 3NM98-LK</h6>
              </div>
            </div>
            <div className="flex text-sm text-purple-300 space-x-3">
              <div className="w-7 h-7  rounded-full bg-[#1fe586]"></div>
              <div>
                <h6>Free statndard shipping</h6>
                <h6>On all orders</h6>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
