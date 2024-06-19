import { Chart, ArcElement, Title, SubTitle} from "chart.js"
import { Doughnut } from "react-chartjs-2"
import "../../css/CentraManagerChart.css"

// eslint-disable-next-line react/prop-types
function PieChartDashboard({dataPie, label}) {
  Chart.register(ArcElement, Title, SubTitle)
  const data = {
    labels: ["Data", ""],
    datasets: [{
        label: "My First dataset",
        backgroundColor: ["#FF7C52", "#ACB3B9"],
        data: dataPie,
    }]};
    const option = {
      reposive: true,
      plugins: {
        legend: {
          display: false,
        },
        title: {
          display: "true",
          text: String( + dataPie[0] + "%"),
          color: "#FF7C52",
          padding: {
            top: 70,
            bottom: -100,
            right: 0,
            left: 0,
          },
          font: {
            size: 16,
            family: "Helvetica",
            weight: "bold"
        }
        },
        subtitle: {
          display: "true",
          text: label,
          padding: {
            top: 70,
            bottom: -100,
            right: 0,
            left: 0,
          },
          font: {
            size: 8,
            family: "Helvetica",
            weight: "bold"
        }
        }
      }
    }
  return (
    <div className="PieChartWrapper">
      <Doughnut data={data} options={option}/>
    </div>
  )
}

export default PieChartDashboard