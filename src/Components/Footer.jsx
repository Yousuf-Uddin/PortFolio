import { useEffect, useState } from "react";

export default function Footer() {
  const [time, setTime] = useState({ hour: "", minute: "", year: "" });

  useEffect(() => {
    const updateTime = () => {
      const now = new Date();
      const year = now.getFullYear().toString().padStart(2, "0");
      const hour = now.getHours().toString().padStart(2, "0");
      const minute = now.getMinutes().toString().padStart(2, "0");
      setTime({ hour, minute, year });
    };

    updateTime();
    const intervalId = setInterval(updateTime, 60000); // Update every minute

    return () => clearInterval(intervalId);
  }, []);

  return (
    <div className="lg:flex font-[type1] text-lg font-thin lg:justify-between  p-4 items-center h-20 bg-inherit text-white">
      <div className="flex gap-2 justify-center">
        <p className="text-slate-400">Hyderabad, IND</p>
        <div className="time text-slate-200">
          <span>{time.hour}</span>
          <span className="flash">:</span>
          <span>{time.minute}</span>
        </div>
      </div>
      <div>
        <div className="hidden lg:block">
          <div className="text-xl font-poppins text-slate-200 font-bold hover:text-orange-400 hover:cursor-pointer pl-14">
            yousuf.msoodi@gmail.com
          </div>
        </div>
      </div>
      <div>
        <div>
          &copy; Yousuf-Uddin, <span>{time.year}</span>
        </div>
      </div>
    </div>
  );
}
