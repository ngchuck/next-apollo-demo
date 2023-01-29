import ClientOnly from "@/components/ClientOnly";
import Users from "@/components/User";

export default function () {
  return (
    <ClientOnly>
      <Users />
    </ClientOnly>
  )
}
