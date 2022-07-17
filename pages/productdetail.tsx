import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Box, Button, Rating, Tab } from "@mui/material";
import Image from "next/image";
import React from "react";
import PageInfo from "../components/PageInfo";
import Pic from "../img/img-2.png";
import logo1 from "../img/logo1.png";
import logo2 from "../img/logo2.png";
import logo3 from "../img/logo3.png";
import logo4 from "../img/logo4.png";
import logo5 from "../img/logo5.png";

const productdetail = () => {
  const [value, setValue] = React.useState("1");

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <div>
      <PageInfo title="Product Details" />
      <section>
        <div className="max-w-6xl mx-auto my-20">
          <div className="flex w-full h-[450px] p-10 shadow-lg items-center space-x-10 text-[#151875]">
            <Image src={Pic} height={400} width={400} />
            <div className=" space-y-2">
              <h1 className="text-2xl ">Plywood arm chair</h1>
              <Rating value={4} className="text-sm" />
              <h6 className="">
                $32.00{" "}
                <span className="text-[#FB2E86] line-through">$48.00</span>
              </h6>
              <h6>Color</h6>
              <p className=" text-blue-600 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit.at
                pariatur voluptatum quia aliquid.
              </p>
              <Button href="/basket">Add To Cart</Button>
              <h6>Categories:</h6>
              <h6>Tags</h6>
            </div>
          </div>
        </div>
      </section>
      <section className=" w-full  bg-[#f2f0ff] min-h-[500px] pt-10">
        <div className="max-w-6xl mx-auto  text-[#151875] flex flex-col justify-center space-y-1">
          <TabContext value={value}>
            <Box>
              <TabList
                onChange={handleChange}
                TabIndicatorProps={{
                  style: {
                    display: "none",
                  },
                }}
              >
                <Tab className="tab-items" label="New arrival" value="1" />
                <Tab className="tab-items" label="Best seller" value="2" />
                <Tab className="tab-items" label="featured" value="3" />
                <Tab className="tab-items" label="Special offer" value="4" />
              </TabList>
            </Box>

            <TabPanel value="1">
              <div className=" space-y-3">
                <h3 className="text-2xl ">Various tempore</h3>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Placeat, porro odio? Blanditiis, rerum rem ipsum vel voluptate
                  nostrum ea mollitia dolores, illo natus at exercitationem
                  totam saepe dicta aliquam sed!
                </p>
                <h3 className="text-2xl">More Details</h3>
                <ol className="list-decimal">
                  <li>
                    Details ipsum dolor sit amet consectetur adipisicing lore
                    iuvh iuhdvh sdygvs saduigas d elit. Ipsa, in.
                  </li>
                  <li>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Ipsa, in.
                  </li>
                  <li>
                    Hapgfd ipsum dolor sit kjbn lidbv iu hgfv f amet consectetur
                    adipisicing elit. Ipsa, in.
                  </li>
                  <li>
                    ipsum dolor jhbvc uygf auysifdgh sit amet consectetur
                    adipisicing elit. Ipsa, in.
                  </li>
                  <li>
                    Lorem ipsum dolor sit sdfvg dvf fdfd ffdv amet consectetur
                    adipisicing elit. Ipsa, in.
                  </li>
                </ol>
              </div>
            </TabPanel>
            <TabPanel value="2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam
              ullam autem maxime ipsum. Culpa magnam quam animi ipsa maxime
              quidem perspiciatis unde et reiciendis autem, sequi itaque
              consequatur reprehenderit. Unde sunt aliquam ab perferendis
              architecto placeat ipsum quidem iusto a nihil? Eos eum tempora
              ipsa expedita temporibus nobis quidem facilis cum accusamus eaque?
              Quibusdam, minus nisi placeat, pariatur modi beatae corporis sit
              iure rem quae iste, deleniti laboriosam iusto voluptate
              dignissimos ratione. Dolorem fugiat rem ipsam veritatis magni
              maxime nihil repellendus beatae. Cum optio similique temporibus
            </TabPanel>
            <TabPanel value="3">
              corrupti blanditiis aliquid! Officia, nisi laborum in facilis
              odit, illo consequuntur quasi autem suscipit quidem eaque fugit
              nesciunt maiores officiis aliquam dolores saepe rem ipsa, to
              dolore, sint quae sunt odio minus. Ut earum et natus incidunt vel.
              Eum enim consectetur impedit, nisi omnis facilis cumque
              necessitatibus tempora.
            </TabPanel>
            <TabPanel value="4">
              illum impedit? Voluptatibus eligendi sequi quaerat obcaecati
              commodi officia veniam, aliquid quae aut ex fugit velit illo
              corrupti consequuntur a laudantium doloribus error nostrum
              aspernatur numquam voluptatem eaque accusantium! Enim, minima,
              quisquam consectetur eligendi libero voluptatibus debitis ius
            </TabPanel>
          </TabContext>
        </div>
      </section>
      <section className="max-w-6xl mx-auto">
        <div className="flex justify-around my-28 mx-10">
          <Image src={logo1} height={100} width={160} />
          <Image src={logo2} height={100} width={160} />
          <Image src={logo3} height={100} width={160} />
          <Image src={logo4} height={100} width={160} />
          <Image src={logo5} height={100} width={160} />
        </div>
      </section>
    </div>
  );
};

export default productdetail;
