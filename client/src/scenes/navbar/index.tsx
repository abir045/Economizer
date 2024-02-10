import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";

type Props = {};

const Navbar = (props: Props) => {
  const [selected, setSelected] = useState("dashboard");

  return (
    <div className="flex justify-between items-center mb-[0.25rem] py-[0.5rem] px-0 text-gray-300 ">
      {/* left side */}

      <div className="inline-flex items-center  gap-[0.75rem]">
        <PixIcon className="text-[28px]" />

        <h4 className="text-base">Economizer</h4>
      </div>
      {/* right side */}

      <div className="flex justify-between items-center gap-[2rem]">
        <div className="hover:text-primary-100 ">
          <Link
            to="/"
            onClick={() => setSelected("dashboard")}
            className={`${
              selected === "dashboard" ? "text-primary-100" : "text-gray-700"
            }`}
          >
            dashboard
          </Link>
        </div>
        <div className="hover:text-primary-100 ">
          <Link
            to="/predictions"
            onClick={() => setSelected("predictions")}
            className={`${
              selected === "predictions" ? "text-primary-100" : "text-gray-700"
            }`}
          >
            predictions
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
