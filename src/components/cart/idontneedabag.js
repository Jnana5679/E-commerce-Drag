import { FaLeaf } from "react-icons/fa";
import { Stack, Switch } from "@chakra-ui/react";

const IdontNeedABag = () => {
  return (
    <>
      <div className="main-heading">
        <h1 className="i-dont-need-bag-heading">
          i don't need a bag!{" "}
          <span>
            <FaLeaf className="leaf-icon" />
          </span>
        </h1>
        <Stack align="center" direction={"row"}>
          <Switch colorScheme="green" size={"md"} />
        </Stack>
      </div>
      <p>Opt for no bag delivery & contribute to the environment with us</p>
    </>
  );
};

export default IdontNeedABag;
