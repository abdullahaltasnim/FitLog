import { IGym } from "@/types/gym.type";
import Image from "next/image";
import { notFound } from "next/navigation";

interface IPageProps {
  params: Promise<{
    id: string;
  }>;
}

const getGymPage = async (): Promise<IGym[]> => {
  const response = await fetch(
    "https://api.abcz.workers.dev/api/fitlog"
  );

  if (!response.ok) {
    throw new Error("Failed to fetch gym data");
  }

  const data: IGym[] = await response.json();

  return data;
};

const Page = async ({ params }: IPageProps) => {
  const { id } = await params;

  const gymData = await getGymPage();

  const gym = gymData.find(
    (item) => item.id === Number(id)
  );

  if (!gym) {
    notFound();
  }

  return (
    <main className="min-h-screen bg-[#101116] text-white">
      <div className="container mx-auto px-5 py-[70px]">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:gap-12">

          {/* LEFT SIDE - IMAGE */}
          <div className="relative h-[500px] w-full overflow-hidden rounded-[14px] lg:h-[610px]">
            <Image
              src={gym.image}
              alt={gym.name}
              fill
              priority
              className="object-cover"
            />
          </div>

          {/* RIGHT SIDE */}
          <div>
            {/* Workout Name */}
            <h1 className="text-[36px] font-black uppercase leading-tight tracking-tight text-white">
              {gym.name}
            </h1>

            {/* Description */}
            <p className="mt-2 max-w-[600px] text-[18px] leading-6 text-[#9499a3]">
              {gym.description}
            </p>

            {/* Muscle Groups */}
            <div className="mt-5 flex flex-wrap gap-2">
              {gym.muscleGroups.map((muscle) => (
                <span
                  key={muscle}
                  className="rounded-full bg-[#c6ff00] px-4 py-[5px] text-[18px] font-bold text-black"
                >
                  {muscle}
                </span>
              ))}
            </div>

            {/* Details Table */}
            <div className="mt-7 overflow-hidden rounded-[16px] border border-[#292d36] bg-[#171a21]">

              {/* Equipment */}
              <div className="flex items-center justify-between border-b border-[#292d36] px-5 py-4">
                <span className="text-[18px] font-bold uppercase tracking-wide text-[#8d929d]">
                  Equipment
                </span>

                <span className="text-[18px] text-[#e2e3e7]">
                  {gym.equipment}
                </span>
              </div>

              {/* Difficulty */}
              <div className="flex items-center justify-between border-b border-[#292d36] px-5 py-4">
                <span className="text-[18px] font-bold uppercase tracking-wide text-[#8d929d]">
                  Difficulty
                </span>

                <span className="text-[18px] text-[#e2e3e7]">
                  {gym.difficulty}
                </span>
              </div>

              {/* Sets */}
              <div className="flex items-center justify-between border-b border-[#292d36] px-5 py-4">
                <span className="text-[18px] font-bold uppercase tracking-wide text-[#8d929d]">
                  Sets
                </span>

                <span className="text-[18px] text-[#e2e3e7]">
                  {gym.sets}
                </span>
              </div>

              {/* Reps */}
              <div className="flex items-center justify-between border-b border-[#292d36] px-5 py-4">
                <span className="text-[18px] font-bold uppercase tracking-wide text-[#8d929d]">
                  Reps
                </span>

                <span className="text-[18px] text-[#e2e3e7]">
                  {gym.reps}
                </span>
              </div>

              {/* Duration */}
              <div className="flex items-center justify-between border-b border-[#292d36] px-5 py-4">
                <span className="text-[18px] font-bold uppercase tracking-wide text-[#8d929d]">
                  Duration
                </span>

                <span className="text-[18px] text-[#e2e3e7]">
                  {gym.duration} min
                </span>
              </div>

              {/* Calories */}
              <div className="flex items-center justify-between border-b border-[#292d36] px-5 py-4">
                <span className="text-[18px] font-bold uppercase tracking-wide text-[#8d929d]">
                  Calories
                </span>

                <span className="text-[18px] text-[#e2e3e7]">
                  {gym.caloriesBurned} kcal
                </span>
              </div>

              {/* Rating */}
              <div className="flex items-center justify-between px-5 py-4">
                <span className="text-[18px] font-bold uppercase tracking-wide text-[#8d929d]">
                  Rating
                </span>

                <span className="text-[18px] text-[#e2e3e7]">
                  {gym.rating}
                </span>
              </div>
            </div>

            {/* Instructions */}
            <div className="mt-7">
              <h2 className="text-[18px] font-black uppercase tracking-wide">
                Instructions
              </h2>

              <ol className="mt-4 space-y-3">
                {gym.instructions.map((instruction, index) => (
                  <li
                    key={index}
                    className="flex gap-3 text-[18px] leading-5 text-[#adb1ba]"
                  >
                    <span className="min-w-[18px]">
                      {index + 1}.
                    </span>

                    <span>{instruction}</span>
                  </li>
                ))}
              </ol>
            </div>

            {/* Buttons */}
            <div className="mt-8 flex flex-wrap gap-3">

              {/* Add To Plan */}
              <button className="flex items-center gap-2 rounded-[10px] bg-[#c6ff00] px-6 py-3 text-[18px] font-bold text-black transition hover:bg-[#b5eb00]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <rect
                    x="4"
                    y="5"
                    width="16"
                    height="15"
                    rx="2"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path
                    d="M8 3V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M16 3V7"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M4 10H20"
                    stroke="currentColor"
                    strokeWidth="2"
                  />

                  <path
                    d="M12 13V17"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />

                  <path
                    d="M10 15H14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                  />
                </svg>

                Add to today's plan
              </button>

              {/* Save Button */}
              <button className="flex items-center gap-2 rounded-[10px] border border-[#343945] bg-transparent px-6 py-3 text-[13px] font-medium text-[#d1d4db] transition hover:bg-[#1a1d23]">
                <svg
                  width="15"
                  height="15"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M6 4C6 2.89543 6.89543 2 8 2H16C17.1046 2 18 2.89543 18 4V21L12 17L6 21V4Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>

                Save for later
              </button>

            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default Page;