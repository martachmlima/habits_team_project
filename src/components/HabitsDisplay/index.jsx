import { Container } from "./styles";
import HabitCard from "../HabitCard";
import { useUser } from "../../providers/User";

const HabitDisplay = () => {
  const { deleteHabit, filterHabts } = useUser();

  return (
    <Container>
      {filterHabts().map((habit) => (
        <HabitCard
          key={habit.id}
          title={habit.title}
          categoria={habit.category}
          dificuldade={habit.difficulty}
          frequencia={habit.frequency}
          id={habit.id}
          achievedValue={habit.how_much_achieved}
          done={habit.achieved}
          onClick={() => deleteHabit(habit.id)}
        />
      ))}
    </Container>
  );
};

export default HabitDisplay;
