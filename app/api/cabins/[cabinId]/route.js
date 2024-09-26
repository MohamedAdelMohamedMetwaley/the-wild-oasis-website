import { getCabin } from "@/app/_lib/data-service";

export async function GET(request, { params }) {
  const { cabinId } = params;
  try {
    const [cabin, bookedDates] = await Promise.all([
      getCabin(cabinId),
      getBookedDatesByCabinId(cabinId),
    ]);

    return Respone.json({ cabin, bookedDates });
  } catch {
    return new Response({ message: "Cabin not found" });
  }
}
