import React from "react";
import { BentoGrid, BentoGridItem } from "./ui/bento-grid";

export const Grid = () => {
  const gridItems = [
    {
      id: 1,
      title: "Firstone",
      description:
        " lorrem ippsumm lorem ipsum is lorem and again is lorem ipsum is again and again is it and it",
    },
    {
      id: 2,
      title: "Secondone",
      description:
        " lorrem ippsumm lorem ipsum is lorem and again is lorem ipsum is again and again is it and it",
    },
    {
      id: 3,
      title: "Thirdone",
      description:
        " lorrem ippsumm lorem ipsum is lorem and again is lorem ipsum is again and again is it and it",
    },
    {
      id: 4,
      title: "Fourthone",
      description:
        " lorrem ippsumm lorem ipsum is lorem and again is lorem ipsum is again and again is it and it",
    },
    {
      id: 5,
      title: "Fifthone",
      description:
        " lorrem ippsumm lorem ipsum is lorem and again is lorem ipsum is again and again is it and it",
    },
  ];
  return (
    <section id="about">
      <BentoGrid>
        {gridItems.map((item) => (
          <BentoGridItem
            key={item.id}
            id={item.id}
            title={item.title}
            description={item.description}
          />
        ))}
      </BentoGrid>
    </section>
  );
};
