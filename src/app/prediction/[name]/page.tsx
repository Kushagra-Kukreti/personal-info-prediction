interface paramsType {
  params: {
    name: string;
  };
}

const getPredictedAge = async(name:string)=>{
   const res = await fetch(`https://api.agify.io?name=${name}`)
   return res.json();
}
const getPredictedGender = async(name:string)=>{
    const res = await fetch(`https://api.genderize.io?name=${name}`)
    return res.json();
}
const getPredictedNationality = async(name:string)=>{
    const res = await fetch(`https://api.nationalize.io?name=${name}`)
    return res.json();
}
export default async function Home({ params }: paramsType) {
   const age = await getPredictedAge(params.name)
   const gender = await getPredictedGender(params.name)
   const nationality = await getPredictedNationality(params.name)
  return (
    <main className="flex min-h-screen flex-col items-center justify-center">
        <div className="flex flex-col gap-2 ">
        <span className="text-center text-lg bg-gray-600 px-3 py-2 rounded-md mb-5">{params.name} details</span>
        <div className="flex gap-2">
       <div className="bg-slate-500 px-3 py-2 rounded-md">AGE-{age?.age}</div>
       <div className="bg-red-400 px-3 py-2 rounded-md">GENDER-{gender?.gender}</div>
       <div className="bg-green-300 px-3 py-2 rounded-md">NATIONALITY-{nationality?.country[0]?.country_id}</div>
       </div>
       </div>
    </main>
  );
}
