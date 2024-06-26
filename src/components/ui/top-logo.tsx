
import Image from "next/image"
import Link from "next/link"

export default function TopLogo() { 
    return (
            <Link href="/">
                <Image
                    className="dark:drop-shadow-[0_0_0.3rem_#ffffff70] mb-4"
                    src="/generativet-colored.svg"
                    alt="GENERATIVET"
                    width={360}
                    height={74}
                    priority
                  />
              </Link>
            )
}