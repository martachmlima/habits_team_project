import { Container } from "./styles";
import { useEffect, useState } from "react";
import api from "../../services/api";
import HabitCard from "../HabitCard";
import { useUser } from "../../providers/User";
import toast from "react-hot-toast";

const HabitDisplay = () => {
  const { token } = useUser();

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
  }, [token]);

  const deleteHabit = (id) => {
    const newHabits = habits.filter((habit) => habit.id !== id);
    api
      .delete(`habits/${id}/`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        setHabits(newHabits);
        toast.success("Hábito deletado!");
      })
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
          id={habit.id}
          onClick={() => deleteHabit(habit.id)}
        />
      ))}
    </Container>
  );
};

export default HabitDisplay;
