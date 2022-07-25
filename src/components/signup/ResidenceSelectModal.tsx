import React, { useEffect, useState } from "react";
import {
  Box,
  Button,
  styled,
  IconButton,
  SelectChangeEvent,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import { useCitysModel } from "../../api/models/useCityModels";
import FormSelect from "../form/FormSelect";
import { useRecoilState } from "recoil";
import { ResidenceValue } from "../../store/form";

interface ResidenceSelectProps {
  control: any;
  open: boolean;
  handleClose: () => void;
}

const ResidenceSelectModal = ({
  open,
  handleClose,
  control,
}: ResidenceSelectProps) => {
  const { getCitys } = useCitysModel();
  const [citys, setCitys] = useState<string[] | undefined | any>();
  const [regions, setRegions] = useState<string | HTMLSelectElement>();
  const [districts, setDistricts] = useState<string[]>();
  const [district, setDistrict] = useState<string | HTMLSelectElement>();

  const [, setResidence] = useRecoilState(ResidenceValue);
  useEffect(() => {
    async function fetchCitys() {
      const response = await getCitys().then((result) => result);
      setCitys(response);
    }
    fetchCitys();
  }, []);

  const handleChangeRegion = (event: SelectChangeEvent<HTMLSelectElement>) => {
    setRegions(event.target.value);
    setDistricts(citys[`${event.target.value}`]);
  };

  const handleChangeDistrict = (
    event: SelectChangeEvent<HTMLSelectElement>,
  ) => {
    setDistrict(event.target.value);
  };

  const handleSelectValue = () => {
    if (regions !== undefined && district !== undefined) {
      setResidence(regions + " " + district);
    }
    handleClose();
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
            <FormSelect
              label="시/도"
              name="region"
              options={citys && Object.keys(citys)}
              onBlur={handleChangeRegion}
              control={control}
              required={true}
              sx={{ width: 135, mr: 2 }}
            />

            <FormSelect
              label="시/구/군"
              name="district"
              onBlur={handleChangeDistrict}
              options={districts}
              control={control}
              required={true}
              sx={{ width: 135 }}
            />
          </Box>
          <Button
            variant="contained"
            onClick={handleSelectValue}
            sx={{ mt: 3, width: "100%", height: 50 }}
          >
            확인
          </Button>
        </Box>
      </StyledModalContent>
    </StyledModal>
  );
};

export default ResidenceSelectModal;

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
