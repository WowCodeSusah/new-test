import { CategoryScale, Chart, LinearScale, BarElement, Tooltip, PointElement, LineElement, Filler } from "chart.js"
import { Line } from "react-chartjs-2"
import "../../css/ProductionCentraManager.css"

function ProductionInsideChart() {
    Chart.register(CategoryScale, LinearScale, BarElement, PointElement, LineElement, Filler, Tooltip)
    const data = {
        labels: ["Jan", "Feb", "Mar", "Apr", "May", "Jun"],
        datasets: [{
            label: "My First dataset",
            backgroundColor: "rgb(60, 146, 132, 0.2)",
            fill: true,
            borderColor: "#3C9284",
            lineTension: 0.4,
            borderRadius: 8,
            data: [3, 4, 6, 3.5, 2, 3],
    }]};
    const option = {
        scales: {
            y: {
                beginAtZero: true,
                max: 10,
            }
        },
        plugins: {
            legend: {
              display: false,
            },
          },
    }
  return (
    <div style={{margin: "auto"}}>
        <div className="ProductionInsideChartTitle">Total Amount</div>
        <Line
            options={option}
            data={data}
        />
    </div>
  )
}

export default ProductionInsideChart