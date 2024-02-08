import { useState } from "react";
import { Link } from "react-router-dom";
import PixIcon from "@mui/icons-material/Pix";

type Props = {};

const Navbar = (props: Props) => {
  const [selected, setSelected] = useState("dashboard");
  return (
    <div className="flex justify-between items-center mb-[0.25rem] py-[0.5rem] px-0">
      {/* left side */}
      <div className="inline-flex items-center  gap-[0.75rem]">
        <PixIcon className="flex" />

        <h4 className="uppercase">Economizer</h4>
      </div>
      {/* right side */}
    </div>
  );
};

export default Navbar;
