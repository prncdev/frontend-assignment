import { FC } from "react";
import IconButton from '@mui/joy/IconButton';
import { ProgressBar } from "./ProgressBar";
import ClearIcon from '@mui/icons-material/Clear';

export const Header: FC = function () {

  return (
    <header className="flex justify-end gap-16 py-4 px-5 bg-white shadow-md relative z-[2]">
      <ProgressBar />
      <IconButton>
        <ClearIcon />
      </IconButton>
    </header>
  )
}