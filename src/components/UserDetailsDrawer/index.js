import React from "react";
import {
  Drawer,
  DrawerBody,
  Button,
  DrawerHeader,
  DrawerOverlay,
  DrawerContent,
  DrawerCloseButton,
  useDisclosure,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { useHistory } from "react-router-dom";
import Cookies from "js-cookie";
import "./index.css";

function ProfileDropDown() {
  const [size, setSize] = React.useState("");
  const [username, setUsername] = React.useState("user");
  const [userToken, setUserToken] = React.useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();

  let history = useHistory();

  React.useEffect(() => {
    setUsername(localStorage.getItem("LogedInUsername"));
    setUserToken(Cookies.get("user-token"));
  }, []);

  const handleClick = (newSize) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["full"];

  const onClickCustomerLogin = () => {
    history.push("/customer/Login");
  };

  const onClickCustomerLogOut = async () => {
    Cookies.remove("user-token");
    localStorage.removeItem("LogedInUserImage");
    localStorage.removeItem("LogedInUsername");
    await setUsername("user");
    await setUserToken(undefined);
    onClose();
  };

  const onClickAdminLogin = () => {
    const adminJwtToken = Cookies.get("admin_jwt_token");
    if (adminJwtToken !== undefined) {
      history.push("/admin/Landing-page");
    } else {
      history.push("/admin/Login");
    }
  };

  return (
    <>
      {sizes.map((size) => (
        <Button
          bgColor={"transparent"}
          onClick={() => handleClick(size)}
          key={size}
          padding={"0px"}
          m={4}
          width={"50px"}
          height={"50px"}
          borderRadius={"50%"}
        >
          {userToken === undefined ? (
            <CgProfile className="profile-icon" />
          ) : (
            <p className="userImage">{username[0]}</p>
          )}
        </Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>
            {userToken === undefined ? "Username" : username}
          </DrawerHeader>
          <DrawerBody display={"flex"} flexDirection={"column"}>
            {userToken === undefined ? (
              <Button onClick={onClickCustomerLogin}>Customer Login</Button>
            ) : (
              <Button onClick={onClickCustomerLogOut}>Logout</Button>
            )}
            <br />
            {userToken === undefined ? (
              <Button onClick={onClickAdminLogin}>Admin Login</Button>
            ) : (
              ""
            )}
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
}

export default ProfileDropDown;
