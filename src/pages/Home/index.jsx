import { useHistory } from "react-router-dom";
import { Container } from "./styles";
import { GitHub, LinkedIn } from "@mui/icons-material";
import { Box, Avatar } from "@mui/material";

function Home() {
  const history = useHistory();
  const handleClick = (param) => {
    history.push(param);
  };

  return (
    <Container>
      <h1>
        Gest<span>Habit</span>
      </h1>
      <main>
        <h2>Gerencie seus Hábitos</h2>
        <div className="menu_bottoes">
          <button onClick={() => handleClick("/login")} variant="contained">
            Login
          </button>
          <button onClick={() => handleClick("/signup")} variant="contained">
            SignUp
          </button>
        </div>
      </main>
      <Box
        sx={{
          display: "flex",
          flexDirection: "row",
          flexWrap: "wrap",
          justifyContent: "center",
          alignItems: "center",
          width: "100%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            textAlign: "center",
            p: "10px",
            width: "200px",
            height: "205px",
            borderRadius: "12px",
            boxShadow: "2px 0px 30px 0px rgba(0,0,0,0.7)",
            m: "20px 20px 0",
          }}
        >
          <Avatar>A</Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              p: "10px 0",
            }}
          >
            <h3>Allan</h3>
            <p>Scrum Master</p>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <GitHub sx={{ fontSize: 40, color: "#161b22" }} />
              <LinkedIn sx={{ fontSize: 40, color: "#dfc2ea" }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "10px",
            width: "200px",
            height: "205px",
            borderRadius: "12px",
            boxShadow: "2px 0px 30px 0px rgba(0,0,0,0.7)",
            m: "20px 20px 0",
          }}
        >
          <Avatar>F</Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: "10px 0",
            }}
          >
            <h3>Filipe</h3>
            <p>Product Owner</p>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <GitHub sx={{ fontSize: 40, color: "#161b22" }} />
              <LinkedIn sx={{ fontSize: 40, color: "#dfc2ea" }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "10px",
            width: "200px",
            height: "205px",
            borderRadius: "12px",
            boxShadow: "2px 0px 30px 0px rgba(0,0,0,0.7)",
            m: "20px 20px 0",
          }}
        >
          <Avatar>G</Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: "10px 0",
            }}
          >
            <h3>Gustavo</h3>
            <p>Quality Assurance</p>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <GitHub sx={{ fontSize: 40, color: "#161b22" }} />
              <LinkedIn sx={{ fontSize: 40, color: "#dfc2ea" }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "10px",
            width: "200px",
            height: "205px",
            borderRadius: "12px",
            boxShadow: "2px 0px 30px 0px rgba(0,0,0,0.7)",
            m: "20px 20px 0",
          }}
        >
          <Avatar>H</Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: "10px 0",
            }}
          >
            <h3>Heitor</h3>
            <p>Quality Assurance</p>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <GitHub sx={{ fontSize: 40, color: "#161b22" }} />
              <LinkedIn sx={{ fontSize: 40, color: "#dfc2ea" }} />
            </Box>
          </Box>
        </Box>

        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            p: "10px",
            width: "200px",
            height: "205px",
            borderRadius: "12px",
            boxShadow: "2px 0px 30px 0px rgba(0,0,0,0.7)",
            m: "20px 20px 0",
          }}
        >
          <Avatar>M</Avatar>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              textAlign: "center",
              p: "10px 0",
            }}
          >
            <h3>Marta</h3>
            <p>Tech Leader</p>
            <Box
              sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-evenly",
              }}
            >
              <GitHub sx={{ fontSize: 40, color: "#161b22" }} />
              <LinkedIn sx={{ fontSize: 40, color: "#dfc2ea" }} />
            </Box>
          </Box>
        </Box>
      </Box>
    </Container>
  );
}

export default Home;
