import { Card } from "flowbite-react";

export default function CardComponent() {
  return (
    <Card
      className="max-w-sm"
      imgSrc="https://api.istad.co/media/image/899bac49-e47c-406c-abb2-30ad0b498f88.png"
      horizontal
    >
      <h5 className="text-2xl font-bold tracking-tight text-blue-900 dark:text-white">
        Noteworthy technology acquisitions 2021
      </h5>
      <p className="font-normal text-gray-700 dark:text-gray-400">
        Here are the biggest enterprise technology acquisitions of 2021 so far,
        in reverse chronological order.
      </p>
    </Card>
  );
}
