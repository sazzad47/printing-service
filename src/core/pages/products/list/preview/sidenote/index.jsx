import { Typography, useTheme } from "@mui/material";
import { useLocation, useSearchParams } from "react-router-dom";
import { AiOutlineSketch, AiOutlineCloudUpload } from "react-icons/ai";
import ChangeService from "./ChangeService";

const SideNote = () => {
  const location = useLocation();
  const { pathname } = location;
  const [searchParams] = useSearchParams();
  const query = searchParams.get("service");
  const theme = useTheme();

  return (
    <>
      <div
        style={{ backgroundColor: theme.palette.background.alt }}
        className="absolute top-0 w-full h-auto rounded-lg"
      >
        <div className="w-full max-w-md p-4 shadow">
          <div className="flex flex-col gap-3 mb-4">
            <div className="text-lg font-bold leading-none flex items-center gap-3">
              {query === "upload_design" ? (
                <>
                  <AiOutlineCloudUpload />
                  Upload your design
                </>
              ) : (
                <>
                  <AiOutlineSketch />
                  Let us design
                </>
              )}
            </div>
            <ChangeService pathname={pathname} />
          </div>
          <div className="flow-root">
            <div className="w-full flex flex-col gap-3">
              <div
                style={{
                  borderLeft: `2px solid ${theme.palette.text.primary}`,
                  backgroundColor: theme.palette.primary[400],
                }}
                className="flex justify-between items-center p-3 w-full"
              >
                <Typography>Format</Typography>
                <Typography>9 x 5.4 cm</Typography>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SideNote;
