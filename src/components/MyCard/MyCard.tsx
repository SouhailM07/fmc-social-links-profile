import "./mycard.css";
// mui
import { Card, CardContent, Stack } from "@mui/material";
// assets
import avatar_img from "/avatar-jessica.jpeg";
export default function MyCard() {
  const arrOfLinks: string[] = [
    "Github",
    "Frontend Mentor",
    "Linkedin",
    "Twitter",
    "Instagram",
  ];
  return (
    <>
      <Card
        component="article"
        className="!bg-DarkGrey !text-white w-[25rem] md:w-[27rem] text-center md:pt-[3rem] pt-[1.5rem] !rounded-xl"
      >
        <img
          src={avatar_img}
          className="rounded-full mx-auto h-[6rem] w-[6rem] "
          alt="image"
        />
        <h1 className="font-bold text-[2rem] mt-[1.5rem]">Jessica Randall</h1>
        <h2 className="text-Green font-semibold mb-[1.5rem]">
          London, United Kingdom
        </h2>
        <p className="mb-2">"Front-end developer and avid reader"</p>
        <CardContent component="section">
          <Stack
            component="ul"
            direction="column"
            spacing="1rem"
            className="items-center font-bold "
            role="list"
          >
            {arrOfLinks.map((e, i) => (
              <li
                key={i}
                role="listitem"
                className="rounded-lg cursor-pointer hover:text-black py-[0.8rem] w-[83%] bg-Grey hover:bg-Green text-center"
              >
                {e}
              </li>
            ))}
          </Stack>
        </CardContent>
      </Card>
    </>
  );
}
