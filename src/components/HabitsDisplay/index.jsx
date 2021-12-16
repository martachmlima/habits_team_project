import { Container, Box } from "./styles";
import HabitCard from "../HabitCard";
import { useUser } from "../../providers/User";
import NewHabit from '../NewHabit'

const HabitDisplay = () => {
  const { deleteHabit, filterHabts } = useUser();

  return (
    <Box>
      <div className='bearer'>
        <h2>Meus Hábitos</h2>
        <NewHabit/>
      </div>
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
    </Box>
  );
};

export default HabitDisplay;
