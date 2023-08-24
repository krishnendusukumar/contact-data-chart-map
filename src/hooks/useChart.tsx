import { useQuery } from '@tanstack/react-query';

export const options = {
    scales: {
        y: {
            beginAtZero: true,
        },
        x: { beginAtZero: true },
    },
};

const useChart = () => {

    const chartsData = useQuery({
        queryKey: ["mydata"],
        queryFn: () =>
            fetch("https://disease.sh/v3/covid-19/historical/all?lastdays=all")
                .then(
                    (res) => res.json()
                ),
    });

    const totalCases = chartsData?.data?.cases;
    const totaldeaths = chartsData?.data?.deaths;
    const totalRecovered = chartsData?.data?.recovered;

    let numsArray = [];
    let caseArray = [];
    let deathArray = [];
    let recoveredArray = [];

    for (let key in totalCases) {
        numsArray.push(key + 1);
    }

    for (let key in totalCases) {
        caseArray.push(totalCases[key]);
    }

    for (let key in totaldeaths) {
        deathArray.push(totaldeaths[key]);
    }

    for (let key in totalRecovered) {
        recoveredArray.push(totalRecovered[key]);
    }

    const chartData = {
        labels: numsArray,
        datasets: [
            {
                label: "Total Cases",
                data: caseArray,
                backgroundColor: "#00ffff",
                borderColor: "#d7a231",
                borderWidth: 0,
            },
            {
                label: "Deaths",
                data: deathArray,
                backgroundColor: "#ff0b0b",
                borderColor: "#320f94",
                borderWidth: 0,
            },
            {
                label: "Recoverd",
                data: recoveredArray,
                backgroundColor: "#00de3b",
                borderColor: "#009d1f",
                borderWidth: 0,
            },
        ],
    };
    return chartData
}

export default useChart