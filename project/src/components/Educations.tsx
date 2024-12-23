import Image from "next/image";

export default function EducationPage(){
    return (<>
        <div className="flex justify-center">
            <ol className="relative border-s border-gray-200">                  
                <li className="mb-16 ms-10 mt-4">
                    <Image src="/image/he2b.png" width={46} height={46} className="absolute rounded-full -start-6 border border-blue-800" alt="He2b logo"/>
                    <time className="text-sm font-normal leading-none text-gray-400">2021 - 2025</time>
                    <h3 className="text-lg font-semibold text-gray-900">École Supérieure d&apos;Informatique (ESI)</h3>
                    <p className="mb-4 text-base font-normal text-gray-500">Bachelor&apos;s degree, Computer Programming, Specific Applications</p>
                </li>
                <li className="mb-16 ms-10">
                    <Image src="/image/CSFA.png" width={46} height={46} className="absolute rounded-full -start-6 border border-blue-800 mt-1" alt="He2b logo"/>
                    <time className="text-sm font-normal leading-none text-gray-400">Sep 2019 - Jun 2021</time>
                    <h3 className="text-lg font-semibold text-gray-900">College Saint-François d&apos;assise</h3>
                    <p className="text-base font-normal text-gray-500">Certificat d&apos;enseignement secondaire supérieur, Modern Languages (Dutch, English), Mathematics, Sciences</p>
                </li>
            </ol>
        </div>
        </>)
}