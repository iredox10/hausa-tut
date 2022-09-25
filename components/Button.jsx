import Link from "next/link"

export default function Button({path,text}) {
  return (
    <div className="bg-green-500 p-2 capitalize rounded-md">
    <Link href={path}>{text}</Link>
    </div>
  )
}
