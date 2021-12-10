import { Container } from "./styles";
import jwt_decode from "jwt-decode";
import { useEffect, useState } from "react";
import api from "../../services/api";
import HabitCard from "../HabitCard";

const HabitDisplay = () => {
  const token = JSON.parse(localStorage.getItem("@KenzieHabits:token"));
  const decoded = jwt_decode(token);

  const [habits, setHabits] = useState([]);

  useEffect(() => {
    api
      .get("habits/personal/", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(response.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const deleteHabit = (id) => {
    const newHabits = habits.filter((habit) => habit.id !== id);
    api
      .delete(`habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => setHabits(newHabits))
      .catch((err) => console.log(err));
  };

  return (
    <Container>
      {habits.map((habit) => (
        <HabitCard
          key={habit.id}
          title={habit.title}
          categoria={habit.category}
          dificuldade={habit.difficulty}
          frequencia={habit.frequency}
          onClick={() => deleteHabit(habit.id)}
        />
      ))}
    </Container>
  );
};

export default HabitDisplay;