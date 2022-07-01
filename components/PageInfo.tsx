import { Container } from "@mui/system";
import React from "react";

const PageInfo: React.FC<{ title: string }> = ({ title }) => {
  return (
    <div>
      <div className=" w-full  bg-[#f2f0ff] ">
        <Container>
          <div className="max-w-6xl mx-auto h-[260px] text-[#151875] flex flex-col justify-center space-y-1">
            <h1 className="text-3xl -mt-4">{title}</h1>
            <h5>
              Home . Page <span className="text-[#FB2E86]">{title}</span>
            </h5>
          </div>
        </Container>
      </div>
    </div>
  );
};

export default PageInfo;
