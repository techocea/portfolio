import Image from "next/image";

export default function Gallery() {
  return (
    <div className="grid grid-cols-6 grid-rows-2 gap-4">
      <div className="col-span-2 row-span-2">
        <Image
          src="/p6.jpg"
          alt="p6"
          width={350}
          height={200}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="col-span-2 row-span-2">
        <Image
          src="/p2.jpg"
          alt="p2"
          width={350}
          height={370}
          className="object-cover rounded-lg "
        />
      </div>
      <div className="col-span-2 row-span-2">
        <Image
          src="/p3.jpg"
          alt="p3"
          width={250}
          height={0}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="col-span-2 row-span-2">
        <Image
          src="/p4.jpg"
          alt="p4"
          width={350}
          height={200}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="col-span-2 row-span-2">
        <Image
          src="/p5.jpg"
          alt="p5"
          width={350}
          height={350}
          className="object-cover rounded-lg"
        />
      </div>
      <div className="col-span-2 row-span-2">
        <Image
          src="/p1.jpg"
          alt="p1"
          width={350}
          height={200}
          className="object-cover rounded-lg"
        />
      </div>
    </div>
  );
}
