import React, { useState } from 'react'
import ReactApexChart from 'react-apexcharts';
const options = {
    legend: {
        show: false,
        position: 'top',
        horizontalAlign: 'left',
    },
    colors: ['#3C50E0', '#80CAEE'],
    chart: {
        fontFamily: 'Satoshi, sans-serif',
        height: 335,
        type: 'area',
        dropShadow: {
            enabled: true,
            color: '#623CEA14',
            top: 10,
            blur: 4,
            left: 0,
            opacity: 0.1,
        },

        toolbar: {
            show: false,
        },
    },
    responsive: [
        {
            breakpoint: 1024,
            options: {
                chart: {
                    height: 300,
                },
            },
        },
        {
            breakpoint: 1366,
            options: {
                chart: {
                    height: 350,
                },
            },
        },
    ],
    stroke: {
        width: [2, 2],
        curve: 'straight',
    },
    // labels: {
    //   show: false,
    //   position: "top",
    // },
    grid: {
        xaxis: {
            lines: {
                show: false,
            },
        },
        yaxis: {
            lines: {
                show: true,
            },
        },
    },
    dataLabels: {
        enabled: false,
    },
    markers: {
        size: 4,
        colors: '#fff',
        strokeColors: ['#3056D3', '#80CAEE'],
        strokeWidth: 3,
        strokeOpacity: 0.9,
        strokeDashArray: 0,
        fillOpacity: 1,
        discrete: [],
        hover: {
            size: undefined,
            sizeOffset: 5,
        },
    },
    xaxis: {
        type: 'category',
        categories: [
            'Sep',
            'Oct',
            'Nov',
            'Dec',
            'Jan',
            'Feb',
            'Mar',
            'Apr',
            'May',
            'Jun',
            'Jul',
            'Aug',
        ],
        axisBorder: {
            show: true,
        },
        axisTicks: {
            show: false,
        },
    },
    yaxis: {
        title: {
            style: {
                fontSize: '0px',
            },
        },
        min: 0,
        max: 100,
    },
};

const ChartOne = () => {
    const [state, setState] = useState ({
        series: [
            {
                name: 'Product One',
                data: [23, 11, 22, 27, 13, 22, 37, 21, 44, 22, 30, 45],
            },

            {
                name: 'Product Two',
                data: [30, 25, 36, 30, 45, 35, 64, 52, 59, 36, 39, 51],
            },
        ],
    });
    return (
        <>
            <div class="flex flex-wrap items-start justify-between gap-3 md:flex-nowrap">
                <div class="flex w-full flex-wrap gap-3 md:gap-5">
                    <div class="flex min-w-48">
                        <span class="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-primary">
                            <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-primary"></span>
                        </span>
                        <div class="w-full">
                            <p class="font-semibold text-primary">Total Revenue</p>
                            <p class="text-sm font-medium text-secondary">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                    <div class="flex min-w-48">
                        <span class="mr-2 mt-1 flex h-4 w-full max-w-4 items-center justify-center rounded-full border border-secondary">
                            <span class="block h-2.5 w-full max-w-2.5 rounded-full bg-secondary"></span>
                        </span>
                        <div class="w-full">
                            <p class="font-semibold text-secondary">Total Sales</p>
                            <p class="text-sm font-medium text-secondary">12.04.2022 - 12.05.2022</p>
                        </div>
                    </div>
                </div>
                <div class="flex w-full max-w-45 justify-end">
                    <div class="inline-flex items-center rounded-md bg-gray-100 p-1.5">
                        <button class="rounded bg-white px-3 py-1 text-xs font-medium text-black shadow-card hover:bg-white hover:shadow-md">
                            Day
                        </button>
                        <button class="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-md ">
                            Week
                        </button>
                        <button class="rounded px-3 py-1 text-xs font-medium text-black hover:bg-white hover:shadow-md ">
                            Month
                        </button>
                    </div>
                </div>
            </div>
            <ReactApexChart options={options} series={state.series} type="area" height={335} />
        </>
    )
}

export default ChartOne
