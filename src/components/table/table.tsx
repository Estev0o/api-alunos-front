import { } from "lucide-react"
import { useState } from "react"

export default function Table() {
    return (
        <div className="h-screen flex flex-col justify-start gap-x-10 p-6">
            <div className="w-full flex justify-center">
                <button className="text-zinc-50 text-2xl flex mb-3 px-10">Incuir aluno</button>
            </div>
            
            <table className="table-fixed w-full border-collapse border border-gray-200">
                <thead>
                    <tr className="bg-sky-800 text-white text-xl">
                        <th className="py-3 px-4">Song</th>
                        <th className="py-3 px-4">Artist</th>
                        <th className="py-3 px-4">Year</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="py-3 px-4">The Sliding Mr. Bones (Next Stop, Pottersville)</td>
                        <td className="py-3 px-4">Malcolm Lockyer</td>
                        <td className="py-3 px-4">1961</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-4">Witchy Woman</td>
                        <td className="py-3 px-4">The Eagles</td>
                        <td className="py-3 px-4">1972</td>
                    </tr>
                    <tr>
                        <td className="py-3 px-4">Shining Star</td>
                        <td className="py-3 px-4">Earth, Wind, and Fire</td>
                        <td className="py-3 px-4">1975</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}
