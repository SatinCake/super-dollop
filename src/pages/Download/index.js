import React from "react";

import { Column, Row, Img, Input, Text, List, Line } from "components";
import { CloseSVG } from "../../assets/images/index.js";

const DownloadPage = () => {
  const [inputvalue, setInputvalue] = React.useState("");

  return (
    <>
      <Column className="bg-gray_50 font-gilroy mx-[auto] 3xl:pb-[103px] lg:pb-[66px] xl:pb-[76px] 2xl:pb-[86px] 3xl:pr-[103px] lg:pr-[66px] xl:pr-[76px] 2xl:pr-[86px] w-[100%]">
        <header className="w-[95%]">
          <Row className="bg-white_A700 items-center lg:p-[17px] xl:p-[19px] 2xl:p-[22px] 3xl:p-[26px] shadow-bs w-[100%]">
            <Img
              src="images/img_group_16.svg"
              className="lg:h-[28px] xl:h-[32px] 2xl:h-[36px] 3xl:h-[43px] lg:ml-[49px] xl:ml-[56px] 2xl:ml-[64px] 3xl:ml-[76px] w-[13%]"
              alt="Group"
            />
            <Input
              value={inputvalue}
              onChange={(e) => setInputvalue(e?.target?.value)}
              className="font-medium p-[0] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] placeholder:text-bluegray_200 text-bluegray_200 w-[100%]"
              wrapClassName="2xl:ml-[52px] 3xl:ml-[62px] flex lg:ml-[40px] w-[40%] xl:ml-[46px]"
              name="InputField"
              placeholder="Search"
              prefix={
                <Img
                  src="images/img_search.svg"
                  className="cursor-pointer ml-[4px] lg:w-[12px] lg:h-[13px] lg:mr-[10px] xl:w-[14px] xl:h-[15px] xl:mr-[11px] 2xl:w-[16px] 2xl:h-[17px] 2xl:mr-[13px] 3xl:w-[19px] 3xl:h-[20px] 3xl:mr-[15px] my-[auto]"
                  alt="search"
                />
              }
              suffix={
                inputvalue?.length > 0 ? (
                  <CloseSVG
                    color="#bac1ce"
                    className="cursor-pointer lg:w-[12px] lg:h-[13px] lg:ml-[7px] lg:mr-[17px] xl:w-[14px] xl:h-[15px] xl:ml-[8px] xl:mr-[19px] 2xl:w-[16px] 2xl:h-[17px] 2xl:ml-[10px] 2xl:mr-[22px] 3xl:w-[19px] 3xl:h-[20px] 3xl:ml-[12px] 3xl:mr-[26px] my-[auto]"
                    onClick={() => setInputvalue("")}
                  />
                ) : (
                  ""
                )
              }
              shape="srcRoundedBorder6"
              size="mdSrc"
              variant="srcOutlineBluegray300"
            ></Input>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Playlists
            </Text>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[33px] xl:ml-[38px] 2xl:ml-[43px] 3xl:ml-[51px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Podcasts
            </Text>
            <Text className="cursor-pointer hover:font-medium font-medium lg:ml-[23px] xl:ml-[26px] 2xl:ml-[30px] 3xl:ml-[36px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-gray_900 w-[auto]">
              Artists
            </Text>
            <Img
              src="images/img_profileimglarg.png"
              className="lg:h-[44px] xl:h-[50px] 2xl:h-[57px] 3xl:h-[68px] lg:ml-[38px] xl:ml-[44px] 2xl:ml-[50px] 3xl:ml-[60px] rounded-radius50 lg:w-[43px] xl:w-[49px] 2xl:w-[56px] 3xl:w-[67px]"
              alt="ProfileImgLarg"
            />
          </Row>
        </header>
        <Column className="items-center lg:mb-[137px] xl:mb-[157px] 2xl:mb-[177px] 3xl:mb-[212px] lg:mt-[27px] xl:mt-[31px] 2xl:mt-[35px] 3xl:mt-[42px] 3xl:pl-[103px] lg:pl-[66px] xl:pl-[76px] 2xl:pl-[86px] w-[100%]">
          <Column className="items-center w-[100%]">
            <Row className="w-[99%]">
              <Text className="font-semibold mt-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                Song Title
              </Text>
              <Text className="font-semibold mb-[1px] lg:ml-[266px] xl:ml-[305px] 2xl:ml-[343px] 3xl:ml-[411px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                Album Name
              </Text>
              <Text className="font-semibold lg:ml-[101px] xl:ml-[115px] 2xl:ml-[130px] 3xl:ml-[156px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                Artist
              </Text>
              <Text className="font-semibold lg:ml-[213px] xl:ml-[244px] 2xl:ml-[275px] 3xl:ml-[330px] my-[1px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                Duration
              </Text>
              <Text className="font-semibold mb-[1px] xl:ml-[105px] 2xl:ml-[119px] 3xl:ml-[142px] lg:ml-[92px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] 3xl:text-[21px] text-black_900 w-[auto]">
                Download
              </Text>
            </Row>
            <List
              className="gap-[0] min-h-[auto] lg:mt-[21px] xl:mt-[24px] 2xl:mt-[28px] 3xl:mt-[33px] w-[97%]"
              orientation="vertical"
            >
              <Row className="items-center lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Hum Nashe Mein Toh Nahin
                </Text>
                <Text className="font-normal lg:ml-[109px] xl:ml-[125px] 2xl:ml-[141px] 3xl:ml-[169px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Bhoolbhulaiya 2
                </Text>
                <Text className="font-normal xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Pritam, Arijit Singh, Tulsi Kumar
                </Text>
                <Text className="font-normal 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  03:28
                </Text>
                <Img
                  src="images/img_download_20X18.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[145px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[224px] w-[1%]"
                  alt="download One"
                />
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_78X78.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty One"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Chaand Baaliyan Song
                </Text>
                <Text className="font-normal lg:ml-[132px] xl:ml-[151px] 2xl:ml-[170px] 3xl:ml-[204px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Chaand Baaliyan
                </Text>
                <Text className="font-normal 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Aditya A
                </Text>
                <Text className="font-normal lg:ml-[199px] xl:ml-[228px] 2xl:ml-[257px] 3xl:ml-[308px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  01:43
                </Text>
                <Img
                  src="images/img_download_20X18.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[226px] w-[1%]"
                  alt="download Two"
                />
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_1.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Two"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Gehraiyaan Title Track
                </Text>
                <Text className="font-normal lg:ml-[136px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Gehraiyaan
                </Text>
                <Text className="font-normal lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  OAFF, Savera, Lothika, Ankur Tewari
                </Text>
                <Text className="font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  04:01
                </Text>
                <Img
                  src="images/img_download_20X18.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[145px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[224px] w-[1%]"
                  alt="download Three"
                />
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_78X78.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Three"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Chaand Baaliyan Song
                </Text>
                <Text className="font-normal lg:ml-[132px] xl:ml-[151px] 2xl:ml-[170px] 3xl:ml-[204px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Chaand Baaliyan
                </Text>
                <Text className="font-normal 2xl:ml-[108px] 3xl:ml-[129px] lg:ml-[84px] xl:ml-[96px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Aditya A
                </Text>
                <Text className="font-normal lg:ml-[199px] xl:ml-[228px] 2xl:ml-[257px] 3xl:ml-[308px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  01:43
                </Text>
                <Img
                  src="images/img_download_20X18.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[147px] xl:ml-[168px] 2xl:ml-[189px] 3xl:ml-[226px] w-[1%]"
                  alt="download Four"
                />
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Four"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Hum Nashe Mein Toh Nahin
                </Text>
                <Text className="font-normal lg:ml-[109px] xl:ml-[125px] 2xl:ml-[141px] 3xl:ml-[169px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Bhoolbhulaiya 2
                </Text>
                <Text className="font-normal xl:ml-[106px] 2xl:ml-[120px] 3xl:ml-[144px] lg:ml-[93px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Pritam, Arijit Singh, Tulsi Kumar
                </Text>
                <Text className="font-normal 2xl:ml-[100px] 3xl:ml-[120px] lg:ml-[77px] xl:ml-[88px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  03:28
                </Text>
                <Img
                  src="images/img_download_20X18.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[145px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[224px] w-[1%]"
                  alt="download Five"
                />
              </Row>
              <Line className="self-center w-[100%] h-[1px] bg-bluegray_100" />
              <Row className="items-center lg:my-[12px] xl:my-[14px] 2xl:my-[16px] 3xl:my-[19px] w-[100%]">
                <Img
                  src="images/img_rectangle20_1.png"
                  className="lg:h-[61px] xl:h-[70px] 2xl:h-[79px] 3xl:h-[94px] rounded-radius6 lg:w-[60px] xl:w-[69px] 2xl:w-[78px] 3xl:w-[93px]"
                  alt="RectangleTwenty Five"
                />
                <Text className="font-medium lg:ml-[6px] xl:ml-[7px] 2xl:ml-[8px] 3xl:ml-[9px] lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_900 w-[auto]">
                  Gehraiyaan Title Track
                </Text>
                <Text className="font-normal lg:ml-[136px] xl:ml-[155px] 2xl:ml-[175px] 3xl:ml-[210px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  Gehraiyaan
                </Text>
                <Text className="font-normal lg:ml-[116px] xl:ml-[133px] 2xl:ml-[150px] 3xl:ml-[180px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  OAFF, Savera, Lothika, Ankur Tewari
                </Text>
                <Text className="font-normal lg:ml-[48px] xl:ml-[55px] 2xl:ml-[62px] 3xl:ml-[74px] not-italic lg:text-[12px] xl:text-[14px] 2xl:text-[16px] 3xl:text-[19px] text-bluegray_400 w-[auto]">
                  04:01
                </Text>
                <Img
                  src="images/img_download_20X18.svg"
                  className="lg:h-[16px] xl:h-[18px] 2xl:h-[21px] 3xl:h-[25px] lg:ml-[145px] xl:ml-[166px] 2xl:ml-[187px] 3xl:ml-[224px] w-[1%]"
                  alt="download Six"
                />
              </Row>
            </List>
          </Column>
        </Column>
      </Column>
    </>
  );
};

export default DownloadPage;
