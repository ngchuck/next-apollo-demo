import ClientOnly from "@/components/ClientOnly";
import Users from "@/components/User";

export default function Home() {
  return (
    <ClientOnly>
      <Users/>
    </ClientOnly>
  )
}
