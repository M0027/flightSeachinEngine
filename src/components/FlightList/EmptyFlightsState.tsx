import { PlaneTakeoff, CalendarDays } from "lucide-react";

export function EmptyFlightsState({
  onChangeDate,
}: {
  onChangeDate: () => void;
}) {
  return (
    <div
      className="
        flex flex-col items-center justify-center py-20 px-6 text-center animate-fadeIn"
    >
      <div
        className="
          mb-6
          flex items-center justify-center
          h-16 w-16
          rounded-full
          bg-blue-50
        "
      >
        <PlaneTakeoff className="h-8 w-8 text-blue-600" />
      </div>

      <h2 className="text-lg font-semibold text-gray-900 mb-2">
        Sorry,No flights found
      </h2>

      <p className="text-sm text-gray-600 max-w-md mb-6">
       
        no flights found for this date or route.
        How about trying another date or adjusting the filters?
      </p>

      <div className="flex flex-col sm:flex-row gap-3">
        <button
          onClick={onChangeDate}
          className="
            inline-flex items-center justify-center
            gap-2
            rounded-xl
            border border-gray-200
            px-5 py-2.5
            text-sm font-medium
            hover:bg-gray-50
            transition
          "
        >
          <CalendarDays className="h-4 w-4" />
          Ajust a date
        </button>

        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="
            inline-flex items-center justify-center
            rounded-xl
            px-5 py-2.5
            text-sm font-medium
            text-white
            transition
            bg-blue-600
            hover:bg-blue-700
          "
        >
          try again
        </button>
      </div>
    </div>
  );
}
