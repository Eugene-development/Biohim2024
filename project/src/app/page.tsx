import { Hero, Stats, Direction, Advantage } from "@/UI";

export const metadata = {
  title: "Компания Биохим | Перекись водорода оптом",
  description:
    "Перекись водорода оптом со склада в Москве. Предлагаем конкурентные цены на перекись водорода. Доставка спецтранспортом.",
};

export default function Page() {
  return (
    <>
      <Hero />
      <Stats />
      <Direction />
      <Advantage />
    </>
  );
}
