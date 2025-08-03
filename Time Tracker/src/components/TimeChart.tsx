import { Pie } from "react-chartjs-2";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend
} from "chart.js";

// ✅ Register chart components
ChartJS.register(ArcElement, Tooltip, Legend);

// ✅ Define prop types
interface Props {
  data: { activity: string; hours: number }[];
}

const TimeChart = ({ data }: Props) => {
  const chartData = {
    labels: data.map((d) => d.activity),
    datasets: [
      {
        label: "Hours",
        data: data.map((d) => d.hours),
        backgroundColor: [
          "#FF6384",
          "#36A2EB",
          "#FFCE56",
          "#034D39",
          "#A078FA",
          "#4BC0C0",
        ],
        borderWidth: 1,
      },
    ],
  };

  return <Pie data={chartData} />;
};

export default TimeChart;
