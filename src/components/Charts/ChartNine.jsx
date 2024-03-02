import React from 'react'

const ChartNine = () => {
    return (
        <div>
            <div class="mb-5 flex flex-wrap items-center justify-between gap-2">
                <div>
                    <h4 class="text-[22px] font-bold text-black">
                        Total Investment
                    </h4>
                </div>
                <div class="relative z-20 inline-block rounded">
                    <select class="relative z-20 inline-flex appearance-none rounded border border-stroke bg-transparent py-[5px] pl-3 pr-8 text-sm font-medium outline-none">
                        <option value="" class="">Last 7 days</option>
                        <option value="" class="">Last 15 days</option>
                    </select>
                    <span class="absolute right-3 top-1/2 z-10 -translate-y-1/2">
                        <svg width="17" height="17" viewBox="0 0 17 17" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M8.61025 11.8872C8.46025 11.8872 8.33525 11.8372 8.21025 11.7372L2.46025 6.08723C2.23525 5.86223 2.23525 5.51223 2.46025 5.28723C2.68525 5.06223 3.03525 5.06223 3.26025 5.28723L8.61025 10.5122L13.9603 5.23723C14.1853 5.01223 14.5353 5.01223 14.7603 5.23723C14.9853 5.46223 14.9853 5.81223 14.7603 6.03723L9.01025 11.6872C8.88525 11.8122 8.76025 11.8872 8.61025 11.8872Z" fill="#64748B"></path>
                        </svg>
                    </span>
                </div>
            </div>
            <div class="mb-3 flex flex-wrap gap-6">
                <div>
                    <p class="mb-1.5 text-sm font-medium text-secondary">Invested Value</p>
                    <div class="flex items-center gap-2">
                        <p class="font-medium text-black">$1,279.95</p>
                        <p class="flex items-center gap-1 font-medium text-green-500">
                            1,22%

                            <svg class="fill-current" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z" fill=""></path>
                            </svg>
                        </p>
                    </div>
                </div>

                <div>
                    <p class="mb-1.5 text-sm font-medium text-secondary">Total Returns</p>
                    <div class="flex items-center gap-2">
                        <p class="font-medium text-black">$22,543.87</p>
                        <p class="flex items-center gap-1 font-medium text-green-500">
                            10.14%

                            <svg class="fill-current" width="11" height="8" viewBox="0 0 11 8" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M5.77105 0.0465078L10.7749 7.54651L0.767256 7.54651L5.77105 0.0465078Z" fill=""></path>
                            </svg>
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartNine
