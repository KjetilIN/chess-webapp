import React from 'react'

interface Props {
    evaluation: number; // 0 -> draw && 1 -> mate found for white
}

export const Evalbar: React.FC<Props> = ({ evaluation }) => {

    // Function that tuns evaluation into height of the BLACK BAR 
    function evalBarHeight(winRateWhite: number): string {
        let calulation = winRateWhite * 50 + 50;
        if (calulation > 100) calulation = 100;
        if (calulation < 0) calulation = 0;
        return (100 - calulation) + "%";
    }



    return (
        <div>
            <div className="w-[20px] h-[560px] bg-white border-[2px] border-black relative ">
                <div className='w-full bg-black absolute z-10' style={{ height: evalBarHeight(evaluation) }}></div>
                <div className='w-[18px] h-[5px] bg-gray-500 absolute z-20 top-1/2'></div>
            </div>
            <h6> {evaluation}</h6>
        </div>

    )
}
