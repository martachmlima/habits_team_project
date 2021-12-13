import { Container } from "./styles";
import HabitCard from "../HabitCard";
import { useUser } from "../../providers/User";

const HabitDisplay = () => {
  const { habits, deleteHabit } = useUser();

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
