import { useRouter } from "next/router";

const SidebarLogo = () => {
  const router = useRouter();

  return (
    <div
      onClick={() => router.push("/")}
      className="
        rounded-full 
        h-14
        w-14
        p-4 
        flex 
        items-center 
        justify-center 
        hover:bg-blue-300 
        hover:bg-opacity-10 
        cursor-pointer
    "
    >
      <span className="text-green-400 font-bold text-2xl ">View</span>
      <span className="text-white font-bold text-2xl">In</span>
    </div>
  );
};

export default SidebarLogo;
