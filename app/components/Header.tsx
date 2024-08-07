import Image from 'next/image';
import Link from 'next/link';

const Header = () => {
  return (
    <header>
      <div className="my-4 flex flex-col items-center justify-center">
        <div className="flex items-center justify-center gap-2">
          <div>
            <Image width="60" height="60" src="/logo.png" alt="" />
          </div>
          <h1 className="font-zen-kaku font-black text-3xl">サヤの豆知識</h1>
        </div>
        <div>
          <p className="text-xs tracking-wider">
            ひよっこWeb開発者が発信するIT備忘録です
          </p>
        </div>
      </div>
      <nav className="my-8">
        <ul className="py-4 flex items-center justify-around bg-black text-white tracking-widest">
          <li>
            <Link href="/" className="hover:text-gray-300">
              ホーム
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-300">
              PC・周辺機器
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-300">
              Web技術関連
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-300">
              DS・ML・業務効率化
            </Link>
          </li>
          <li>
            <Link href="" className="hover:text-gray-300">
              雑談
            </Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
