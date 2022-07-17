import Image from "next/image";
import React from "react";
import PageInfo from "../components/PageInfo";
import image from "../public/imgs/communication.png";

const Contact = () => {
  return (
    <>
      <PageInfo title={"Contact Us"} />
      <div className="ml-5 sm:ml-0">
        <section className="max-w-6xl mx-auto mt-16 sm:flex justify-between">
          <div className="text-[#2f1ac4] space-y-5 sm:w-[500px] mr-4">
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
          <div className="sm:w-[500px] space-y-5 ">
            <h1 className="text-2xl text-[#151875]">Contact Way</h1>
            <div className="flex space-x-5">
              <div className="flex text-sm text-[#2f1ac4] space-x-3">
                <div className="w-7 h-7  rounded-full bg-[#2f1ac4]"></div>
                <div>
                  <h6>Tel:877-67-8899</h6>
                  <h6>E-Mail: Shop@store.com</h6>
                </div>
              </div>
              <div className="flex text-sm text-[#2f1ac4] space-x-3">
                <div className="w-7 h-7  rounded-full bg-[#FB2E86]"></div>
                <div>
                  <h6>Support Forum</h6>
                  <h6>For over 24hr</h6>
                </div>
              </div>
            </div>
            <div className="flex space-x-5">
              <div className="flex text-sm text-[#2f1ac4] space-x-3">
                <div className="w-7 h-7  rounded-full bg-[#f6b769]"></div>
                <div>
                  <h6>20 Margret st, London</h6>
                  <h6>Great britain 3NM98-LK</h6>
                </div>
              </div>
              <div className="flex text-sm text-[#2f1ac4] space-x-3">
                <div className="w-7 h-7  rounded-full bg-[#1fe586]"></div>
                <div>
                  <h6>Free standard shipping</h6>
                  <h6>On all orders</h6>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section className="max-w-6xl mx-auto mt-20 mb-40 flex justify-between text-[#2f1ac4] flex-col md:flex-row">
          <div className="sm:w-[500px] space-y-5">
            <h1 className="text-2xl text-[#151875]">Get In Touch</h1>
            <p>
              All pobis quis ab et repellat nam dicta iste, tenetur nesciunt
              aperiam quae sapiente obcaecati porro voluptatum! Cumque incidunt
              voluptatem accusamus voluptatum?
            </p>
            <form className="sm:w-[500px] mb-16 space-y-8">
              <div className="sm:flex justify-between mt-5">
                <input
                  className="inline-block p-2 pr-12  border rounded-sm"
                  type="text"
                  placeholder="Your Name"
                />
                <input
                  className="inline-block p-2 pr-12 border rounded-sm"
                  type="email"
                  placeholder="Your Email"
                />
              </div>
              <input
                className="block w-full p-2 border rounded-sm"
                type="text"
                placeholder="Subject"
              />
              <textarea
                id=""
                className="border w-full p-2"
                cols={30}
                rows={5}
                placeholder="Type Your Massage"
              ></textarea>
              <div>
                <button className="btn btn--primary">Send Mail</button>
              </div>
            </form>
          </div>
          <div className="flex items-center justify-center mr-10">
            <Image src={image} height={530} width={550} alt="background pic" />
          </div>
        </section>
      </div>
    </>
  );
};

export default Contact;
