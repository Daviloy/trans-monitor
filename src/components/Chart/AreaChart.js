import React from "react";
import Chart from "react-apexcharts";

function AreaChart() {
    const [options, setOptions] = React.useState({
        chart: {
            type: "bar",
            height: 350,
        },
        plotOptions: {
            bar: {
                horizontal: true,
            },
        },
        dataLabels: {
            enabled: false,
        },
        xaxis: {
            categories: [
                "Lagos",
                "Abuja",
                "Owerri",
                "Ijebu",
                "Jos",
                "Benin City",
                "Kano",
                "Ibadan",
                "Uyo",
				"Bayelsa"
            ],
        },
    });
    const [series, setSeries] = React.useState([
        {
            data: [400, 430, 448, 470, 540, 580, 690, 1100, 1200, 1380],
        },
    ]);

    return <Chart options={options} series={series} type="area" />;
}

export default AreaChart;
