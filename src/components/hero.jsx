import { BulbOutlined } from "@ant-design/icons";

export default function Hero() {
  return (
    <>
      <main className="flex flex-col md:flex-row gap-5 md:justify-between items-start md:items-center md:py-[8rem] md:px-[3rem] p-[2rem]">
        <div className="details flex flex-col md:items-center items-start gap-4 md:gap-5 text-white">
          <h1 className="text-3xl md:text-[50px] leading-[45px] md:leading-[70px] font-semibold md:font-bold w-full md:w-[70%] md:text-center">
            Pioneering Intelligent Education Through Artificial Intelligence and Learning Science.
          </h1>
          <p className="md:w-[49%] md:text-center font-medium">
           We unite advanced AI with human understanding to convert data into actionable insight, shaping learning experiences that are intelligent, adaptive, and personally meaningful.
          </p>

          <div className="btn flex flex-row items-start gap-3">
            <button className="bg-primary text-white flex items-center gap-2 outline-none md:px-10 md:py-4 p-2 rounded capitalize">
              <BulbOutlined className="text-yellow-400 font-bold text-xl md:text-lg" />{" "}
              <p className="text-sm md:text-lg">Explore Our Solutions</p>
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
