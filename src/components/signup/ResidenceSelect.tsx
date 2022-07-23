import React, { useEffect, useState } from "react";
import {
  Box,
  Dialog,
  DialogTitle,
  FormControl,
  DialogContent,
  InputLabel,
  OutlinedInput,
  Select,
  MenuItem,
  DialogActions,
  Button,
  styled,
  IconButton,
  SelectChangeEvent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCitysModel } from "../../api/models/useCityModels";

interface ResidenceSelectProps {
  open: boolean;
  handleClose: () => void;
}

const ResidenceSelect = ({ open, handleClose }: ResidenceSelectProps) => {
  const { getCitys } = useCitysModel();
  const [citys, setCitys] = useState<string[] | undefined | any>();
  const [regions, setRegions] = useState<string | HTMLSelectElement>("");
  const [districs, setDistrics] = useState<string[]>(["-"]);
  const [distric, setDistric] = useState<string | HTMLSelectElement>("");

  useEffect(() => {
    async function fetchCitys() {
      const response = await getCitys().then((result) => result);

      setCitys(response.data);
    }
    fetchCitys();
  }, []);

  const handleChangeRegion = (event: SelectChangeEvent<HTMLSelectElement>) => {
    setRegions(event.target.value);
    setDistrics(citys[`${event.target.value}`]);
  };

  const handleChangeDistric = (event: SelectChangeEvent<HTMLSelectElement>) => {
    setDistric(event.target.value);
  };

  return (
    <StyledModal open={open}>
      <StyledModalContent>
        <StyledModalHeader>
          <IconButton onClick={handleClose}>
            <CloseIcon />
          </IconButton>
        </StyledModalHeader>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            paddingTop: 2,
            paddingInline: 3,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="region">시/도</InputLabel>
              <Select
                label="시/도"
                onChange={handleChangeRegion}
                input={
                  <OutlinedInput name="region" label="residence1" id="region" />
                }
                inputProps={{
                  id: "region-select",
                }}
              >
                {citys &&
                  Object.keys(citys)?.map((city: any, index: number) => (
                    <MenuItem key={city + index} value={city}>
                      {city}
                    </MenuItem>
                  ))}
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel shrink htmlFor="distric">
                시/구/군
              </InputLabel>
              <Select
                label="시/도"
                onChange={handleChangeDistric}
                input={
                  <OutlinedInput
                    label="residence2"
                    name="distric"
                    id="distric"
                  />
                }
                inputProps={{
                  id: "distric-select",
                }}
              >
                {districs?.map((distric, index) => (
                  <MenuItem key={distric + index} value={distric}>
                    {distric}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </Box>
          <Button
            variant="contained"
            onClick={handleClose}
            sx={{ mt: 3, width: "100%", height: 50 }}
          >
            확인
          </Button>
        </Box>
      </StyledModalContent>
    </StyledModal>
  );
};

export default ResidenceSelect;

const StyledModal = styled(Box, {
  shouldForwardProp: (prop) => prop !== "open",
})<{
  open?: boolean;
}>(({ open }) => ({
  display: open ? "block" : "none",
  position: "absolute",
  top: 0,
  bottom: 0,
  left: 0,
  right: 0,
  background: "rgba(0,0,0,0.2)",
  zIndex: 100,
}));

const StyledModalContent = styled(Box)({
  position: "absolute",
  bottom: 0,
  left: 0,
  width: "100%",
  height: "60%",
  background: "#fff",
  zIndex: 100,
});

const StyledModalHeader = styled(Box)({
  paddingBlock: 1,
  width: "100%",
});

// const StyledOption = styled("option")({
//   paddingBlock: 4,
//   paddingLeft: 7,
//   fontSize: 14,
//   "&:checked": {
//     background: "#0F2C6E",
//     color: "#fff",
//     borderRadius: 3,
//   },
// });
