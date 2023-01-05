import Link from 'next/link';
import React from 'react'


interface Engine {
    name: string;
    version: string;
    deciption: string;
    link: string;
}

interface Props {
    listOfEngine: Array<Engine>;
}



export const EngineList: React.FC<Props> = ({ listOfEngine }) => {
    return (

        <div className="relative overflow-x-auto shadow-md sm:rounded-lg mb-5">
            <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                <caption className="p-5 text-lg font-semibold text-left text-gray-900 bg-white dark:text-white dark:bg-gray-800">
                    Our engines
                    <p className="mt-1 text-sm font-normal text-gray-500 dark:text-gray-400">Browse a list of Bad Engines created by our developer team.</p>
                </caption>
                <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" className="px-6 py-3">
                            Engine name
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Version
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Desciption
                        </th>
                        <th scope="col" className="px-6 py-3">
                            Link
                        </th>
                    </tr>
                </thead>
                <tbody>

                    {listOfEngine?.map((engine, _index) => {

                        return (<tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                {engine.name}
                            </th>
                            <td className="px-6 py-4 italic">
                                {engine.version}
                            </td>
                            <td className="px-6 py-4 font-bold">
                                {engine.deciption}
                            </td>
                            <td className="px-6 py-4">

                                <Link href={engine.link} className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">To engine!</Link>

                            </td>
                        </tr>)

                    })}





                </tbody>
            </table>
        </div>

    )
}
