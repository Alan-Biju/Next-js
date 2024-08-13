import Link from 'next/link';

const Page = () => {
  return (
    <div>
      <div className="h-56 grid grid-cols-3 gap-4 content-start">
        <Link href="/grid/01">
          <div className="bg-red-300 p-5">01</div>
        </Link>
        <Link href="/grid/02">
          <div className="bg-red-400 p-5">02</div>
        </Link>
        <Link href="/grid/03">
          <div className="bg-red-500 p-5">03</div>
        </Link>
        <Link href="/grid/04">
          <div className="bg-red-600 p-5">04</div>
        </Link>
        <Link href="/grid/05">
          <div className="bg-red-700 p-5">05</div>
        </Link>
      </div>
    </div>
  );
};

export default Page;
