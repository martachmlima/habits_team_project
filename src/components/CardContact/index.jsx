import { Box, Avatar } from "@mui/material";

function CardContact({ name, img, link }) {
  return (
      <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: "10px",
            width: "110px",
            height: "110px",
            borderRadius: "12px",
            m: "20px 20px 0",
        }}
        >
        <a href={link} target="_blank" rel="noopener noreferrer">
        <Avatar src={img} alt={name} sx={{ width: 80, height: 80 }} />
        </a>
        <Box
            sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "10px 0",
            }}
        >
            <h3>{name}</h3>
        </Box>
        </Box>
  );
}

export default CardContact;
