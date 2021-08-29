import styled from "styled-components";
import MoodForm from "./MoodForm";
import MoodLogs from "./MoodLogs";
import meditating from "../../assets/open-doodles-meditating.svg";
import WeeklyMoodChart from "./WeeklyMoodChart";
import MoodFrequencyChart from "./MoodFrequencyChart";
import { MoodDataProvider } from "../../context/MoodContext";
import Header from "../layout/Header";

const StyledMoodSpace = styled.section`
  width: 100%;
  padding-bottom: 2rem;

  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 3rem;

  #meditating-doodle {
    width: clamp(10rem, 15vw, 16rem);
    animation: meditate 3s linear 0s infinite;

    @keyframes meditate {
      0% {
        transform: translateY(0);
      }
      25% {
        transform: translateY(5%);
      }
      50% {
        transform: translateY(10%);
      }
      75% {
        transform: translateY(5%);
      }
      100% {
        transform: translateY(0);
      }
    }
  }

  .mood-charts {
    width: clamp(22rem, 50vw, 40rem);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
    font-size: 1rem;

    h3 {
      font-weight: lighter;
      font-size: 1.1rem;
    }

    .weekly-mood-chart,
    .mood-frequency-chart {
      width: 100%;
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2rem;
    }
  }
`;

const MoodSpace = () => {
  return (
    <MoodDataProvider>
      <StyledMoodSpace>
        <Header />
        <img src={meditating} alt="meditating mood" id="meditating-doodle" />
        <MoodForm />
        <MoodLogs />
        <section className="mood-charts">
          <div className="weekly-mood-chart">
            <h3>Weekly mood chart</h3>
            <WeeklyMoodChart />
          </div>
          <div className="mood-frequency-chart">
            <h3>Your mood frequency chart</h3>
            <MoodFrequencyChart />
          </div>
        </section>
      </StyledMoodSpace>
    </MoodDataProvider>
  );
};

export default MoodSpace;
