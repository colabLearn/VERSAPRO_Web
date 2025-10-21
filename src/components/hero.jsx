import { RocketOutlined, BulbOutlined } from "@ant-design/icons";
import image from '../assets/hero.jpg'

export default function Hero() {
  return (
    <>
      <main className="flex flex-col md:flex-row gap-5 md:justify-between items-start md:items-center md:p-[3rem] p-[2rem]">
        <div className="details md:flex-[.5] flex-1 flex flex-col items-start gap-2 md:gap-5">
          <h1 className="text-3xl md:text-[50px] leading-[45px] md:leading-[60px] font-semibold md:font-bold">Leading the Revolution with Cutting-Edge Technology</h1>
          <p className="text-text-color">
            Empowering the next generation of tech leaders and bridging the
            digital divide
          </p>

          <div className="btn flex flex-row items-start gap-3">
            <button className="bg-primary text-white flex items-center gap-2 outline-none md:px-10 md:py-4 p-2 rounded capitalize">
              <RocketOutlined className="text-yellow-400 font-bold text-xl md:text-lg" /> <p className="text-sm md:text-lg">get started</p>
            </button>
            <button className="bg-primary text-white flex items-center gap-2 outline-none md:px-10 md:py-4 p-2 rounded capitalize">
              <BulbOutlined className="text-yellow-400 font-bold text-xl md:text-lg" /> <p className="text-sm md:text-lg">learn more</p>
            </button>
          </div>
        </div>
        <div className="image md:flex-[.5] flex-1">
            <img src={image} alt="hero-image" />
        </div>
      </main>
    </>
  );
}
