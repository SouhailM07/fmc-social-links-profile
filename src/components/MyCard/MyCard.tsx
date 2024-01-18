import "./mycard.css";
// mui
import {
  Avatar,
  Card,
  CardContent,
  Stack,
} from "@mui/material";
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
      <Card className="!bg-DarkGrey !text-white w-[25rem] md:w-[27rem] text-center md:pt-[3rem] pt-[1.5rem] !rounded-xl">
        <Avatar src={avatar_img} className="mx-auto !h-[6rem] !w-[6rem] " />
        <div className="my-[1.5rem]">
          <h2 className="font-bold text-[2rem]">Jessica Randall</h2>
          <h6 className="text-Green font-semibold">London, United Kingdom</h6>
        </div>
        <p className="mb-2">"Front-end developer and avid reader"</p>
        <CardContent>
          <Stack
            component="ul"
            direction="column"
            spacing="1rem"
            className="items-center font-bold "
          >
            {arrOfLinks.map((e, i) => (
              <li
                key={i}
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
