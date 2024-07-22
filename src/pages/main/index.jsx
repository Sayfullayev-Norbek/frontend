import { Button } from "@mui/material";
import MainBgImg from "../../assets/148e56f9143295f37e306b29eab2532e.png";
import Modal from "../../components/modals/rules";
import { useState } from "react";
import { useNavigate, useRoutes } from "react-router-dom";

const Index = () => {
  const [open, setOpen] = useState(false);
  const handleClose = () => setOpen(false);
  const navigate = useNavigate();
  return (
    <>
      <Modal open={open} handleClose={handleClose} />
      <div className="flex w-full h-[100vh]">
        <div className="md:w-[35%] w-full h-full bg-white p-4 flex flex-col justify-center gap-40 py-[150px]">
          <p className="text-[43px] text-center">Modme Telegram Integration</p>
          <div className="px-5 md:px-[53px] flex flex-col items-center gap-7">
            <p className="text-[20px] text-center">
              “Boshlash” tugmasini bosish orqali siz{" "}
              <span onClick={()=>setOpen(true)} className="text-main_color cursor-pointer">qoidalarga</span>{" "}
              rozi bo’lgan bo’lasiz
            </p>
            <Button
              onClick={()=>navigate("/main")}
              size="large"
              variant="contained"
              sx={{ backgroundColor: "#2CACE4", ":hover": { backgroundColor: "#2494CB" }, width: "260px", height: "60px" }}
            >
              Boshlash
            </Button>
          </div>
        </div>
        <div
          className="w-[65%] bg-cover bg-center bg-no-repeat hidden md:block"
          style={{ backgroundImage: `url(${MainBgImg})` }}
        />
      </div>
    </>
  );
};

export default Index;
