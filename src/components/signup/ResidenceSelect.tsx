import React from "react";
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
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

interface ResidenceSelectProps {
  open: boolean;
  handleClose: () => void;
}

const ResidenceSelect = ({ open, handleClose }: ResidenceSelectProps) => {
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
            paddingTop: 4,
            paddingInline: 3,
          }}
        >
          <Box sx={{ display: "flex" }}>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel htmlFor="demo-dialog-native">시/도</InputLabel>
              <Select
                native
                value="residence1"
                input={
                  <OutlinedInput label="residence1" id="demo-dialog-native" />
                }
              >
                <option aria-label="None" value="" />
                <option value="경기">경기</option>
                <option value="서울">서울</option>
                <option value="강원">강원</option>
              </Select>
            </FormControl>
            <FormControl sx={{ m: 1, minWidth: 120 }}>
              <InputLabel id="demo-dialog-select-label">시/구/군</InputLabel>
              <Select
                labelId="demo-dialog-select-label"
                id="demo-dialog-select"
                input={<OutlinedInput label="residence2" />}
              >
                <MenuItem value="">
                  <em>None</em>
                </MenuItem>
                <MenuItem value="강남구">강남구</MenuItem>
                <MenuItem value="강동구">강동구</MenuItem>
              </Select>
            </FormControl>
          </Box>
          <Button variant="contained" sx={{ mt: 3, width: "100%", height: 50 }}>
            확인
          </Button>
        </Box>
      </StyledModalContent>
      {/* <DialogActions>
        <Button onClick={handleClose}>Cancel</Button>
        <Button onClick={handleClose}>Ok</Button>
      </DialogActions> */}
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
  height: "50%",
  background: "#fff",
  zIndex: 100,
});

const StyledModalHeader = styled(Box)({
  paddingBlock: 1,
  width: "100%",
});
